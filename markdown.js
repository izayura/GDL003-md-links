const path = require('path');
const fs = require('fs');
// const fs = require('fs');
findMD = (filePath) => {
    return path.extname(filePath) === '.md' ? true : false;
};
module.exports = findMD;
findLinks = () => {

};

printLinks = () => {

};

validateLinks = () => {

};
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
