// Importing inquirer, markdown doc, and other packages necessary for this project. 
const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub username?',
      },
      {
        type: 'input',
        name: 'email',
        message: 'What is your email?',
      },
      {
        type: 'input',
        name: 'title',
        message: "What is the title of your project?",
      },
      
      {
        type: 'input',
        name: 'description',
        message: 'Please write a short description of your project',
      },
      {
        type: 'list',
        name: 'license',
        message: 'What kind of license should your project have?',
        choices: ['MIT', 'None'],
      },
      {
        type: 'input',
        name: 'usage',
        message: 'What does the user need to know about using the repo?',
      },
      {
        type: 'input',
        name: 'contributing',
        message: 'If the user would like to contribute, what should they do?',
      },
];

// Use writeFileSynch to write the README 
function writeToFile(fileName, data) {
// cwd() returns the users working directory
// Path imported above will join users input based on answers to string written above
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// Call on Inquirer to begin start application/ask questions.
function init() {
// Function uses inquirer to prompt user to respond to questions.
// Then the responses will be written to a file, README. Some questions will also need to call on the generateMarkdown doc, ex License
    inquirer.prompt(questions).then((inquirerResponses) => {
    writeToFile('README.md', generateMarkdown({...inquirerResponses}));
});
}

// Function call to initialize app - starter code.
init();
