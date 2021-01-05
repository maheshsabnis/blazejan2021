"use strict";

var fname = 'Mahesh';
var mname = 'Rameshrao';
var lname = 'Sabnis'; // traditional concatination in JS

var fullName = fname + ' ' + mname + ' ' + lname;
console.log('Traditional Caoncatiantion ' + fullName);
console.log();
console.log('ES 6 Template String for Concatination');
var fullNameTemplate = "".concat(fname, " ").concat(mname, " ").concat(lname); // HTML Parser building mutable string object

console.log("Template string ".concat(fullNameTemplate));
