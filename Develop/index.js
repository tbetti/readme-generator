// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the project\'s title?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please write a description of your project:',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What steps do you need to take to install this project?',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Which license would you like to include on your project?',
        choices: ['MIT', 'GPL', 'Apache 2.0'],
    },
    {
        type: 'input',
        name: 'usage',
        message: 'How do you use your project?',
    },
    {
        type: 'input',
        name: 'contributors',
        message: 'Who contributed to this project? List names and GitHub usernames with each person separated by a comma:',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'List tests run on this application. Separate each with a comma:',
    },
    {
        type: 'input',
        name: 'gitHub',
        message: 'What is your GitHub username?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(__dirname, fileName), data);
}

// TODO: Create a function to initialize app
function init() {
    inquirer
    .prompt(questions)
    .then((data)=> {
        writeToFile('README.md', generateMarkdown(data));
        console.log(data);
    })
}

// Function call to initialize app
init();
