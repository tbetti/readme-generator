// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license === 'MIT'){
    return `![licenseShield](https://img.shields.io/badge/license-MIT-blue)`
  }
  if(license === 'GPL'){
    return `![licenseShield](https://img.shields.io/badge/license-GPL-blue)`
  }
  if(license === 'Apache 2.0'){
    return `![licenseShield](https://img.shields.io/badge/license-apache%202.0-blue)`
  }
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
  ${renderLicenseBadge(data.license)}
  ${renderLicenseLink(data.license)}
  * [Description](#description)
  * [Usage](#usage)
  * [Test](#test)
  ## Description
  ${data.description}
  
`;
}

module.exports = generateMarkdown;
