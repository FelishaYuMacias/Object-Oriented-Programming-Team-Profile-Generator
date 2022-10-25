const Employee = require("./Employee");

// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
class Engineer extends Employee {
constructor(GetGithubUser) {
    const getGithub = ()=>{
        return GetGithubUser
        console.log("Get Github User")
}

 }

}
module.exports = Engineer;