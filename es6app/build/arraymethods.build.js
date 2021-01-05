"use strict";

var names = ["Mahesh", "Tejas", "Anil", "Vikram", "Vijay", "Mukesh"];

function printName(n, i) {
  console.log("Name at ".concat(i, "ths index is = ").concat(n));
} // explicit passing of the callback function


names.forEach(printName);
console.log(); // implicit callback , implementation passed to method

names.forEach(function (n, i) {
  console.log("Name at ".concat(i, "ths index is = ").concat(n));
});
console.log();
console.log('Arrow operators'); // implicit callback are replaced by arrao operators =>

names.forEach(function (n, i) {
  console.log("Name at ".concat(i, "ths index is = ").concat(n));
});
