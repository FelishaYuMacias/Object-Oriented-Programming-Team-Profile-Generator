//import employee constructor
const Employee = require("./Employee");

//manager extends employee
class Manager extends Employee {
    constructor(name, id, email,officeNumber){
        //inherits these values from employee
        super (name, id, email)
        //can get office number via constructor
        this.officeNumber=officeNumber
    }
    //getRole() returns Manager
getRole (){
    return `Manager`
}
//can get office number via getOfficeNumber()
getOfficeNumber () {
    return this.officeNumber
}
}
//export Manager constructor
module.exports = Manager