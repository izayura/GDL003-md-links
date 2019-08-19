const path = require('path');
// const fs = require('fs');

exports.findMD = (filePath) =>{
    return path.extname(filePath) === '.md' ? true:false;
  };
  
exports.findLinks = () => {
  
  };
  
exports.printLinks = () => {
  
  };
  
exports.validateLinks = () => {
  
  };
  
  /* module.exports = (filePath) => {
    return path.extname(filePath) === '.md' ? true:false;
  
  }; */

 /* // assigning to exports will not modify module, must use module.exports
module.exports = function(width) {
  return {
    area: function() {
      return width * width;
    }
  };
} */