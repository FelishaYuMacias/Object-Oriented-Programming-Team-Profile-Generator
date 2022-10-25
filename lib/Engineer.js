//import employee constructor
const Employee = require("./Employee");

//extends employee
class Engineer extends Employee {
constructor(name, id, email, github) {
    //inherits values from employee
    super(name,id,email)
    //can set GitHub account via constructor
    this.github=github
}
//getRole() returns Engineer
getRole () {
    return `Engineer`
 }
//can get GitHub username via getGithub()
getGithub(){
    return this.github
}
 }
//export Engineer constructor
module.exports = Engineer;