"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const postgraphile_1 = require("postgraphile");
const config_1 = require("./config");
const pg_1 = require("pg");
/**
 * Generate a postgraphile.cache file to make our serverless lamda function *much* faster!
 */
async function main() {
    const pgPool = new pg_1.Pool({
        connectionString: `postgres://${config_1.dbOptions.user}:${config_1.dbOptions.pass}@${config_1.dbOptions.host}/${config_1.dbOptions.name}`,
    });
    await postgraphile_1.createPostGraphileSchema(pgPool, config_1.dbOptions.schemas, {
        ...config_1.postgraphileOptions,
        writeCache: `${__dirname}/../dist/postgraphile.cache`,
    });
    await pgPool.end();
}
// If successfull, do nothing, otherwise throw the error
main().then(null, error => {
    console.error(error);
    process.exit(1);
});
//# sourceMappingURL=makeCache.js.map