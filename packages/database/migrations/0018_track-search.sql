/**
 * This file attempts to create full text search for tracks, what you'd expect from elasticsearch or algolia,
 * inside of Postgresql.
 *
 * References:
 * - https://robots.thoughtbot.com/implementing-multi-table-full-text-search-with-postgres#sql-changes
 */


-- Create a postgres view to hold our searches
-- Add any datbase tables that you'd like to search to this view.
create or replace view po_share.track_search as

  -- Add tracks to the searche view
  select
  track.id as searchable_id,
    track.name as pretty,
    'user' as searchable_type, -- and a type, so when we get our search results we'll know what's being queried and the id of the record
    track.name as term -- the term is whatever string we want to search, so we concatenate all of the fields on users that we want to be searched.
  from po_share.track;

  -- union

  --  -- Add company colors to the searches view
  -- select
  --   company_colors.id as searchable_id,
  --   concat_ws(' ', company_colors.name, company_colors.product_number) as pretty,
  --   'company_color' as searchable_type, -- and a type, so when we get our search results we'll know what's being queried and the id of the
  --   concat_ws(' ', company_colors.id, company_colors.name, company_colors.product_hex, company_colors.product_number, company_colors.product_number) as term -- the term is whatever string we want to search, so we concatenate all of the fields on company_colors that we want to be searched.
  -- from po_share.company_colors


  -- Create an immutable version of concat_ws
  -- @see: https://dba.stackexchange.com/questions/164000/postgresql-full-text-search-on-many-columns/164019
  -- @see: https://stackoverflow.com/questions/12310986/combine-two-columns-and-add-into-one-new-column/12320369#12320369
  create or replace function po_share.f_concat_ws(text, variadic text[])
    returns text language sql immutable as 'select array_to_string($2, $1)';

  -- functions inside of indicies must be immutable, so we must use the two-argument version of to_tsvector()
  -- and our immutable version of concat_ws
  -- also need to cast all items to text
  drop index if exists po_share.index_tracks_on_search_term;
  create index index_tracks_on_search_term on po_share.track
    using gin(to_tsvector('english', track.name)); -- the term is whatever string we want to search, for now just the track name

-- Create the function named `search` with a text argument named `search`.
-- This will expose `Query.search(search: String!, ...)` to GraphQL.
create or replace function po_share.search(search text) returns setof po_share.track_search as $$
  -- This function will return a set of search results from the `searches` view.
  select * from po_share.track_search where to_tsvector(term) @@ to_tsquery(
    replace(regexp_replace(search, '\s+$', ''), ' ', ':*&') || ':*'
  );  -- here we're converting the search query with replace(regexp_replace(search, '\s+$', ''), ' ', ':*&') || ':*'
  -- this looks complicated, but it takes a search, seperates the words with & and adds ":*" to the end of every word,
  -- which turns them into partial matches
  -- so, searches for "Ma vig", "M", "vig", or even "vig ma" would all return "Mary Vigeant"
  -- it's basically a way to fake some qualities of fuzzy-searching in text search.
$$ language sql stable;

-- Permissions for our search view and search function
-- allow logged in and non-logged in to search
grant all on po_share.track_search to po_share_anonymous, po_share_person;
grant execute on function po_share.search(text) to po_share_anonymous, po_share_person;
