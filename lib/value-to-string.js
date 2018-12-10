"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = valueToString;

/**
 * Converts number values to a string with a unit.
 */
function valueToString(value) {
  var unit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'px';
  return typeof value === 'number' ? "".concat(value).concat(unit) : value;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy92YWx1ZS10by1zdHJpbmcuanMiXSwibmFtZXMiOlsidmFsdWVUb1N0cmluZyIsInZhbHVlIiwidW5pdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOzs7QUFHZSxTQUFTQSxhQUFULENBQXVCQyxLQUF2QixFQUEyQztBQUFBLE1BQWJDLElBQWEsdUVBQU4sSUFBTTtBQUN4RCxTQUFPLE9BQU9ELEtBQVAsS0FBaUIsUUFBakIsYUFBK0JBLEtBQS9CLFNBQXVDQyxJQUF2QyxJQUFnREQsS0FBdkQ7QUFDRCIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQ29udmVydHMgbnVtYmVyIHZhbHVlcyB0byBhIHN0cmluZyB3aXRoIGEgdW5pdC5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdmFsdWVUb1N0cmluZyh2YWx1ZSwgdW5pdCA9ICdweCcpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicgPyBgJHt2YWx1ZX0ke3VuaXR9YCA6IHZhbHVlXG59XG4iXX0=