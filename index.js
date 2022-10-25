//node modules
const fs = require("fs")
const inquirer = require("inquirer")

//link to generate HTML
const generateHtml = require("./util/generateHtml")

//links to Employees -don't need Employee because is linked inside these

const Manager = require("./lib/Manager.js")
const Engineer = require("./lib/Engineer.js")
const Intern = require("./lib/Intern.js")


// empty array for employee list
const employees = []

// GIVEN a command-line application that accepts user input

// WHEN I start the application
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
   const manager= new Manager(managerInfo.name,managerInfo.id,managerInfo.email,managerInfo.officeNumber) 

   employees.push(manager)

   addNewEmployee ()
    })
};


// WHEN I enter the team manager’s name, employee ID, email address, and office number
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
                
                // WHEN I decide to finish building my team
                // THEN I exit the application, and the HTML is generated
            default:
                console.log("Team generated!")
                console.log(employees)
                writeHTML()
                break;
        }
    })

// WHEN I select the engineer option
// THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
const addEngineer = () =>{
    return inquirer.prompt([
        {
            //Engineer's Name
            type: 'input',
            message: "What is the Engineer's name?",
            name: 'name',
        },
        {
            //Engineer's ID
            type: 'input',
            message: 'What is their employee id?',
            name: 'id'
        },
        {
            //Engineer's email
            type: 'input',
            message: 'What is their email address?',
            name: 'email'
        },
        {
            //Engineer's GitHub username
            type: 'input',
            message: 'What is their Github username?',
            name: 'github'
        }
    ])
    .then ((engineerInfo) =>{
   const engineer= new Engineer(engineerInfo.name,engineerInfo.id,engineerInfo.email,engineerInfo.github) 

   employees.push(engineer)

   addNewEmployee()
   })
}


// WHEN I select the intern option
// THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
const addIntern = () =>{
    return inquirer.prompt([
        {
            //Intern's Name
            type: 'input',
            message: "What is the Intern's name?",
            name: 'name',
        },
        {
            //Intern's ID
            type: 'input',
            message: 'What is their employee id?',
            name: 'id'
        },
        {
            //Intern's email
            type: 'input',
            message: 'What is their email address?',
            name: 'email'
        },
        {
            //Intern's GitHub username
            type: 'input',
            message: 'What school to they attend?',
            name: 'school'
        }
    ])
    .then ((internInfo) =>{
    console.log (internInfo)

   const intern= new Intern (internInfo.name,internInfo.id,internInfo.email,internInfo.school) 

   employees.push(intern)

   addNewEmployee()
   })
}
}


// WHEN I am prompted for my team members and their information
managerPrompt ()
// THEN an HTML file is generated that displays a nicely formatted team roster based on user input
function writeHTML () {
    fs.writeFile('index.html', generateHtml(employees), (err) => err ? console.log(err) : console.log("Your team page is built check out index.html!"))
        }

