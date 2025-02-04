const { drizzle } = require('drizzle-orm/postgres-js');
const postgres = require('postgres');
const { users } = require('./schema');
const { schema } = require('./drizzle.config');
require('dotenv').config();

const {
    DB_HOST,
    DB_PORT,
    DB_USER,
    DB_PASSWORD,
    DB_DATABASE,
} = process.env;

const connectionString = `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_DATABASE}`;

const client = new postgres(connectionString)
const db = drizzle(client, {schema: {users}});

module.exports =  {
    db, client
}