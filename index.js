// packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const Manager = require("./lib/Manager");
const Intern = require("./lib/Intern");
const Engineer = require("./lib/Engineer");

const manArr = [];
const engArr = [];
const intArr = [];

function init() {
  const ask = () => {
    inquirer
      .prompt([
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
      ])
      .then((answers) => {
        let manager = new Manager(
          answers.manEmail,
          answers.manId,
          answers.manEmail,
          answers.manOffice
        );
        // console.log(manager);
        manArr.push(manager);
        // console.log(`output: ${JSON.stringify(manArr)}`);
        addMore(answers.addMember);
      });
  };

  const askEng = () => {
    inquirer
      .prompt([
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
      ])
      .then((answers) => {
        let engineer = new Engineer(
          answers.engEmail,
          answers.engId,
          answers.engEmail,
          answers.engGithub
        );
        engArr.push(engineer);
        addMore(answers.addMember);
      });
  };
  const askInt = () => {
    inquirer
      .prompt([
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
      ])
      .then((answers) => {
        let intern = new Intern(
          answers.intEmail,
          answers.intId,
          answers.intEmail,
          answers.intSchool
        );
        intArr.push(intern);
        addMore(answers.addMember);
      });
  };
    const addMore = (more) => {
      switch (more) {
        case "Engineer":
          askEng();
          break;
        case "Intern":
          askInt();
          break;
        default:
          buildHTML()
          break;
      }
    };
  ask();
}
const buildHTML = () => {
  fs.writeFile(
    "./src/index.html",
    `<!DOCTYPE html>
<html lang='en-us'>
  <head>
    <meta charset='UTF-8' />
    <meta name='viewport' content='width=device-width, initial-scale=1.0' />
    <meta http-equiv='X-UA-Compatible' content='ie=edge' />
    <link
      rel='stylesheet'
      href='https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/css/bootstrap.min.css'
      integrity='sha384-F3w7mX95PdgyTmZZMECAngseQB83DfGTowi0iMjiWaeVhAn4FJkqJByhZMI3AhiU'
      crossorigin='anonymous'
    />
    <link rel='stylesheet' href='./assets/css/reset.css' />
    <link rel='stylesheet' href='./assets/css/style.css' />
    <title>My Team</title>
  </head>
  <body>
    <header class='container-fluid text-center'>
      <h1 class='text-center h1'>My Team</h1>
    </header>
    <main class='container'>
      <div class='row'>
        <div class='col'>
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">${name}</h5>
              <p class="card-text">${role}</p>
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">${id}</li>
              <li class="list-group-item">${email}</li>
              <li class="list-group-item">${wildcard}</li>
            </ul>
          </div>
        </div>
      </div>
    </main>
    <footer></footer>
    <script
      src='https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/js/bootstrap.min.js'
      integrity='sha384-skAcpIdS7UcVUC05LJ9Dxay8AXcDYfBJqt1CJ85S/CFujBsIzCIv+l9liuYLaMQ/'
      crossorigin='anonymous'
    ></script>
    <script
      src='https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/js/bootstrap.bundle.min.js'
      integrity='sha384-/bQdsTh/da6pkI1MST/rWKFNjaCP5gBSY4sEBT38Q/9RBh9AH40zEOg7Hlq2THRZ'
      crossorigin='anonymous'
    ></script>
  </body>
</html>

  `,
    "utf8"
  );
}
// inquirer.prompt(questions).then((answers) => {
//   fs.appendFile(`./dist/index.html`, generateHTML(answers), (err) =>
//     err
//       ? console.error(err)
//       : console.log(`${answers.filename}.md was created.`)
//   );
// });

init();
/**
 * Recursive prompt example
 * Allows user to choose when to exit prompt
 */

// 'use strict';
// const inquirer = require('..');
// const output = [];

// const questions = [
//   {
//     type: 'input',
//     name: 'tvShow',
//     message: "What's your favorite TV show?",
//   },
//   {
//     type: 'confirm',
//     name: 'askAgain',
//     message: 'Want to enter another TV show favorite (just hit enter for YES)?',
//     default: true,
//   },
// ];

// function ask() {
//   inquirer.prompt(questions).then((answers) => {
//     output.push(answers.tvShow);
//     if (answers.askAgain) {
//       ask();
//     } else {
//       console.log(output + 'Your favorite TV Shows:', output.join(', '));
//     }
//   });
// }

// ask();
