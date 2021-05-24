const inquirer = require('inquirer');
const connect = require('./config/connection');
const consoleTable = require('console.table');
const {employeeView, departmentView, roleView} = require('./view');
const {employeeCreate, departmentCreate, roleCreate} = require('./create');
const employeeUpdate = require('./update');

// Starting page code .
async function startingScreen() {
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
            views(answer);
        }catch (err) {
            console.log(err);
            startingScreen();
        }
    }
      async  function views(answer) {   
            switch (answer.action) {
                case 'View Employees':
                   await employeeView();
                    startingScreen();
                    break;
    
                case 'View Departments':
                   await departmentView();
                    startingScreen();
                    break;
    
                case 'View Roles':
                   await roleView();
                    startingScreen();
                    break;
    
                case 'Add Employees':
                   await employeeCreate();
                    startingScreen();
                    break
    
                case 'Add Departments':
                  await  departmentCreate();
                    startingScreen();
                    break
    
                case 'Add Roles':
                   await roleCreate();
                    startingScreen();
                    break
    
                case 'Update Employee Role':
                   await employeeUpdate();
                    startingScreen();
                    break
    
                case 'Exit':
                    connection.end();
                    break;
            };
        } 
        
    


module.exports = {startingScreen};
