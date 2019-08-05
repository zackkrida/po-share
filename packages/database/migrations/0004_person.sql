-- Create our person table
create table po_share.person (
  id           serial primary key
  first_name   text not null check (char_length(first_name) < 80),
  last_name    text check (char_length(last_name) < 80),
  about        text,
  created_at   timestamp default now(),
  updated_at   timestamp default now()
);

-- Set the 'updated_at' column every time we modify our person
create trigger person_updated_at before update
  on po_share.person
  for each row
  execute procedure po_share_private.set_updated_at();

-- Comments
comment on table po_share.person is 'A user of the app.';
comment on column po_share.person.id is 'The primary unique identifier for the person.';
comment on column po_share.person.first_name is 'The person’s first name.';
comment on column po_share.person.last_name is 'The person’s last name.';
comment on column po_share.person.about is 'A short description about the user, written by the user.';
comment on column po_share.person.created_at is 'The time this person was created.';
