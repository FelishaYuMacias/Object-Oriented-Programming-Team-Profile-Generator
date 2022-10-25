//node modules
const fs = require("fs")
const inquirer = require("inquirer")

//link to generate HTML
const generateHTML = require("./util/generateHtml")

//links to Employees -don't need Employee because is linked inside these

const Manager = require("./lib/Manager")
const Engineer = require("./lib/Engineer")
const Intern = require("./lib/Intern")

// empty array for employee list
const team = []

// GIVEN a command-line application that accepts user input

// TODO: WHEN I start the application
// THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
const managerPrompt = () => {
    return inquirer.prompt([
        {
            //Manager's Name
            type: 'input',
            message: "What is the Manager's name?",
            name: 'name',
        },
        {
            //Manager's ID
            type: 'input',
            message: 'What is their employee id?',
            name: 'id'
        },
        {
            //Manager's email
            type: 'input',
            message: 'What is their email address?',
            name: 'email'
        },
        {
            //Manager's Office Number
            type: 'input',
            message: 'What is their office number?',
            name: 'officeNumber'
        }
    ])
    .then ((managerInfo) =>{
    console.log (managerInfo)
   const manager= new Manager(managerInfo.name,managerInfo.id,managerInfo.email,managerInfo.officeNumber) 
   team.push(manager)
   console.log(team)
   addNewEmployee ()
    })
};


// TODO: WHEN I enter the team manager’s name, employee ID, email address, and office number
// THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
function addNewEmployee () {
    inquirer.prompt([
        {
            name: "question",
            type: "list",
            message: "Finish building your team.Do you want to:",
            choices: ["Add an Engineer", "Add an Intern", "My team is complete!"]
        }
    ]).then(answers => {
        switch (answers.question) {
            case "Add an Engineer":
                console.log("add Engineer!")
                addEngineer();
                break;

            case "Add an Intern":
                console.log("add Intern!")
                addIntern();
                break;

            default:
                console.log("Your team page is built!")
                generateTeam (team)
                break;
        }
    })

// TODO: WHEN I select the engineer option
// THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
const addEngineer = () =>{
    console.log("Add Engineer")
    addNewEmployee()
}

const addIntern = () =>{
    console.log("Add Intern")
    addNewEmployee()
    }
}
// TODO: WHEN I select the intern option
// THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu

// TODO: WHEN I decide to finish building my team
// THEN I exit the application, and the HTML is generated

// TODO: WHEN I am prompted for my team members and their information
managerPrompt ()
// THEN an HTML file is generated that displays a nicely formatted team roster based on user input

// TODO: WHEN I click on an email address in the HTML
// THEN my default email program opens and populates the TO field of the email with the address

// TODO: WHEN I click on the GitHub username
// THEN that GitHub profile opens in a new tab
