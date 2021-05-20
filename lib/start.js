const inquirer = require('inquirer');
const util = require('util');
const consoleTable = require('console.table');
const {employeeView, departmentView, roleView} = require('./view');
const {employeeCreate, departmentCreate, roleCreate} = require('./create');
const employeeUpdate = require('./update');

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
                employeeCreate();
                break

            case 'Add Departments':
                departmentCreate();
                break

            case 'Add Roles':
                roleCreate();
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

module.exports = startingScreen;