"use strict";

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function getProducts() {
  return new Promise(function (resolve, reject) {
    var xhr = new XMLHttpRequest(); // subscribe to the responses for success and failure
    // success

    xhr.onload = function () {
      // check for Http Status as 200
      if (xhr.status == 200) {
        console.log("In onload ".concat(xhr.response)); // resolve and notify the response to client / subscriber

        resolve(xhr.response);
      } else {
        // reject if there is different status code
        reject('Some Error Occured with the status code');
      }
    }; // failure


    xhr.onerror = function () {
      // reject if there is different status code
      reject('Some Error Occured with Http Communication');
    }; // initiate the request


    xhr.open("GET", "https://apiapptrainingnewapp.azurewebsites.net/api/Products"); // send the request

    xhr.send();
  });
} // a caller method that call getProducts(), the method that returns promise
// the 'async' keyword indicates that the 'callMethod()' method is calling 
// some method that return promise object
// the 'await' keyword, make sure that the promise resolved 
// and response from promise is received
// IMPORTANT POINTS: if the method is decorated with 'async', it must have atleast one 'await' call
// await keyword must required method to be decorated with 'async'


function callMethod() {
  return _callMethod.apply(this, arguments);
} // client code
// need to not to subscribe to promises


function _callMethod() {
  _callMethod = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    var res;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            console.log('callMethod is executing....');
            _context.next = 3;
            return getProducts();

          case 3:
            res = _context.sent;
            console.log("Received Response from awaittable class ".concat(res));
            console.log('callMethod is executed....');

          case 6:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _callMethod.apply(this, arguments);
}

callMethod();
