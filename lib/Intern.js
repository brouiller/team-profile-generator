const Employee = require('./Employee');

class Intern extends Employee {
  constructor(name, id, email, school) {
    super(name, id, email);
    this.school = school;
  }
  getSchool() {
    return this.school;
  }
  getRole() {
    return "Intern";
  }
}

// array of questions for user input
const intQuestions = [
  {
    type: "input",
    message: "Intern's name?",
    name: "intName",
  },
  {
    type: "input",
    message: "Intern's id?",
    name: "intId",
  },
  {
    type: "input",
    message: "Intern's email?",
    name: "intEmail",
  },
  {
    type: "input",
    message: "Intern's school?",
    name: "intSchool",
  },
];

module.exports = {askIntQuestions, Intern};