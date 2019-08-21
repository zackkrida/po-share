import { createPostGraphileSchema } from 'postgraphile'
import { postgraphileOptions, dbOptions } from './config'
import { Pool } from 'pg'

/**
 * Generate a postgraphile.cache file to make our serverless lamda function *much* faster!
 */
async function main() {
  const pgPool = new Pool({
    connectionString: `postgres://${dbOptions.user}:${dbOptions.pass}@${dbOptions.host}/${dbOptions.name}`,
  })
  await createPostGraphileSchema(pgPool, dbOptions.schemas, {
    ...postgraphileOptions,
    writeCache: `${__dirname}/../dist/postgraphile.cache`,
  })
  await pgPool.end()
}

// If successfull, do nothing, otherwise throw the error
main().then(null, error => {
  console.error(error)
  process.exit(1)
})
