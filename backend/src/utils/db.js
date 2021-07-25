const { Pool } = require('pg');
require('dotenv').config({ path: '../../../.env' });

const db = new Pool({
  host: 'localhost',
  database: 'postgres',
  user: 'postgres',
  port: '5432',
  password: 'masterkey',
  max: 10,
  min: 1,
});

module.exports = db;
