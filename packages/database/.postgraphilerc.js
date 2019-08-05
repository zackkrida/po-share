require('dotenv').config({ path: '../../.env' })

const PgSimplifyInflectorPlugin = require('@graphile-contrib/pg-simplify-inflector')

module.exports = {
  options: {
    connection: `postgres://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}/${process.env.DB_NAME}`,
    schema: ['po_share', 'po_share_private'],
    jwtSecret: process.env.JWT_SECRET,
    defaultRole: 'po_share_anonymous',
    jwtTokenIdentifier: 'po_share.jwt_token',
    enhanceGraphiql: true,
    cors: process.env.NODE_ENV === 'production' ? false : true,
    exportSchemaGraphql: 'schema.gql',
    appendPlugins: [PgSimplifyInflectorPlugin],
    watch: process.env.NODE_ENV === 'production' ? false : true,
  },
}
