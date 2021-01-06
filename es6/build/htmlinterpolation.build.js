"use strict";

var names = ["Tejas", "Mahesh", "Ramesh", "Ram", "Sabnis"];
var options = '';

for (var n in names) {
  options += "<option value=\"".concat(names[n], "}\">").concat(names[n], "</option>");
}

document.getElementById('lstnames').innerHTML = options;
