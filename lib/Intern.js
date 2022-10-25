const Employee = require("./Employee");

// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
//intern extends employee
class Intern extends Employee {
    constructor(name, id, email,school){
        //inherits these values from employee
        super (name, id, email)
        //can get school via constructor
        this.school=school
    }
    //getRole() returns Intern
getRole (){
    return `Intern`
}
//can get school via getSchool()
getSchool () {
    return this.school
}
}

module.exports = Intern;