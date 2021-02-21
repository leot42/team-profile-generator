const licenseData = require('./licenseData');
const questionCollection = require('../assets/questionCollection.json');
// validate that user input is not an empty answer or just spaces

function IsAnswerGivenNotEmpty(userInput) {
    if (!(userInput.trim() === "")) return true;
    else return "You must give an answer.";
}

// the set of questions to ask
let questionSet = [

    {
        type: 'input',
        name: 'gitHubUserName',
        message: 'What is the GitHub user name to attach to the project? (Required)',
        validate: (answer) => IsAnswerGivenNotEmpty(answer)
    },

    {
        type: 'input',
        name: 'projectTitle',
        message: 'What would you like the project title to be? (Required)',
        validate: (answer) => IsAnswerGivenNotEmpty(answer)
    },

    {
        type: 'editor',
        name: 'projectDescription',
        message: 'How would you describe your project? (Required)',
        validate: (answer) => IsAnswerGivenNotEmpty(answer)
    },

    {
        type: 'editor',
        name: 'featuresDescription',
        message: 'What features does your project have?'
    },

    {
        type: 'editor',
        name: 'installationDescription',
        message: 'What are your installation instructions? (Required)',
        validate: (answer) => IsAnswerGivenNotEmpty(answer)
    },

    {
        type: 'editor',
        name: 'usageDescription',
        message: 'What are your usage instructions? (Required)',
        validate: (answer) => IsAnswerGivenNotEmpty(answer)
    },

    {
        type: 'list',
        name: 'licenseTypeDescription',
        message: 'What type of license will this project use? (Required)',
        choices: licenseData.licenseTypeChoices,
        validate: (answer) => IsAnswerGivenNotEmpty(answer)
    },

    {
        type: 'editor',
        name: 'contributionsDescription',
        message: 'What are your contribution guidelines? (Required)',
        validate: (answer) => IsAnswerGivenNotEmpty(answer)
    },

    {
        type: 'editor',
        name: 'creditsDescription',
        message: 'Who would you like to give credit to?'
    },
    {
        type: 'editor',
        name: 'testsDescription',
        message: 'What are your test instructions? (Required)',
        validate: (answer) => IsAnswerGivenNotEmpty(answer)
    },

    {
        type: 'input',
        name: 'yourEmail',
        message: 'What email should questions be sent to? (Required)',
        validate: (answer) => IsAnswerGivenNotEmpty(answer)
    }
]

module.exports = questionSet;