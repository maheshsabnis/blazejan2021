"use strict";

function _readOnlyError(name) { throw new TypeError("\"" + name + "\" is read-only"); }

var val = 100;
console.log(val);
val = (_readOnlyError("val"), 900);
console.log(val);
