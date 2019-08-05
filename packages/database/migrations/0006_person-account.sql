-- The user account details, contained in a privately scoped schema
create table po_share_private.person_account (
  person_id        integer primary key references po_share.person(id) on delete cascade,
  email            text not null unique check (email ~* '^.+@.+\..+$'),
  password_hash    text not null
);

-- Comments
comment on table po_share_private.person_account is 'Private information about a person’s account.';
comment on column po_share_private.person_account.person_id is 'The id of the person associated with this account.';
comment on column po_share_private.person_account.email is 'The email address of the person.';
comment on column po_share_private.person_account.password_hash is 'An opaque hash of the person’s password.';
