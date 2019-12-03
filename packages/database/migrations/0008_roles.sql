drop role if exists po_share_postgraphile;
create role po_share_postgraphile login password 'xyz';

drop role if exists po_share_anonymous;
create role po_share_anonymous;
grant po_share_anonymous to po_share_postgraphile;

drop role if exists po_share_person;
create role po_share_person;
grant po_share_person to po_share_postgraphile;
