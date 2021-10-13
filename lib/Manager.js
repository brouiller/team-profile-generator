//import base class
const Employee = require("./Employee");

//extend base class
class Manager extends Employee {
  constructor(name, id, email, office) {
    super(name, id, email);
    this.office = office;
  }
}

  // array of questions for user input
    const manQuestions = [
      {
        type: "input",
        message: "Team manager's name?",
        name: "manName",
      },
      {
        type: "input",
        message: "Team manager's id?",
        name: "manId",
      },
      {
        type: "input",
        message: "Team manager's email?",
        name: "manEmail",
      },
      {
        type: "input",
        message: "Team manager's office number?",
        name: "manOffice",
      },
      {
        type: "list",
        message: "Add another team member?",
        name: "addMember",
        choices: ["Engineer", "Intern", "No"],
      },
];

//export class and question array
module.exports = { Manager, manQuestions };
