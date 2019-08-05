alter default privileges revoke execute on functions from public;

grant usage on schema po_share to po_share_anonymous, po_share_person;

grant select on table po_share.person to po_share_anonymous, po_share_person;
grant update, delete on table po_share.person to po_share_person;

grant execute on function po_share.person_full_name(po_share.person) to po_share_anonymous, po_share_person;
grant execute on function po_share.authenticate(text, text) to po_share_anonymous, po_share_person;
grant execute on function po_share.current_person() to po_share_anonymous, po_share_person;

grant execute on function po_share.register_person(text, text, text, text) to po_share_anonymous;
