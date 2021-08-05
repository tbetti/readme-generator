// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let url = ``
  switch(license){
    case 'MIT':
      url = `![licenseShield](https://img.shields.io/badge/license-MIT-blue)`;
      break;
    case 'GPL':
      url = `![licenseShield](https://img.shields.io/badge/license-GPL-blue)`;
      break;
    case 'Apache 2.0':
      url = `![licenseShield](https://img.shields.io/badge/license-apache%202.0-blue)`;
      break;
  }
  return url;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(license === 'MIT'){
    return `This license is registered under...`
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  
  ## Table of Contents
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
  * [Contact](#contact)
  
  ## Description
  ${data.description}

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## License
  ${renderLicenseBadge(data.license)}
  ${renderLicenseLink(data.license)}

  ## Contributing
  ${data.contributors}
  
  ## Tests
  ${data.tests}

  ## Contact
  * __GitHub:__ [github.com/${data.gitHub}](https://github.com/${data.gitHub})
  * __Email:__ [${data.email}](mailto:${data.email})
`;
}

module.exports = generateMarkdown;
