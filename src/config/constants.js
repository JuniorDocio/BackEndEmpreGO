const { config } = require('dotenv');

//Configura o dotenv
config();

const SERVER_PORT = process.env.SERVER_PORT || 3000;

const DB_DIALECT = process.env.DB_DIALECT || 'mysql';
const DB_NAME = process.env.DB_NAME || 'dbemprego';
const DB_USERNAME = process.env.DB_USERNAME || 'root';
const DB_PASSWORD = process.env.DB_PASSWORD || '';

const DB_HOST = process.env.DB_URL || 'localhost';
const DB_PORT = process.env.DB_PORT || '80';

const DB_URL = `${DB_HOST}:${DB_PORT}`

module.exports = {
  SERVER_PORT,
  DB_DIALECT,
  DB_NAME,
  DB_USERNAME,
  DB_PASSWORD,
  DB_HOST,
  DB_PORT,
  DB_URL
}