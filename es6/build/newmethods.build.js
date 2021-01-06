"use strict";

var values = ["Mahesh", "Suprotim", "Vikram", "Subodh", "Sumit", "Pankaj", "Saket", "Manish"]; // explict function

function printValeus(v, i) {
  console.log("Value at ".concat(i, "th position = ").concat(v));
} // pasing the explicitely defined callback function


values.forEach(printValeus);
console.log();
console.log('Passing Callback');
values.forEach(function (v, i) {
  console.log("Value at ".concat(i, "th position = ").concat(v));
});
console.log();
console.log('ES 6 Arrow Operators'); // Arrow

values.forEach(function (v, i) {
  console.log("Value at ".concat(i, "th position = ").concat(v));
});
