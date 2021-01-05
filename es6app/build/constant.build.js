"use strict";

function _readOnlyError(name) { throw new Error("\"" + name + "\" is read-only"); }

var val = 100;
console.log(val);
val = (_readOnlyError("val"), 400);
console.log(val);
