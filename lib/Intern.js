//import employee constructor
const Employee = require("./Employee");

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
//export Intern constructor
module.exports = Intern;