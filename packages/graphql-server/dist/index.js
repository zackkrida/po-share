"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const postgraphile_1 = require("postgraphile");
const config_1 = require("./config");
// @TODO: now builder to write postgraphile cache
exports.default = postgraphile_1.postgraphile(`postgres://${config_1.dbOptions.user}:${config_1.dbOptions.pass}@${config_1.dbOptions.host}/${config_1.dbOptions.name}`, config_1.dbOptions.schemas, {
    ...config_1.postgraphileOptions,
    readCache: `${__dirname}/../postgraphile.cache`,
});
//# sourceMappingURL=index.js.map