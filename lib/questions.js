// arrays of questions for user input
const managerQuestions = [
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

const engineerQuestions = [
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
const internQuestions = [
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

//export questions
module.exports = { managerQuestions, engineerQuestions, internQuestions };
