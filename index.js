// libraries and files needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const { Manager } = require("./lib/Manager");
const { Intern } = require("./lib/Intern");
const { Engineer } = require("./lib/Engineer");
const { managerQuestions, engineerQuestions, internQuestions } = require("./lib/questions");
// const { engQuestions } = require("./lib/Engineer");

//arrays for storing employee objects
const managerArray = [];
const engineerArray = [];
const internArray = [];

//start the program
function init() {
  askManager();
}

//ask manager questions
const askManager = () => {
  inquirer.prompt(managerQuestions).then((answers) => {
    let manager = new Manager(
      answers.manEmail,
      answers.manId,
      answers.manEmail,
      answers.manOffice
    );
    managerArray.push(manager);
    addMore(answers.addMember);
  });
};

//ask engineer questions
const askEngineer = () => {
  inquirer.prompt(engineerQuestions).then((answers) => {
    let engineer = new Engineer(
      answers.engEmail,
      answers.engId,
      answers.engEmail,
      answers.engGithub
    );
    engineerArray.push(engineer);
    addMore(answers.addMember);
  });
};

//ask intern questions
const askIntern = () => {
  inquirer.prompt(internQuestions).then((answers) => {
    let intern = new Intern(
      answers.intEmail,
      answers.intId,
      answers.intEmail,
      answers.intSchool
    );
    internArray.push(intern);
    addMore(answers.addMember);
  });
};

//add more engineers or interns to the team
const addMore = (more) => {
  switch (more) {
    case "Engineer":
      askEngineer();
      break;
    case "Intern":
      askIntern();
      break;
    default:
      buildHTML();
      break;
  }
};

//build the ./dist/assets/js/index.js file to append html to ./dist/index.html
const buildHTML = () => {
  let exportString = "";
  managerArray.forEach((element) => {
    exportString += `<div class='col'><div class='card'><img src='./assets/imgs/manager.png' class='card-img-top' alt='manager icon'><div class='card-body'><h5 class='card-title'>${element.name}</h5><p class='card-text'>Manager</p></div><ul class='list-group list-group-flush'><li class='list-group-item'>ID: ${element.id}</li><li class='list-group-item'>Email: <a href='mailto:${element.email}'>${element.email}</a></li><li class='list-group-item'>Office: ${element.office}</li></ul></div></div>`;
  });
  engineerArray.forEach((element) => {
    exportString += `<div class='col'><div class='card'><img src='./assets/imgs/engineer.png' class='card-img-top' alt='engineer icon'><div class='card-body'><h5 class='card-title'>${element.name}</h5><p class='card-text'>Engineer</p></div><ul class='list-group list-group-flush'><li class='list-group-item'>ID: ${element.id}</li><li class='list-group-item'>Email: <a href='mailto:${element.email}'>${element.email}</a></li><li class='list-group-item'>GitHub: <a href='https://github.com/${element.github}' target='_blank'>${element.github}</a></li></ul></div></div>`;
  });
  internArray.forEach((element) => {
    exportString += `<div class='col'><div class='card'><img src='./assets/imgs/intern.png' class='card-img-top' alt='intern icon'><div class='card-body'><h5 class='card-title'>${element.name}</h5><p class='card-text'>Intern</p></div><ul class='list-group list-group-flush'><li class='list-group-item'>ID: ${element.id}</li><li class='list-group-item'>Email: <a href='mailto:${element.email}'>${element.email}</a></li><li class='list-group-item'>School: ${element.school}</li></ul></div></div>`;
  });
  fs.writeFile(
    "./dist/assets/js/index.js",
    `const colEl = document.getElementById('hook');
colEl.innerHTML = "${exportString}";`,
    "utf8",
    function (err) {
      if (err) return console.log(err);
      console.log("Team webpage created.");
    }
  );
};

init();
