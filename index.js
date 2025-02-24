// TODO: Include packages needed for this application
import inquirer from 'inquirer';
import fs from 'fs';
import generateMarkdown from './utils/generateMarkdown';
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'Please enter a TITLE for your project README: ',
        name: 'title'
    },
    {
        type: 'input',
        message: 'Please enter a description for the DESCRIPTION section: ',
        name: 'description'
    },
    {
        type: 'input',
        message: 'Enter instructions for the INSTLLATION section: ',
        name: 'installation'
    },
    {
        type: 'input',
        message: 'Enter a description for the USAGE section: ',
        name: 'usage'
    },
    {
        type: 'list',
        message: 'Select a LICENSE from the list: ',
        name: 'license',
        choice: ['MIT', 'CC0', 'Apache']
    },
    {
        type: 'input',
        message: 'Indicate guidelines for CONTRIBUTING to the project: ',
        name: 'contributing'
    },
    {
        type: 'input',
        message: 'Enter instructions on how to run TESTS: ',
        name: 'test'
    },
    {
        type: 'input',
        message: 'Type your GitHub username for future QUESTIONS:  ',
        name: 'questionsGithub'
    },
    {
        type: 'input',
        message: 'Type your Email to reach out for QUESTIONS:  ',
        name: 'questionsEmail'
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {          // fileName = './utils/README.md'
    fs.appendFile(fileName, data, function (err) {
        if (err) throw err;
        console.log('Saved!');
    });
};

}

// TODO: Create a function to initialize app
async function init() {
    const answer = await inquirer.prompt(questions);
    console.log(answer);
  
};
// Function call to initialize app
init();
