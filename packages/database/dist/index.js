"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config({ path: '../../../.env' });
var postgres_migrations_1 = require("postgres-migrations");
/**
 * Create our databse, run our migrations, and report any errors
 * values are declared in a seperate .env file and attached to the node process
 */
postgres_migrations_1.createDb(process.env.DB_NAME || 'po_share', {
    user: process.env.DB_USER || 'postgres',
    password: process.env.DB_PASSWORD || '',
    host: process.env.DB_HOST || 'localhost',
    port: parseInt(process.env.DB_PORT || '5432'),
}, { logger: logger })
    .then(function () { return runMigrations; })
    .catch(logger)
    .catch(logger);
var runMigrations = postgres_migrations_1.migrate({
    database: process.env.DB_NAME || 'po_share',
    user: process.env.DB_USER || 'postgres',
    password: process.env.DB_PASSWORD || '',
    host: process.env.DB_HOST || 'localhost',
    port: parseInt(process.env.DB_PORT || '5432'),
}, './migrations', { logger: logger });
function logger(msg) {
    console.info(msg);
}
