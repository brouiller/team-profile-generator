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
  // manQuestions() {
    // const manQ = [
    //   {
    //     type: "input",
    //     message: "Team manager's name?",
    //     name: "manName",
    //   },
    //   {
    //     type: "input",
    //     message: "Team manager's id?",
    //     name: "manId",
    //   },
    //   {
    //     type: "input",
    //     message: "Team manager's email?",
    //     name: "manEmail",
    //   },
    //   {
    //     type: "input",
    //     message: "Team manager's office number?",
    //     name: "manOffice",
    //   },
    //   {
    //     type: "list",
    //     message: "Add another team member?",
    //     name: "manAddMember",
    //     choices: ["Engineer", "Intern", "No"],
    //   },
    // ];
  //   return manQ;

// const askManQuestions = () => {
//     inquirer.prompt(manQuestions).then((answers) => {
//     console.log(JSON.stringify(answers));
//     //   return answers;
//   });
// };
// askManQuestions();
module.exports = Manager;
