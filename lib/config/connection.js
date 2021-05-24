const mysql = require("mysql");
const util = require('util');

require('dotenv').config


// Create the connection to MySQL WorkBench
let connection = mysql.createConnection({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_DB
});

connection.query = util.promisify(connection.query);


module.exports = connection;