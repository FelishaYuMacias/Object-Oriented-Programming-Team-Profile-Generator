const inquirer = require("inquirer")

// TODO: Write code to define and export the Employee class
class Employee {
    constructor (name,id,email,role){

        this.name=name
        this.id=id
        this.email=email
        role= "Employee"
    }
getName =()=>{
return 

inquirer.prompt([
    {
        //name
        type: 'input',
        message: 'What is the Employee name?',
        name: 'name',
    }
])
}
}
module.exports = Employee;