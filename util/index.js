const inquirer = require("inquirer")
const fs = require("fs")
const generateHtml = require("./generateHtml")
const employee = require("./employee")
const engineer = require("./engineer")
const intern = require("./intern")
const manager = require("./manager")

class Index {
    
}
module.exports = Index;
// GIVEN a command-line application that accepts user input
// TODO: WHEN I am prompted for my team members and their information
// THEN an HTML file is generated that displays a nicely formatted team roster based on user input

// TODO: WHEN I click on an email address in the HTML
// THEN my default email program opens and populates the TO field of the email with the address

// TODO: WHEN I click on the GitHub username
// THEN that GitHub profile opens in a new tab

// TODO: WHEN I start the application
// THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number

// TODO: WHEN I enter the team manager’s name, employee ID, email address, and office number
// THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team

// TODO: WHEN I select the engineer option
// THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu

// TODO: WHEN I select the intern option
// THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu

// TODO: WHEN I decide to finish building my team
// THEN I exit the application, and the HTML is generated