const Employee = require("./Employee");

// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
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

module.exports = Manager