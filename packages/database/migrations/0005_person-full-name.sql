create function po_share.person_full_name(person po_share.person) returns text as $$
  select person.first_name || ' ' || person.last_name
$$ language sql stable;

comment on function po_share.person_full_name(po_share.person) is 'A person’s full name which is a concatenation of their first and last name.';
