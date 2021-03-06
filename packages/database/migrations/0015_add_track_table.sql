-- Create our track table
create table po_share.track (
  id           serial primary key,
  person_id    integer references po_share.person(id) on delete cascade,
  name         text not null check (char_length(name) < 80),
  image        text,
  file         text,
  public       boolean default true,
  created_at   timestamp default now(),
  updated_at   timestamp default now(),
  published_at timestamp,
  deleted_at   timestamp
);
