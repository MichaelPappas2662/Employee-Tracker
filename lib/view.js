const connection = require('./config/connection');
const consoleTable = require('console.table');
const startingScreen = require('./start');
const util = require('util');



// view all of the employees code.
const employeeView = async () => {
    console.log('Employee View');
    try {
        let query = 'SELECT * FROM employee';
        connection.query = util.promisify(connection.query);
        connection.query(query, function (err, res) {
            if (err) throw err;
            let employeeArray = [];
            res.forEach(employee => employeeArray.push(employee));
            console.table(employeeArray);
        });
    } catch (err) {
        console.log(err);
        startingScreen();
    }startingScreen();
};

// View all of the departments code.
const departmentView = async () => {
    console.log('Department View');
    try {
        let query = 'SELECT * FROM department';
        connection.query = util.promisify(connection.query);
        connection.query(query, function (err, res) {
            if (err) throw err;
            let departmentArray = [];
            res.forEach(department => departmentArray.push(department));
            console.table(departmentArray);
        });
    } catch (err) {
        console.log(err);
        startingScreen();
    }startingScreen();
};

// View all of the roles code.
const roleView = async () => {
    console.log('Role View');
    try {
        let query = 'SELECT * FROM role';
        connection.query = util.promisify(connection.query);
        connection.query(query, function (err, res) {
            if (err) throw err;
            let roleArray = [];
            res.forEach(role => roleArray.push(role));
            console.table(roleArray);
            
        });
    } catch (err) {
        console.log(err);
        startingScreen();
    }startingScreen();
};

module.exports = {
    roleView,
    departmentView,
    employeeView,
};