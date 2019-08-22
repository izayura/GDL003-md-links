const path = require('path');
const fs = require('fs');

findMD = (filePath) => {
    return path.extname(filePath) === '.md' ? true : false;
};

readFile = (filePath) => {
  let contentFile = fs.readFile(filePath, (err, data) => {
    if (err) throw err;
    console.log(data.toString());
  });
 return contentFile;
};

findLinks = () => {

};

printLinks = () => {

};

validateLinks = () => {

};
module.exports = {
  findMD,
  readFile
}
