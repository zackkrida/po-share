alter table po_share.person enable row level security;

create policy select_person on po_share.person for select
  using (true);

create policy update_person on po_share.person for update to po_share_person
  using (id = nullif(current_setting('jwt.claims.person_id', true), '')::integer);

create policy delete_person on po_share.person for delete to po_share_person
  using (id = nullif(current_setting('jwt.claims.person_id', true), '')::integer);
