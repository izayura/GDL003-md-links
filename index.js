require('./markdown.js');

// console.log('¿Tu archivo es Markdown? '+ findMD(process.argv[2]));

/* readFile(process.argv[2], (data)=>{
console.log('El contenido de tu archivo es: ' + data);
}); */

/* readMD(process.argv[2], (data)=>{
   console.log('The content of your markdown file is: '+  data);
 }); */
//    console.log(readMD(process.argv[2]));
console.log("HOLA "+findLinks(process.argv[2]));
 //findLinks(process.argv[2], (data)=>{
   // console.log('INDEX ' + data);
   //}); 
  // console.log(asyncfindLinks());
  