//import base class
const Employee = require("./Employee");

//extend base class
class Manager extends Employee {
  constructor(name, id, email, office) {
    super(name, id, email);
    this.office = office;
  }
}

//export class and question array
module.exports = { Manager };
