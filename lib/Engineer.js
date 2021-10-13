const Employee = require("./Employee");

class Engineer extends Employee {
  constructor(name, id, email, github) {
    super(name, id, email);
    this.github = github;
  }
  getGithub() {
    return this.github;
  }
  getRole() {
    return "Engineer";
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
];

module.exports = Engineer;