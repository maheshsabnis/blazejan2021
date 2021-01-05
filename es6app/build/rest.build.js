"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function summation() {
  var sum = 0;

  for (var _len = arguments.length, value = new Array(_len), _key = 0; _key < _len; _key++) {
    value[_key] = arguments[_key];
  }

  if (value.length > 0) {
    value.forEach(function (v, i) {
      sum += v;
    });
  } else {
    console.log('no p');
  }

  return sum;
}

console.log("Summation of 2 number ".concat(summation(2, 3))); // parsing as array

console.log("Summation of 3 number ".concat(summation(2, 3, 4))); // parsing as array

console.log("Summation of 4 number ".concat(summation(2, 3, 4, 5))); // parsing as array

console.log("Summation of 5 number ".concat(summation(2, 3, 4, 5, 6))); // parsing as array

console.log("Summation of 6 number ".concat(summation(2, 3, 4, 5, 6, 7)));
var arr = [10, 20];
console.log(arr);
var newarr = [].concat(_toConsumableArray(arr), [30, 40, 50, 60, 70]); // deep copy of arr with additional values store 
//in newarr

console.log(newarr);
arr = [].concat(_toConsumableArray(arr), [30, 40, 50, 60, 70]); // deep copy of arr with additional values of arr

console.log(arr);
