create function po_share.authenticate(
  email text,
  password text
) returns po_share.jwt_token as $$
declare
  account po_share_private.person_account;
begin
  select a.* into account
  from po_share_private.person_account as a
  where a.email = $1;

  if account.password_hash = crypt(password, account.password_hash) then
    return ('po_share_person', account.person_id)::po_share.jwt_token;
  else
    return null;
  end if;
end;
$$ language plpgsql strict security definer;

comment on function po_share.authenticate(text, text) is 'Creates a JWT token that will securely identify a person and give them certain permissions.';
