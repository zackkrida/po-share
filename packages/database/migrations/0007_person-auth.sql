create or replace function po_share.register_person(
  first_name text,
  last_name text,
  email text,
  username text,
  slug text,
  password text
) returns po_share.person as $$
declare
  person po_share.person;
begin
  insert into po_share.person (first_name, last_name, username, slug) values
    (first_name, last_name, username, slug)
    returning * into person;

  insert into po_share_private.person_account (person_id, email, password_hash) values
    (person.id, email, crypt(password, gen_salt('bf')));

  return person;
end;
$$ language plpgsql strict security definer;

comment on function po_share.register_person(text, text, text, text, text, text) is 'Registers a single user and creates an account in our app.';
