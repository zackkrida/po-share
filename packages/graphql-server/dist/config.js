"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const pg_simplify_inflector_1 = __importDefault(require("@graphile-contrib/pg-simplify-inflector"));
exports.postgraphileOptions = {
    dynamicJson: true,
    graphiql: false,
    graphqlRoute: '/graphql',
    defaultRole: 'po_share_anonymous',
    appendPlugins: [pg_simplify_inflector_1.default],
    jwtSecret: process.env.JWT_SECRET,
    jwtPgTypeIdentifier: 'po_share.jwt_token',
};
exports.dbOptions = {
    user: process.env.DB_USER,
    pass: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    name: process.env.DB_NAME,
    schemas: process.env.DB_SCHEMAS
        ? process.env.DB_SCHEMAS.split(',')
        : ['app_public'],
};
//# sourceMappingURL=config.js.map