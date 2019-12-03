import PgSimplifyInflectorPlugin from '@graphile-contrib/pg-simplify-inflector'
import { NodePlugin } from 'graphile-build'

export const postgraphileOptions = {
  dynamicJson: true,
  graphqlRoute: '/graphql',
  defaultRole: 'po_share_anonymous',
  appendPlugins: [PgSimplifyInflectorPlugin],
  skipPlugins: [NodePlugin],
  jwtSecret: process.env.JWT_SECRET,
  exportGqlSchemaPath: `${__dirname}/../schema.gql`,
  jwtPgTypeIdentifier: 'po_share.jwt_token',
}

export const dbOptions = {
  user: process.env.DB_USER,
  pass: process.env.DB_PASSWORD,
  host: process.env.DB_HOST,
  name: process.env.DB_NAME,
  schemas: process.env.DB_SCHEMAS
    ? process.env.DB_SCHEMAS.split(',')
    : ['app_public'],
}
