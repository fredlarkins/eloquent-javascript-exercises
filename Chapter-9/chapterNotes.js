// Regular expressions can be created by initialising a RegExp object
let re1 = new RegExp('abc');

// or by enclosing something in slashes
let re2 = /abc/

// Methods
console.log(re1.test('abcdef')); // test whether string matches expression

// i at end of regular expression makes it case insensitive
let caseInsensitiveRegex  = /abc/i;