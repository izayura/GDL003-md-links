require('./markdown.js');

console.log('¿Tu archivo es Markdown? '+ findMD(process.argv[2]));

readFile(process.argv[2], (data)=>{
console.log('El contenido de tu archivo es: ' + data);
});
