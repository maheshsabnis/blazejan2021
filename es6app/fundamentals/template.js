let fname = 'Mahesh';
let mname = 'Rameshrao';
let lname = 'Sabnis';

// traditional concatination in JS
let fullName = fname + ' ' + mname + ' ' + lname;
console.log('Traditional Caoncatiantion ' + fullName);
console.log();
console.log('ES 6 Template String for Concatination');

let fullNameTemplate = `${fname} ${mname} ${lname}`;
// HTML Parser building mutable string object
console.log(`Template string ${fullNameTemplate}`);