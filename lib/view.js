const connection = require('./config/connection');
const consoleTable = require('console.table');
// const startingScreen = require('./start');
const util = require('util');



// view all of the employees code.
const employeeView = async () => {
    console.log('Employee View');
    try {
        let query = `SELECT employee.id AS ID, 
        CONCAT (employee.first_name, " ", employee.last_name) AS 'Name',
        role.title AS 'Job Title', 
        department_name AS 'Department',
        role.salary AS 'Salary', 
        CONCAT (manager.first_name, " ", manager.last_name) AS 'Manager'
        FROM employee
        LEFT JOIN role ON employee.role_id = role.id
        LEFT JOIN department ON role.department_id = department.id
        LEFT JOIN employee manager ON employee.manager_id = manager.id`;;
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
        let query =  `SELECT department.id AS id,
        department_name AS 'Department'
        FROM department`;;
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
        let query = `SELECT role.id AS id, 
        role.title AS 'Job Title', 
        department_name AS 'Department'
        FROM role
        INNER JOIN department ON role.department_id = department.id`;;
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