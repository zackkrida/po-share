create function po_share.current_person() returns po_share.person as $$
  select *
  from po_share.person
  where id = nullif(current_setting('jwt.claims.person_id', true), '')::uuid
$$ language sql stable;

comment on function po_share.current_person() is 'Gets the person who was identified by our JWT.';
