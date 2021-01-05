"use strict";

var data = new Map();
data.set(1, {
  id: 101,
  name: 'A'
});
data.set(2, {
  id: 102,
  name: 'B'
});
data.set(3, {
  id: 103,
  name: 'C'
});
data.set(4, {
  id: 104,
  name: 'D'
});
data.set(5, {
  id: 105,
  name: 'E'
});
data.forEach(function (n, i) {
  console.log(JSON.stringify(n));
});
console.log();
var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
  for (var _iterator = data.entries()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
    var i = _step.value;
    console.log(i);
  }
} catch (err) {
  _didIteratorError = true;
  _iteratorError = err;
} finally {
  try {
    if (!_iteratorNormalCompletion && _iterator["return"] != null) {
      _iterator["return"]();
    }
  } finally {
    if (_didIteratorError) {
      throw _iteratorError;
    }
  }
}

console.log();
console.log(data.get(1));
console.log(data.has(5)); // true

console.log(data.has(6)); // false

console.log(data["delete"](5)); // true

console.log(data["delete"](6)); // true

console.log();
var _iteratorNormalCompletion2 = true;
var _didIteratorError2 = false;
var _iteratorError2 = undefined;

try {
  for (var _iterator2 = data.entries()[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
    var _i = _step2.value;
    console.log(_i);
  }
} catch (err) {
  _didIteratorError2 = true;
  _iteratorError2 = err;
} finally {
  try {
    if (!_iteratorNormalCompletion2 && _iterator2["return"] != null) {
      _iterator2["return"]();
    }
  } finally {
    if (_didIteratorError2) {
      throw _iteratorError2;
    }
  }
}
