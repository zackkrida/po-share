import { NowRequest, NowResponse } from '@now/node'
import { postgraphile } from 'postgraphile'
import { dbOptions, postgraphileOptions } from './config'

// @TODO: now builder to write postgraphile cache
export default postgraphile<NowRequest, NowResponse>(
  `postgres://${dbOptions.user}:${dbOptions.pass}@${dbOptions.host}/${dbOptions.name}`,
  dbOptions.schemas,
  {
    ...postgraphileOptions,
    readCache: `${__dirname}/postgraphile.cache`,
  }
)
