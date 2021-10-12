const inquirer = require("inquirer");

// array of questions for user input
const manQuestions =  [
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
    name: "manAddMember",
    choices: ["Engineer", "Intern", "No"],
  },
];

const askManQuestions = () => {
    inquirer.prompt(manQuestions).then((answers) => {
    // console.log(JSON.stringify(answers));
    //   return answers;
  });
};
const dummyFunc = () => { };
module.exports = { askManQuestions, dummyFunc };