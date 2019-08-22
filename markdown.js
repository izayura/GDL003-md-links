const path = require('path');
const fs = require('fs');

findMD = (filePath) => {
    return path.extname(filePath) === '.md' ? true : false;
};

readMD = (filePath) => {
  let contentMD = fs.readFile(filePath, (err, data) => {
    if (err) throw err;
    console.log(data.toString());
  });
 return contentMD;
};

findLinks = () => {

};

printLinks = () => {

};

validateLinks = () => {

};
module.exports = {
  findMD,
  readMD
}
/* module.exports = {
    findMD: (filePath) => {
        return path.extname(filePath) === '.md' ? true : false;
    },
  
    findLinks: () => {
  
  },

    printLinks: () => {
  
  },
  
    validateLinks: () => {
  
  },
}; */

/*  module.exports = (filePath) => {
    return path.extname(filePath) === '.md' ? true:false;
  
  }; */
