import PgSimplifyInflectorPlugin from '@graphile-contrib/pg-simplify-inflector'

export const postgraphileOptions = {
  dynamicJson: true,
  graphiql: false,
  graphqlRoute: '/graphql',
  defaultRole: 'po_share_anonymous',
  appendPlugins: [PgSimplifyInflectorPlugin],
  jwtSecret: process.env.JWT_SECRET || String(Math.random()),
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
