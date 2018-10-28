var fs = require('fs');
module.exports = (text, fileName) => {
  fs.appendFile(fileName, `${text}\n`, function (err) {
    if (err) throw err;
  });
  console.log("saved");
}
