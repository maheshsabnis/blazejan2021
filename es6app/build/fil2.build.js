"use strict";

var _file = require("./file1.js");

function StringOp(str) {
  console.log('Changing to Upper Case ' + (0, _file.ManageString)(str, 'U'));
  console.log('Changing to Lower Case ' + (0, _file.ManageString)(str, 'L'));
  console.log('Length  = ' + (0, _file.GetLength)(str));
}

StringOp('Mahesh Sabnis');
