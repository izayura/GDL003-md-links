require('./markdown.js');

console.log('¿Tu archivo es Markdown? '+ findMD(process.argv[2]));

console.log('El contenido de tu archivo es: ' + readFile(process.argv[2]));
