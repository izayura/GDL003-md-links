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

readMD = (filePath, callback) => {
  if (findMD(filePath) === true){
console.log("Archivo leido");
    readFile(filePath, callback);
  } else{
    console.log("ERROR, your file it's not a markdown type. Try with a markdown file.");
  }
};

findLinks = () => {
  
};

printLinks = () => {

};

validateLinks = () => {

};
module.exports = {
  findMD,
  readFile,
  readMD
}
