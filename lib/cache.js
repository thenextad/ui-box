"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.get = get;
exports.set = set;
exports.entries = entries;
exports.hydrate = hydrate;
exports.clear = clear;

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var cache = new Map();

function get(property, value) {
  return cache.get(property + value);
}

function set(property, value, className) {
  if (process.env.NODE_ENV !== 'production') {
    var valueType = _typeof(value);

    if (valueType !== 'boolean' && valueType !== 'number' && valueType !== 'string') {
      var encodedValue = JSON.stringify(value);
      throw new TypeError("\uD83D\uDCE6 ui-box: invalid cache value \u201C".concat(encodedValue, "\u201D. Only booleans, numbers and strings are supported."));
    }
  }

  cache.set(property + value, className);
}

function entries() {
  return _toConsumableArray(cache);
}

function hydrate(newEntries) {
  cache = new Map(_toConsumableArray(cache).concat(_toConsumableArray(newEntries)));
}

function clear() {
  cache.clear();
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jYWNoZS5qcyJdLCJuYW1lcyI6WyJjYWNoZSIsIk1hcCIsImdldCIsInByb3BlcnR5IiwidmFsdWUiLCJzZXQiLCJjbGFzc05hbWUiLCJwcm9jZXNzIiwiZW52IiwiTk9ERV9FTlYiLCJ2YWx1ZVR5cGUiLCJlbmNvZGVkVmFsdWUiLCJKU09OIiwic3RyaW5naWZ5IiwiVHlwZUVycm9yIiwiZW50cmllcyIsImh5ZHJhdGUiLCJuZXdFbnRyaWVzIiwiY2xlYXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUlBLEtBQUssR0FBRyxJQUFJQyxHQUFKLEVBQVo7O0FBRU8sU0FBU0MsR0FBVCxDQUFhQyxRQUFiLEVBQXVCQyxLQUF2QixFQUE4QjtBQUNuQyxTQUFPSixLQUFLLENBQUNFLEdBQU4sQ0FBVUMsUUFBUSxHQUFHQyxLQUFyQixDQUFQO0FBQ0Q7O0FBRU0sU0FBU0MsR0FBVCxDQUFhRixRQUFiLEVBQXVCQyxLQUF2QixFQUE4QkUsU0FBOUIsRUFBeUM7QUFDOUMsTUFBSUMsT0FBTyxDQUFDQyxHQUFSLENBQVlDLFFBQVosS0FBeUIsWUFBN0IsRUFBMkM7QUFDekMsUUFBTUMsU0FBUyxXQUFVTixLQUFWLENBQWY7O0FBQ0EsUUFDRU0sU0FBUyxLQUFLLFNBQWQsSUFDQUEsU0FBUyxLQUFLLFFBRGQsSUFFQUEsU0FBUyxLQUFLLFFBSGhCLEVBSUU7QUFDQSxVQUFNQyxZQUFZLEdBQUdDLElBQUksQ0FBQ0MsU0FBTCxDQUFlVCxLQUFmLENBQXJCO0FBQ0EsWUFBTSxJQUFJVSxTQUFKLDBEQUMrQkgsWUFEL0IsK0RBQU47QUFHRDtBQUNGOztBQUVEWCxFQUFBQSxLQUFLLENBQUNLLEdBQU4sQ0FBVUYsUUFBUSxHQUFHQyxLQUFyQixFQUE0QkUsU0FBNUI7QUFDRDs7QUFFTSxTQUFTUyxPQUFULEdBQW1CO0FBQ3hCLDRCQUFXZixLQUFYO0FBQ0Q7O0FBRU0sU0FBU2dCLE9BQVQsQ0FBaUJDLFVBQWpCLEVBQTZCO0FBQ2xDakIsRUFBQUEsS0FBSyxHQUFHLElBQUlDLEdBQUosb0JBQVlELEtBQVosNEJBQXNCaUIsVUFBdEIsR0FBUjtBQUNEOztBQUVNLFNBQVNDLEtBQVQsR0FBaUI7QUFDdEJsQixFQUFBQSxLQUFLLENBQUNrQixLQUFOO0FBQ0QiLCJzb3VyY2VzQ29udGVudCI6WyJsZXQgY2FjaGUgPSBuZXcgTWFwKClcblxuZXhwb3J0IGZ1bmN0aW9uIGdldChwcm9wZXJ0eSwgdmFsdWUpIHtcbiAgcmV0dXJuIGNhY2hlLmdldChwcm9wZXJ0eSArIHZhbHVlKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gc2V0KHByb3BlcnR5LCB2YWx1ZSwgY2xhc3NOYW1lKSB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgY29uc3QgdmFsdWVUeXBlID0gdHlwZW9mIHZhbHVlXG4gICAgaWYgKFxuICAgICAgdmFsdWVUeXBlICE9PSAnYm9vbGVhbicgJiZcbiAgICAgIHZhbHVlVHlwZSAhPT0gJ251bWJlcicgJiZcbiAgICAgIHZhbHVlVHlwZSAhPT0gJ3N0cmluZydcbiAgICApIHtcbiAgICAgIGNvbnN0IGVuY29kZWRWYWx1ZSA9IEpTT04uc3RyaW5naWZ5KHZhbHVlKVxuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcbiAgICAgICAgYPCfk6YgdWktYm94OiBpbnZhbGlkIGNhY2hlIHZhbHVlIOKAnCR7ZW5jb2RlZFZhbHVlfeKAnS4gT25seSBib29sZWFucywgbnVtYmVycyBhbmQgc3RyaW5ncyBhcmUgc3VwcG9ydGVkLmBcbiAgICAgIClcbiAgICB9XG4gIH1cblxuICBjYWNoZS5zZXQocHJvcGVydHkgKyB2YWx1ZSwgY2xhc3NOYW1lKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZW50cmllcygpIHtcbiAgcmV0dXJuIFsuLi5jYWNoZV1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGh5ZHJhdGUobmV3RW50cmllcykge1xuICBjYWNoZSA9IG5ldyBNYXAoWy4uLmNhY2hlLCAuLi5uZXdFbnRyaWVzXSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNsZWFyKCkge1xuICBjYWNoZS5jbGVhcigpXG59XG4iXX0=