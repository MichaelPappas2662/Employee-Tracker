const connection = require('./lib/config/connection');
const consoleTable = require('console.table');
const startApp = require("./lib/start");
const util = require('util');

//Logo 
const logo = require('asciiart-logo');
const config = require('./package.json');
const longText = 'This is my Employee Tracker app,'+ 
' click the arrows to navigate to the menu' + 
' or the numbers 1-6.';

console.log(logo({
    name: 'Employee Tracker',
    font: 'ANSI Shadow',
    lineChars: 10,
    padding: 2,
    margin: 3,
    borderColor: 'grey',
    logoColor: 'cyan',
    textColor: 'cyan',})
    .emptyLine()
    .right('version 1.0.123')
    .emptyLine()
    .center(longText)
    .render());

   


connection.query = util.promisify(connection.query);
// Begin the application after establishing the connection.
connection.connect(function (err) {
    if (err) throw err;
    startApp();
})
