require('../markdown.js');

describe('findMD', () => {

  it('is a function', () => {
    expect(typeof findMD).toBe('function');
  });

  it('should return TRUE for a valid .md file', () => {
    expect(findMD('../README.md')).toBe(true);
    console.log('You have a valid .md file');
  });

  it('should return FALSE for an invalid .md file', () => {
    expect(findMD('../README.js')).toBe(false);
    console.log('You have an invalid .md file');
  });

});

describe('readFile', () => {
  it('is a function', () => {
    expect(typeof readFile).toBe('function');
  });

  it('should read and impress what is in any kind of file', () => {
  //  expect(readFile('../exampleShort.md'), callback).toBe('Esto es un archivo .md para pasar por los tests.');
 // });
  readFile('../exampleShort.md', (data)=>{
    expect(data).toBe('Esto es un archivo .md para pasar por los tests.');
    });
  });
});

describe('readMD', () => {
  it('is a function', () => {
    expect(typeof readMD).toBe('function');
  });

  it('should read and impress what is in the .md file', () => {
  readMD('../exampleShort.md', (data)=>{
    expect(data).toBe('Esto es un archivo .md para pasar por los tests.');
    });
  });
  it('should return ERROR if you are not reading a .md file', () => {
    expect(findMD('../markdown.js')).toBe(false);
  });
});

describe('findLinks', () => {

  it('is a function', () => {
    expect(typeof findLinks).toBe('function');
  });

  it('should return if there are any link in the .md file', () => {
   findLinks('../linkExample.md', (data)=>{
      expect(data).toBe('https://www.laboratoria.la');
    });
  });
});

describe('validateLinks', () => {

  it('is a function', () => {
    expect(typeof validateLinks).toBe('function');
  });

  it('the link is validate', () => {
    expect(validateLinks()).toBe(true);
  });

  it('the link is not validate', () => {
    expect(validateLinks()).toBe(false);
  });
});