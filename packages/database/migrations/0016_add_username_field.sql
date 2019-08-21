alter table po_share.person add column username
  text unique check (char_length(username) < 80)
