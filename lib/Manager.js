const Employee = require("./Employee");

class Manager extends Employee {
  constructor(name, id, email, office) {
    super(name, id, email);
    this.office = office;
  }
  getRole() {
    return "Manager";
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

module.exports = { Manager, manQuestions };
