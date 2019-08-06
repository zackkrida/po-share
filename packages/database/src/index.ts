import { createDb, migrate } from 'postgres-migrations'

/**
 * Create our databse, run our migrations, and report any errors
 * values are declared in a seperate .env file and attached to the node process
 */
createDb(
  process.env.DB_NAME || 'po_share',
  {
    user: process.env.DB_USER || 'postgres',
    password: process.env.DB_PASSWORD || '',
    host: process.env.DB_HOST || 'localhost',
    port: parseInt(process.env.DB_PORT || '5432'),
  },
  { logger }
)
  .then(() => runMigrations)
  .catch(logger)
  .catch(logger)

const runMigrations = migrate(
  {
    database: process.env.DB_NAME || 'po_share',
    user: process.env.DB_USER || 'postgres',
    password: process.env.DB_PASSWORD || '',
    host: process.env.DB_HOST || 'localhost',
    port: parseInt(process.env.DB_PORT || '5432'),
  },
  './migrations',
  { logger }
)

function logger(msg: string) {
  console.info(msg)
}
