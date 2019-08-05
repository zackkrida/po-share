-- A function to update an updated_at column to the current timestamp on trigger
create function po_share_private.set_updated_at() returns trigger as $$
begin
  new.updated_at := current_timestamp;
  return new;
end;
$$ language plpgsql;
