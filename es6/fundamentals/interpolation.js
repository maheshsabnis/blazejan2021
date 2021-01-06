let fname = 'Mahesh';
let mname = 'Rameshrao';
let lname = 'Sabnis';

// old concatination

let fullNameOld = 'Full Name = ' + fname + ' \n' + mname + '\n ' + lname;

console.log('OLD ' + fullNameOld);

// the Template string jn ES 6 or String Interpolation

let fullNameTemplate = `Full Name = ${fname} 
${mname} 
${lname}`;

console.log(`Interpolation ${fullNameTemplate}`);
