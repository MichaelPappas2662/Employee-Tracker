const connection = require('./config/connection');
const consoleTable = require('console.table');
// const startingScreen = require('./start');
const util = require('util');



// view all of the employees code.
const employeeView = async () => {
    console.log('Employee View');
    try {
        let query = 'SELECT * FROM employee';
        connection.query = util.promisify(connection.query);
        const employees = await connection.query(query);
            console.table(employees);
            // startingScreen.startingScreen()
        }catch (err) {
            console.log(err);
    }        //startingScreen.startingScreen();
    };


// View all of the departments code.
const departmentView = async () => {
    console.log('Department View');
    try {
        let query = 'SELECT * FROM department';
        connection.query = util.promisify(connection.query);
        const departments = await connection.query(query)
            console.table(departments);
            //startingScreen.startingScreen();
        }catch (err) {
            console.log(err);
    }       
 };

// View all of the roles code.
const roleView = async () => {
    console.log('Role View');
    try {
        let query = 'SELECT * FROM role';
        connection.query = util.promisify(connection.query);
        const roles = await connection.query(query) 
            console.table(roles);
        }catch (err) {
            console.log(err);
    } 
  }
  
module.exports = {
    roleView,
    departmentView,
    employeeView,
};