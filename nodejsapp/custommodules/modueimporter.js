//the module will be loaded and cached
let logic = require('./utilitymodule');
//the arrayLogic is the exported function itself 
let arrayLogic = require('./functionmodule');
let fullname = "Mahesh Sabnis"; 
console.log(`Length of ${fullname} = ${logic.getStringLength(fullname)}`);
console.log(`Reverse of ${fullname} = ${logic.reverseString(fullname)}`);
console.log(`Reverse of ${fullname} = ${logic.changeToUpper(fullname)}`);
let arr = [1,2,3,4,5];

console.log (`Reverse of ${arr} = ${arrayLogic(arr)}`);



// import {Utility, ClsMath} from './../es6nodemodules/utility.mjs';


// let util = new Utility();
// let fullname1 = "Mahesh Sabnis"; 
// console.log(`Length of ${fullname} = ${util.getStringLength(fullname)}`);
// console.log(`Reverse of ${fullname} = ${util.reverseString(fullname)}`);
// console.log(`Reverse of ${fullname} = ${util.changeToUpper(fullname)}`);
// console.log(`Reverse of ${fullname} = ${util.changeToLower(fullname)}`);

// let m = new ClsMath();
// console.log(`Add = ${m.add(10,20)}`);

