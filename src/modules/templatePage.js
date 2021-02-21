// given the data for the page then populate the page
function generateReadMeTemplate(data) {

    let template = `
# ${data.projectTitle}

${data.clickableBadgeIconlink}
## Description
${data.projectDescription}


## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [Credits](#credits)
* [License](#license)


## Features

${data.featuresDescription}


## Installation

${data.installationDescription}


## Tests

${data.testsDescription}


## Contact Me

By [E-mail](https://${data.yourEmail})

or by [Github](https://github.com/${data.gitHubUserName}).

## Usage

${data.usageDescription}


## Contributing

${data.contributionsDescription}

## Credits

${data.creditsDescription}

## License

${data.licenseTypeDescription}
`;
return template;
}
module.exports = generateReadMeTemplate;