-- Any postgres user can list tracks
grant select on table po_share.track to po_share_anonymous, po_share_person;

-- Only logged-in users can create/update/delete tracks
grant insert, update, delete on table po_share.track to po_share_person;

-- Row level security
alter table po_share.track enable row level security;

create policy select_track on po_share.track for select
  using (true);

create policy insert_track on po_share.track for insert to po_share_person
  with check (person_id = nullif(current_setting('jwt.claims.person_id', true), '')::uuid);

create policy update_track on po_share.track for update to po_share_person
  using (person_id = nullif(current_setting('jwt.claims.person_id', true), '')::uuid);

create policy delete_track on po_share.track for delete to po_share_person
  using (person_id = nullif(current_setting('jwt.claims.person_id', true), '')::uuid);

-- Comment on track, remove default delete mutation
comment on table po_share.track is E'@omit delete';
