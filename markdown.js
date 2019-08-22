const path = require('path');
const fs = require('fs');

findMD = (filePath) => {
  return path.extname(filePath) === '.md' ? true : false;
};

readFile = (filePath, callback) => {
  fs.readFile(filePath, (error, data) => {
    if (error) {
      throw error;
    }
    callback(data);
  });
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
