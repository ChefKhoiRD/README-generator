// Packages needed for application
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
const fs = require('fs');
const { title } = require('process');

// Array of questions for user input
const questions = [

    // Project title input
    {
        type: 'input',
        name: 'title',
        message: 'What is the name of the project?',
        validate: titleInput => {
            if (titleInput) {
                return true;
            } else {
                console.log('Error, please enter the name of the project')
                return false;
            }
        }
    },

    // Description of project
    {
        type: 'input',
        name: 'description',
        message: 'Provide a desription explaining your project',
        validate: descriptionInput => {
            if (descriptionInput) {
                return true;
            } else {
                console.log('Please provide a description of your project');
                return false;
            }
        }
    },

    // Instructions on how to install project
    {
        type: 'input',
        name: 'installation',
        message: 'Provide instructions to install your project',
        validate: installationInput => {
            if (installationInput) {
                return true;
            } else {
                console.log('Please provide instructions to install your project');
                return false;
            }
        }
    },

    // Instructions on how to use project
    {
        type: 'input',
        name: 'usage',
        message: 'Provide instructions on how to use your project',
        validate: usageInput => {
            if (usageInput) {
                return true;
            } else {
                console.log('Please provide instructions on how to use your project');
                return false;
            }
        }
    },

    // Instructions on how other people can contribute to project
    {
        type: 'input',
        name: 'contribution',
        message: 'Provide instrustions on how others can contribute to your project',
        validate: contributionInput => {
            if (contributionInput) {
                return true;
            } else {
                console.log('Please provide instrustions on how others can contribute to your project');
                return false;
            }
        }
    },

    // Instructions on how other people can test project
    {
        type: 'input',
        name: 'testing',
        message: 'Provide instrustions on how others can test your project',
        validate: testingInput => {
            if (testingInput) {
                return true;
            } else {
                console.log('Please provide instrustions on how others can test your project');
                return false;
            }
        }
    },

    // Options for user to select licenses
    {
        type: 'checkbox',
        name: 'licensing',
        message: 'Choose a license for your project',
        choices: ['Apache', 'MIT', 'Mozilla-Public', 'GNU-General-Public', 'Common-Development-and Distribution', 'None'],
        validate: licensingInput => {
            if (licensingInput) {
                return true;
            } else {
                console.log('Plesae choose any available licensing for your project');
                return false;
            }
        }
    },

    // Github username input
    {
        type: 'input',
        name: 'github',
        message: 'Enter your GitHub Username',
        validate: githubInput => {
            if (githubInput) {
                return true;
            } else {
                console.log('Please enter your GitHub username');
                return false;
            }
        }
    },

    // Email address input
    {
        type: 'input',
        name: 'email',
        message: 'Enter an email people may contact you from',
    },
];

// Function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err)
            throw err;
        console.log('README has successfully been generated')
    });
};

// A function to initialize app
function init() {
    inquirer.prompt(questions)
        .then(function (userInput) {
            console.log(userInput)
            writeToFile("README", generateMarkdown(userInput))
    });
};

// Function call to initialize app
init();
