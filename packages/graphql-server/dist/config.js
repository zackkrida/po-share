"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var dotenv_1 = require("dotenv");
dotenv_1.config({ path: '../../.env' });
exports.postgraphileOptions = {
    dynamicJson: true,
    graphiql: false,
    graphqlRoute: '/graphql',
    jwtSecret: process.env.JWT_SECRET || String(Math.random()),
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
