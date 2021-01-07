"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var SimpleClass = /*#__PURE__*/function () {
  function SimpleClass() {
    _classCallCheck(this, SimpleClass);

    // public declaration of the 
    this.x = 10;
    this.y = 20;
  }

  _createClass(SimpleClass, [{
    key: "add",
    value: function add() {
      return this.x + this.y;
    }
  }]);

  return SimpleClass;
}(); // instane of the class


var obj = new SimpleClass();
console.log("Add = ".concat(obj.add()));
