// List all links for licenses
const licenseObj = {
  mit: {
    badge: 'https://img.shields.io/badge/license-MIT-blue',
    link: 'This project is registered under the [MIT License](/LICENSE).',
  },
  gpl: {
    badge: 'https://img.shields.io/badge/license-GPL-blue',
    link: 'This project is registered under the [GPL License](/LICENSE).', 
  },
  apache: {
    badge: 'https://img.shields.io/badge/license-apache%202.0-blue',
    link: 'This project is registered under the [Apache 2.0](/LICENSE).',
  },
}
const {mit, gpl, apache} = licenseObj;

// Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let url = ``
  switch(license){
    case 'MIT':
      url = `![licenseShield](${mit.badge})`;
      break;
    case 'GPL':
      url = `![licenseShield](${gpl.badge})`;
      break;
    case 'Apache 2.0':
      url = `![licenseShield](${apache.badge})`;
      break;
  }
  return url;
}

// Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let url = ``;
  switch(license){
    case 'MIT':
      url = `${mit.link}`;
      break;
    case 'GPL':
      url = `${gpl.link}`;
      break;
    case 'Apache 2.0':
      url = `${apache.link}`;
      break;
  }
  return url;
}

// Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license === 'None'){
    return ``;
  }
  return `## License
  ${renderLicenseBadge(license)}
  ${renderLicenseLink(license)}`;
}

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

  ${renderLicenseSection(data.license)}

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
