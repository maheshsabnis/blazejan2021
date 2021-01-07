"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// unnamed class
//  the class name is not explicitely set, but the Transpiler takes the class name as the
// referece variant e.g. Square
var Square = /*#__PURE__*/function () {
  function Square(side) {
    _classCallCheck(this, Square);

    this.side = side;
  }

  _createClass(Square, [{
    key: "area",
    value: function area() {
      return this.side * this.side;
    }
  }]);

  return Square;
}();

console.log(Square.name);
var s = new Square(10);
console.log("Area = ".concat(s.area())); // names class
// storing the class reference in a reference variant

var Rectangle = /*#__PURE__*/function () {
  function ReactangleClass(h, w) {
    _classCallCheck(this, ReactangleClass);

    this.height = h;
    this.width = w;
  }

  _createClass(ReactangleClass, [{
    key: "area",
    value: function area() {
      return this.height * this.width;
    }
  }]);

  return ReactangleClass;
}();

console.log("Class Name ".concat(Rectangle.name)); // the instance of the class RectangleClass is declared using the reference varient

var r = new Rectangle(300, 400);
console.log("Area = ".concat(r.area()));
