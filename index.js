const inquirer = require('inquirer');
const questionSet = require('./modules/questions');
const templatePage = require('./modules/templatePage');
const fs = require('fs');
const fileDestination = './assets/GeneratedFiles';
const fileName = 'team-profile';
const generatedFileTypeSuffix = ".html";

// Given a file name and data write to folderDestination of type generatedFileTypeSuffix
function writeToFile(fileName, data) {

  let filePath = `${fileDestination}/${fileName}${generatedFileTypeSuffix}`;

  fs.writeFile(filePath, data, function (err) {
    if (err) throw err;
    console.log('Your html page was created in the GeneratedFiles folder.');
  });
}

// A function to initialize app
function init(questionSet, fileName) {
  inquirer.prompt(questionSet).then((answers) => {
    generatedText = templatePage(answers);

    writeToFile(fileName,generatedText);

  });

}
// Function call to initialize app
init(questionSet, fileName);