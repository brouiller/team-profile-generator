//import base class
const Employee = require("./Employee");

//extend base class
class Engineer extends Employee {
  constructor(name, id, email, github) {
    super(name, id, email);
    this.github = github;
  }
}

// array of questions for user input
const engQuestions = [
  {
    type: "input",
    message: "Engineer's name?",
    name: "engName",
  },
  {
    type: "input",
    message: "Engineer's id?",
    name: "engId",
  },
  {
    type: "input",
    message: "Engineer's email?",
    name: "engEmail",
  },
  {
    type: "input",
    message: "Engineer's GitHub username?",
    name: "engGithub",
  },
  {
    type: "list",
    message: "Add another team member?",
    name: "addMember",
    choices: ["Engineer", "Intern", "No"],
  },
];

//export class and question array
module.exports = {Engineer, engQuestions};