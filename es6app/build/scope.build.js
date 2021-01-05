"use strict";

function printData(x) {
  if (x) {
    // the block scope declaration in ES 6
    var y = 10;
    console.log('In Condition ' + y);
  } // console.log('Out Condition ' + y);

}

printData(true);
printData(false); // for loops

for (var _i = 0; _i < 3; _i++) {
  console.log('In Loop ' + _i);
}

console.log('Out Loop ' + i);
