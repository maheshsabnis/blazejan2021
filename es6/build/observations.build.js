"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classStaticPrivateMethodGet(receiver, classConstructor, method) { if (receiver !== classConstructor) { throw new TypeError("Private static access of wrong provenance"); } return method; }

function _classPrivateMethodGet(receiver, privateSet, fn) { if (!privateSet.has(receiver)) { throw new TypeError("attempted to get private field on non-instance"); } return fn; }

function _classPrivateFieldGet(receiver, privateMap) { var descriptor = privateMap.get(receiver); if (!descriptor) { throw new TypeError("attempted to get private field on non-instance"); } if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }

function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = privateMap.get(receiver); if (!descriptor) { throw new TypeError("attempted to set private field on non-instance"); } if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } return value; }

var _privatefield = new WeakMap();

var _myMessage = new WeakSet();

var MyClass = /*#__PURE__*/function () {
  function MyClass() {
    _classCallCheck(this, MyClass);

    _myMessage.add(this);

    _privatefield.set(this, {
      writable: true,
      value: 0
    });

    _classPrivateFieldSet(this, _privatefield, 100);

    this.n1 = 0;
    this.n2 = 0;
    this.name = ["Mukesh", "Vivek", "Satish", "Vinay", "Mahesh"];
  }

  _createClass(MyClass, [{
    key: "add",
    value: function add(x, y) {
      console.log(_classPrivateFieldGet(this, _privatefield));
      return x + y;
    } // private methods

  }, {
    key: "printMessage",
    value: function printMessage() {
      _classPrivateMethodGet(this, _myMessage, _myMessage2).call(this);
    } // static private method

  }, {
    key: "CallStaticPrivateMethod",
    // calling Static Private Method
    value: function CallStaticPrivateMethod(v) {
      return _classStaticPrivateMethodGet(MyClass, MyClass, _privateMethod).call(MyClass, v);
    } // read-only property

  }, {
    key: "filterNames",
    get: function get() {
      // returns string having 'a' in it
      var res = this.name.filter(function (n, idx) {
        if (n.indexOf('a') !== -1) {
          return n;
        }
      });
      return res;
    } // setter
    // assign value to class data member

  }, {
    key: "Num1",
    set: function set(val) {
      // custom logic
      if (val <= 0) {
        this.n1 = 0;
      } else {
        this.n1 = val;
      }
    } // getter
    // return value
    ,
    get: function get() {
      // custom logic
      return this.n1;
    } // add(x,y,z) {
    //     return x+y+z;
    // }

  }], [{
    key: "generateSquare",
    value: function generateSquare(x) {
      return x * x;
    }
  }]);

  return MyClass;
}();

var _privateMethod = function _privateMethod(val) {
  return val * val;
};

var _myMessage2 = function _myMessage2() {
  console.log('Message from Private method');
};

_defineProperty(MyClass, "message", "I am a Static Member");

var o = new MyClass(); // the class will overwrite the add for 2 parameters
// and will return result as NaN

console.log("Add 2 = ".concat(o.add(10, 20)));
o.printMessage();
console.log("Accessing Private Method ".concat(o.CallStaticPrivateMethod(30))); // the later method i.e. add(x,y,x,z) wil be executed by JavaScript parser
// resut will be 60
// console.log(`Add 3 = ${o.add(10,20,30)}`);
// the following statement will generate result as 'undefined'

console.log(o.message);
console.log("Message = ".concat(MyClass.message));
console.log("Square of 100 = ".concat(MyClass.generateSquare(100)));
o.Num1 = 100;
console.log("Value of Num1 = ".concat(o.Num1));
o.Num1 = -888;
console.log("Value of Num1  with -ve set= ".concat(o.Num1));
console.log(o.filterNames);

 
