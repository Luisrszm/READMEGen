// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
export const renderLicenseBadge = function (license) {
  if (!license) {return ''}
  switch (license) {
    case "MIT":
      return 'https://img.shields.io/badge/License-MIT-yellow.svg'
    case "Apache 2.0":
      return 'https://img.shields.io/badge/License-Apache_2.0-blue.svg'
    case "GPLv3":
      return 'https://img.shields.io/badge/License-GPLv3-blue.svg'
    default:
      break;
  }

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
export const renderLicenseLink = function (license) {
  if (!license) {return ''}
  switch (license) {
    case "MIT":
      return 'https://opensource.org/licenses/MIT'
    case "Apache 2.0":
      return 'https://opensource.org/licenses/Apache-2.0'
    case "GPLv3":
      return 'https://www.gnu.org/licenses/gpl-3.0'
    default:
      break;
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
export const renderLicenseSection = function (license, user) {
  if (!license) {return ''}
  switch (license) {
    case "MIT":
      return `Copyright (c) [${user}](https://github.com/${user}). All rights reserved.
  Licensed under the [${license}](https://choosealicense.com/licenses/mit/) license.`

    case "Apache 2.0":
      return `Copyright (c) [${user}](https://github.com/${user}). All rights reserved.
  Licensed under the [${license}](https://choosealicense.com/licenses/apache-2.0/) license.`

    case "GPLv3":
      return `Copyright (c) [${user}](https://github.com/${user}). All rights reserved.
  Licensed under the [${license}](https://choosealicense.com/licenses/agpl-3.0/) license.`

    default:
      break;
  }
};

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  let docuString = `# ${data.title}

  [![License: ${data.license}](${renderLicenseBadge(data.license)})](${renderLicenseLink(data.license)})
  
  ## Description

  ${data.description}

  ## Table of contents

  1. [Description](#description)
  2. [Installation](#installation)
  3. [Usage](#usage)
  4. [Contributing](#contributing)
  6. [Test](#test)
  7. [Questions](#questions)
  8. [License](#license)

  ---
  
  ## Installation

  ${data.installation}

  ## Usage

  ${data.usage}

  ## Contributing

  ${data.contributing}

  ## Test

  ${data.test}

  ## Questions

  - GitHub Contact: [${data.questionsGithub}](https://github.com/${data.questionsGithub})
  - Email Address: ${data.questionsEmail}, ${data.emailQAInstructions}

  ## License

  ${renderLicenseSection(data.license, data.questionsGithub)}

  `
  return docuString
};

export default generateMarkdown;
