//import base class
const Employee = require("./Employee");

//extend base class
class Intern extends Employee {
  constructor(name, id, email, school) {
    super(name, id, email);
    this.school = school;
  }
}

//export class
module.exports = { Intern };
