// TODO: Include packages needed for this application
import inquirer from 'inquirer'
import fs from 'fs'
import generateMarkdown from './utils/generateMarkdown';
// TODO: Create an array of questions for user input
const questions = [
'Please enter a TITLE for your project README: ',
'Please enter a description for the DESCRIPTION section: ',
'Enter instructions for the INSTLLATION section: ',
'Enter a description for the USAGE section: ',
'Select a LICENSE from the list: ',
'Indicate guidelines for CONTRIBUTING to the project: ',
'Enter instructions on how to run TESTS: ',
'Type your GitHub username for future QUESTIONS:  ',
'Type your Email to reach out for QUESTIONS:  ',
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.appendFile('./utils/README.md', 'Hello content!', function (err) {
        if (err) throw err;
        console.log('Saved!');
})

}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
