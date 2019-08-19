const mdLinks = require('../markdown.js');


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

describe('findLinks', () => {

  it('is a function', () => {
    expect(typeof findLinks).toBe('function');
  });

  it('should return if there are any link in the .md file', () => {
    expect(findLinks(filePath)).toBe('https://github.com/izayura/GDL003-md-links.git');
  });
});

describe('printLinks', () => {

  it('is a function', () => {
    expect(typeof printLinks).toBe('function');
  });

  it('should print in terminal the links founded in the .md file', () => {
    expect(printLinks(filePath)).toBe('https://github.com/izayura/GDL003-md-links.git');
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