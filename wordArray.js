const fs = require('fs');
const _ = require('lodash');
const Promise = require("bluebird");
const wordSplitRegex = new RegExp(/\s|\.|,|!|\?|“|"|”/, "g");
const numbersRegex = new RegExp(/\d/, "g");
const posessivesRegex = new RegExp(/’s$/, "g");

module.exports = filePath => new Promise((resolve, reject) => {
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      reject(err)
    } else {
      const cleanArray = _
     .chain(data.split(wordSplitRegex))
     .remove((word) => !word.match(numbersRegex) && word.length > 1)
     .map((word) => word.match(posessivesRegex) ? word.replace(posessivesRegex, '') : word)
     .uniq()
     .value();

     resolve(cleanArray);
    }
  });
});


// remove numbers and empty strings
// const noNumbers = _.remove(rawWordArray, (word) => !word.match(numbersRegex) && word.length > 1);
//
// // TO DO: revise posessives
// const noPosessives = _.map(noNumbers, (word) => word.match(posessivesRegex) ? word.replace(posessivesRegex, '') : word)
//
// // reduce into unique array
// const reducedArray = _.uniq(noPosessives);
// console.log(reducedArray);
