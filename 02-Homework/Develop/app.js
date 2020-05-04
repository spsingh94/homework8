const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");
const render = require("./lib/htmlRenderer");
var employees = [];

function addEmployee() {
    inquirer.prompt([{
        type: "list",
        name: "employee",
        message: "Which employee would you like to add?",
        choices: ["Engineer", "Intern", "Manager"]
    }]).then(function (res) {
        switch (res.employee) {
            case "Manager":
                createManager();
                break;
            case "Intern":
                createIntern();
                break;
            case "Engineer":
                createEngineer();
        };
    });
};//createEngineer function
function createEngineer() {
    inquirer.prompt([{
        type: "input",
        name: "name",
        message: "What is your name?"
    },
    {
        type: "input",
        name: "id",
        message: "What is your id?"
    },
    {
        type: "input",
        name: "email",
        message: "What is your email?"
    },
    {
        type: "input",
        name: "github",
        message: "What is your github?"
    }]).then(function (res) {
        var engineer = new Engineer(res.name, res.id, res.email, res.github)
        employees.push(engineer);
        init();
    })
};
//createIntern function
function createIntern() {
    inquirer.prompt([{
        type: "input",
        name: "name",
        message: "What is your name?"
    },
    {
        type: "input",
        name: "id",
        message: "What is your id?"
    },
    {
        type: "input",
        name: "email",
        message: "What is your email?"
    },
    {
        type: "input",
        name: "school",
        message: "What school do you attend?"
    }])
        .then(function (res) {
            var intern = new Intern(res.name, res.id, res.email, res.school);
            employees.push(intern);
            init();
        })
};
//createManager function
function createManager() {
    inquirer.prompt([{
        type: "input",
        name: "name",
        message: "What is your name?"
    },
    {
        type: "input",
        name: "id",
        message: "What is your id?"
    },
    {
        type: "input",
        name: "email",
        message: "What is your email?"
    },
    {
        type: "input",
        name: "office",
        message: "What is your office number?"
    }])
        .then(function (res) {
            var manager = new Manager(res.name, res.id, res.email, res.office);
            employees.push(manager);
            init();
        })
};
//do the same thing with other roles. (will do the same thing done on 21 to 24)
// Write code to use inquirer to gather information about the development team members,
function init() {
    inquirer.prompt([{
        type: "list",
        name: "continue",
        message: "Do you want to enter an employee?",
        choices: ["yes", "no"]
    }]).then(function (res) {
        if (res.continue == "yes") {
            addEmployee();
        } else {
            let html = render(employees);
            fs.writeFile(outputPath, html, function (error) {
                if (error) {
                    throw error;
                }
                console.log("File Successfully Written");
            })
        }
    })
};
init();
