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
    callback(data.toString());
  
  });
};
readMD = (filePath, callback)=>{
 return new Promise((resolve, reject) => {
  if (findMD(filePath) === true){
   let fileReaden = readFile(filePath, callback);
    resolve("New Promise" + fileReaden);
  } else{
reject("ERROR")
console.log("ERROR your file it's not a markdown type. Try with a markdown file.");
  }
});
}
/*read.then((message)=>{
  console.log("Leido "+message)
  readFile(filePath, callback);
}).catch((message)=>{
  console.log(message+ " your file it's not a markdown type. Try with a markdown file.");
})
}*/
/* let resultData;
readFile((data)=>{
  resultData=data;
}); */
findLinks = (filePath) => {
 // let readLinks = new Promise(readMD(resolve, reject));
 // let result = await readLinks; 
  let example = "[Laboratoria](https://www.laboratoria.la)";
   let re = new RegExp(/https?:\S+\w/g);
   let dataLinks = example.match(re);
    console.log("Comprobando findLinks "+ dataLinks);
};

validateLinks = () => {

};
module.exports = {
  findMD,
  readFile,
  readMD,
  findLinks,
//  validateLinks
}
