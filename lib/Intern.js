//import base class
const Employee = require('./Employee');

//extend base class
class Intern extends Employee {
  constructor(name, id, email, school) {
    super(name, id, email);
    this.school = school;
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
  {
    type: "list",
    message: "Add another team member?",
    name: "addMember",
    choices: ["Engineer", "Intern", "No"],
  },
];

//export class and question array
module.exports = {Intern, intQuestions};