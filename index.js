// packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const manager = require("./lib/Manager");
const askIntQuestions = require("./lib/Intern");
const askEngQuestions = require("./lib/Engineer");
const generateHTML = require("./src/html");

const output = [];
function init() {
    const ask = () => {
        let mAnswers = manager.askManQuestions();

        console.log(mAnswers);
    // const askMan = () => {
    //   inquirer.prompt(manager.manQuestions()).then((answers) => {
    //     output.push(answers);
    //     console.log(`output: ${JSON.stringify(output)}`);
    //     switch (answers.manAddMember) {
    //       case "Engineer":
    //         break;
    //       case "Intern":
    //         break;
    //       default:
    //         break;
    //     }
    //   });
    //   };
    //   const askEng = () => {

    //   }
  };
  ask();
    // inquirer.prompt(questions).then((answers) => {
    //   fs.appendFile(`./dist/index.html`, generateHTML(answers), (err) =>
    //     err
    //       ? console.error(err)
    //       : console.log(`${answers.filename}.md was created.`)
    //   );
    // });
}
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
