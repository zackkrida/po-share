```bash
postgraphile \
 --connection postgres://po_share_postgraphile:xyz@localhost \
 --schema po_share \
 --default-role po_share_anonymous \
 --secret keyboard_kitten \
 --token po_share.jwt_token
```
