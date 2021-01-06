"use strict";

function decide(x) {
  if (x) {
    var _i = 10;
    console.log('Inside If Statement i  = ' + _i);
  }

  console.log('Outside If Statement i  = ' + i);
}

decide(true);
decide(false);
