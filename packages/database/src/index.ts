import { createDb, migrate } from 'postgres-migrations'

/**
 * Create our databse, run our migrations, and report any errors
 * values are declared in a seperate .env file and attached to the node process
 */
createDb(
  'database-name',
  {
    defaultDatabase: process.env.DB_NAME || 'postgres', // optional, default: "postgres"
    user: process.env.DB_USER || 'postgres',
    password: process.env.DB_PASSWORD || 'password',
    host: process.env.DB_HOST || 'localhost',
    port: parseInt(process.env.DB_PORT) || 5432,
  },
  { logger }
)
  .then(() => runMigrations)
  .catch(logger)

const runMigrations = migrate(
  {
    database: 'database-name',
    user: 'postgres',
    password: 'password',
    host: 'localhost',
    port: 5432,
  },
  'path/to/migration/files',
  { logger }
)

function logger(msg: string) {
  console.info(msg)
}
