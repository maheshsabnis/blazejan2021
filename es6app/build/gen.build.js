"use strict";

var _marked =
/*#__PURE__*/
regeneratorRuntime.mark(traverseNested);

var k = [10, [20], [[1, [2, 3, 4]]]];

function traverseNested(data) {
  var i, element;
  return regeneratorRuntime.wrap(function traverseNested$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          if (data) {
            _context.next = 2;
            break;
          }

          return _context.abrupt("return");

        case 2:
          i = 0;

        case 3:
          if (!(i < data.length)) {
            _context.next = 14;
            break;
          }

          element = data[i];

          if (!(element instanceof Array)) {
            _context.next = 9;
            break;
          }

          return _context.delegateYield(traverseNested(element), "t0", 7);

        case 7:
          _context.next = 11;
          break;

        case 9:
          _context.next = 11;
          return element;

        case 11:
          i++;
          _context.next = 3;
          break;

        case 14:
        case "end":
          return _context.stop();
      }
    }
  }, _marked);
}

var generator = traverseNested(k);
console.log(generator);
