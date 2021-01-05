"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var MyClass =
/*#__PURE__*/
function () {
  // constructor
  function MyClass() {
    _classCallCheck(this, MyClass);

    var c = 100; // all public data memebrs of class must be declared in constructor
    // prefixed using 'this'

    this.x = 100;
    this.y = 200;
  }

  _createClass(MyClass, [{
    key: "reverse",
    value: function reverse(arr) {
      return arr.reverse();
    }
  }, {
    key: "sort",
    value: function sort(arr) {
      return arr.sort();
    }
  }]);

  return MyClass;
}();
