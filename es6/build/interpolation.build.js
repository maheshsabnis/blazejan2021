"use strict";

var fname = 'Mahesh';
var mname = 'Rameshrao';
var lname = 'Sabnis'; // old concatination

var fullNameOld = 'Full Name = ' + fname + ' \n' + mname + '\n ' + lname;
console.log('OLD ' + fullNameOld); // the Template string jn ES 6 or String Interpolation

var fullNameTemplate = "Full Name = ".concat(fname, " \n").concat(mname, " \n").concat(lname);
console.log("Interpolation ".concat(fullNameTemplate));
