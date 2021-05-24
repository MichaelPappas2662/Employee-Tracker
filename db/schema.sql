DROP DATABASE IF EXISTS employees_DB;

CREATE DATABASE employees_DB;

USE employees_DB;

----- Create Department table -----

CREATE TABLE department (
    id INT NOT NULL AUTO_INCREMENT,
    department_name VARCHAR(30) NOT NULL,
    PRIMARY KEY (id)
);

----- Create Role Table -----

CREATE TABLE role (
    id INT NOT NULL AUTO_INCREMENT,
    title VARCHAR(30) NOT NULL,
    salary DECIMAL(10, 0) NOT NULL,
    department_id INT NOT NULL,
    PRIMARY KEY (id)
    
);
-- create Employee table ----

CREATE TABLE employee (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,
  manager_id INT,  
  role_id INT
);

CREATE INDEX idx_role_id ON employee (role_id);
CREATE INDEX idx_manager_id ON employee (manager_id);
CREATE INDEX idx_department_id ON role (department_id);