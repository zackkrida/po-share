-- Create our token type
create type po_share.jwt_token as (
  role text,
  person_id uuid
);
