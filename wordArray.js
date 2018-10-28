const fs = require('fs');
const _ = require('lodash');
const Promise = require("bluebird");
// var fs = Promise.promisifyAll(require("fs"));

const wordSplitRegex = new RegExp(/\s|\.|,|!|\?|“|"|”/, "g");
const numbersRegex = new RegExp(/\d/, "g");
const posessivesRegex = new RegExp(/’s$/, "g");

module.exports = async (source) => {

  // APPROACH ONE: wrap everything in a promise, return the awaited promise;

  const payLoad = await fs.readFile(source, 'utf8', function(err, data) {
    if (err) throw err;
    const rawWordArray = data.split(wordSplitRegex);

    const cleanArray = _
    .chain(rawWordArray)
    .remove((word) => !word.match(numbersRegex) && word.length > 1)
    .map((word) => word.match(posessivesRegex) ? word.replace(posessivesRegex, '') : word)
    .uniq()
    .value();

    console.log(cleanArray);
    return cleanArray;
  });
  console.log("sdfg")
  return payLoad;
}



// remove numbers and empty strings
// const noNumbers = _.remove(rawWordArray, (word) => !word.match(numbersRegex) && word.length > 1);
//
// // TO DO: revise posessives
// const noPosessives = _.map(noNumbers, (word) => word.match(posessivesRegex) ? word.replace(posessivesRegex, '') : word)
//
// // reduce into unique array
// const reducedArray = _.uniq(noPosessives);
// console.log(reducedArray);
