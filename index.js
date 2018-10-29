const appendText = require('./appendText');
const wordArray = require('./wordArray');
// all words
const words = require('an-array-of-english-words');
// common words
const daleChall = require('dale-chall');

// const isAWord = words.filter(word => word.match(/^men's$/i))
// console.log(isAWord)

(async () => {
    // code goes here
    const testArr = await wordArray("source.txt");

    console.log(testArr);
})();











//
// appendText("word", "test.txt");
// appendText("new word", "test.txt");

// store array of words
// const result = _.keys(sample).sort();

// save array in file

// fs.writeFile('array.js', result, (err) => {
//     // throws an error, you could also catch it here
//     if (err) throw err;
//
//     // success case, the file was saved
//     console.log('Lyric saved!');
// });

// var file = fs.createWriteStream('array.txt');
// file.on('error', function(err) { console.log("FILE ERROR") });
// // result.map(function(v) { file.write(v.join(', ') + '\n'); });
// result.map(function(v) { console.log(v) });
// file.end();
//
// console.log("**********");
// console.log(result);
// console.log("**********");
