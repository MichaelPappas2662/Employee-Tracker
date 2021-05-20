const mysql = require("mysql");
const util = require('util');
const startingScreen = require("../start");



// Create the connection to MySQL WorkBench
let connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'p9$p$NE$AGGvFc53yfFW',
    database: 'employees_DB'
});

connection.query = util.promisify(connection.query);

// Begin the application after establishing the connection.
connection.connect(function (err) {
    if (err) throw err;
    startingScreen();
})

module.exports = connection;