//import employee constructor
const inquirer = require("inquirer")

class Employee {
    //instantiate employee instance, set name,id, and email via constructor argument
    constructor (name,id,email){
        
        this.name=name
        this.id=id
        this.email=email
    };
    //get name via getName()
 getName () {
    return this.name
 }
 //get id via getId()
 getId (){
    return this.id
 }
 //get email via getEmail()
 getEmail (){
    return this.email
 }
 //getRole () returns "Employee"
 getRole () {
    return `Employee`
 }
}
//export Employee constructor
module.exports = Employee;