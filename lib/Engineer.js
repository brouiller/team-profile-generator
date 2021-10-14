//import base class
const Employee = require("./Employee");

//extend base class
class Engineer extends Employee {
  constructor(name, id, email, github) {
    super(name, id, email);
    this.github = github;
  }
}

//export class and question array
module.exports = { Engineer };
