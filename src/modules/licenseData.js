/*
a list of license badges collected from
https://gist.github.com/lukas-h/2a5d00690736b4c3a7ba
*/
const fs = require('fs');
const licenseTypeCollection = require('../assets/licenseTypeCollection.json');

//from licenseData get all license types
licenseTypeChoices = Object.keys(licenseTypeCollection)

let licenseData = {licenseTypeChoices, licenseTypeCollection}

module.exports = licenseData;