const mysql = require("mysql");
const inquirer = require("inquirer");
const consoleTable = require("console.table");
// const promiseMySql = require("promise-mysql");
const util = require("util");

//Logo 
const logo = require('asciiart-logo');
const config = require('./package.json');
const longText = 'Lorem ipsum dolor sit amet, ' +
    'consectetur adipiscing elit, ' +
    'sed do eiusmod tempor incididunt ut labore et ' +
    'dolore magna aliqua. Ut enim ad minim veniam, ' +
    'quis nostrud exercitation ullamco laboris ' +
    'nisi ut aliquip ex ea commodo consequat. Duis aute ' +
    'irure dolor in reprehenderit in voluptate velit esse ' +
    'cillum dolore eu fugiat nulla pariatur. ' +
    'Excepteur sint occaecat cupidatat non proident, ' +
    'sunt in culpa qui officia deserunt mollit anim ' +
    'id est laborum.';

console.log(logo({
    name: 'Just a simple example',
    font: 'ANSI Shadow',
    lineChars: 10,
    padding: 2,
    margin: 3,
    borderColor: 'grey',
    logoColor: 'bold-green',
    textColor: 'green',})
    .emptyLine()
    .right('version 3.7.123')
    .emptyLine()
    .center(longText)
    .render());

// Create the connection to MySQL WorkBench
let connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '',
    database: 'employee_DB'
});

connection.query = util.promisify(connection.query);

// Begin the application after establishing the connection.
connection.connect(function (err) {
    if (err) throw err;
    startingScreen();
})

// Starting page code .
const startingScreen = async () => {
    try {
        let answer = await inquirer.prompt({
            name: 'action',
            type: 'list',
            message: 'What would you like to do?',
            choices: [
                'View Employees',
                'View Departments',
                'View Roles',
                'Add Employees',
                'Add Departments',
                'Add Roles',
                'Update Employee Role',
                'Exit'
            ]
        });
        switch (answer.action) {
            case 'View Employees':
                employeeView();
                break;

            case 'View Departments':
                departmentView();
                break;

            case 'View Roles':
                roleView();
                break;

            case 'Add Employees':
                employeeAdd();
                break

            case 'Add Departments':
                departmentAdd();
                break

            case 'Add Roles':
                roleAdd();
                break

            case 'Update Employee Role':
                employeeUpdate();
                break

            case 'Exit':
                connection.end();
                break;
        };
    } catch (err) {
        console.log(err);
        startingScreen();
    };
}


// view all of the employees code.
const employeeView = async () => {
    console.log('Employee View');
    try {
        let query = 'SELECT * FROM employee';
        connection.query(query, function (err, res) {
            if (err) throw err;
            let employeeArray = [];
            res.forEach(employee => employeeArray.push(employee));
            console.table(employeeArray);
            initialAction();
        });
    } catch (err) {
        console.log(err);
        initialAction();
    };
}

// View all of the departments code.
const departmentView = async () => {
    console.log('Department View');
    try {
        let query = 'SELECT * FROM department';
        connection.query(query, function (err, res) {
            if (err) throw err;
            let departmentArray = [];
            res.forEach(department => departmentArray.push(department));
            console.table(departmentArray);
            initialAction();
        });
    } catch (err) {
        console.log(err);
        initialAction();
    };
}
// View all of the roles code.
const roleView = async () => {
    console.log('Role View');
    try {
        let query = 'SELECT * FROM role';
        connection.query(query, function (err, res) {
            if (err) throw err;
            let roleArray = [];
            res.forEach(role => roleArray.push(role));
            console.table(roleArray);
            initialAction();
        });
    } catch (err) {
        console.log(err);
        initialAction();
    };
}