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
readMD = (filePath, callback)=>{
let read = new Promise((resolve, reject) => {
  if (findMD(filePath) === true){
  resolve("New Promise");
  } else{
reject("ERROR")
  }
});
read.then((message)=>{
  console.log("Leido "+message)
  readFile(filePath, callback);
}).catch((message)=>{
  console.log(message+ " your file it's not a markdown type. Try with a markdown file.");
})
}
/* let resultData;
readFile((data)=>{
  resultData=data;
}); */
findLinks = (filePath, callback) => {
  let dataMD = readMD(process.argv[2], (data)=>{
    console.log('MD ' + data);
   });
   let example = "[Laboratoria](https://www.laboratoria.la)";
   let re = new RegExp(/https?:\S+\w/g);
   let dataLinks = example.match(re);
    console.log("Comprobando findLInks "+ dataLinks);
};

printLinks = () => {

};

validateLinks = () => {

};
module.exports = {
  findMD,
  readFile,
  readMD,
  findLinks
};
