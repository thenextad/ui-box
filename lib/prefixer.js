"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = prefixer;

var _inlineStylePrefixer = require("inline-style-prefixer");

var _decamelize = _interopRequireDefault(require("./utils/decamelize"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var prefixRegex = /^(Webkit|ms|Moz|O)/;
/**
 * Adds vendor prefixes to properties and values.
 */

function prefixer(property, value) {
  var rules = (0, _inlineStylePrefixer.prefix)(_defineProperty({}, property, value));
  var rulesArray = [];
  var propertyNames = Object.keys(rules); // Convert rules object to an array

  for (var i = 0; i < propertyNames.length; i++) {
    var propertyName = propertyNames[i]; // Add a dash in front of the prefixes

    var prefixedProp = propertyName.match(prefixRegex) ? "-".concat(propertyName) : propertyName;
    var prop = (0, _decamelize.default)(prefixedProp);
    var values = rules[propertyName]; // Handle prefixed values

    if (Array.isArray(values)) {
      for (var _i = 0; _i < values.length; _i++) {
        rulesArray.push({
          property: prop,
          value: values[_i]
        });
      }
    } else {
      rulesArray.push({
        property: prop,
        value: values
      });
    }
  }

  return rulesArray;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9wcmVmaXhlci5qcyJdLCJuYW1lcyI6WyJwcmVmaXhSZWdleCIsInByZWZpeGVyIiwicHJvcGVydHkiLCJ2YWx1ZSIsInJ1bGVzIiwicnVsZXNBcnJheSIsInByb3BlcnR5TmFtZXMiLCJPYmplY3QiLCJrZXlzIiwiaSIsImxlbmd0aCIsInByb3BlcnR5TmFtZSIsInByZWZpeGVkUHJvcCIsIm1hdGNoIiwicHJvcCIsInZhbHVlcyIsIkFycmF5IiwiaXNBcnJheSIsInB1c2giXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7Ozs7O0FBRUEsSUFBTUEsV0FBVyxHQUFHLG9CQUFwQjtBQUVBOzs7O0FBR2UsU0FBU0MsUUFBVCxDQUFrQkMsUUFBbEIsRUFBNEJDLEtBQTVCLEVBQW1DO0FBQ2hELE1BQU1DLEtBQUssR0FBRyxxREFBU0YsUUFBVCxFQUFvQkMsS0FBcEIsRUFBZDtBQUNBLE1BQU1FLFVBQVUsR0FBRyxFQUFuQjtBQUNBLE1BQU1DLGFBQWEsR0FBR0MsTUFBTSxDQUFDQyxJQUFQLENBQVlKLEtBQVosQ0FBdEIsQ0FIZ0QsQ0FLaEQ7O0FBQ0EsT0FBSyxJQUFJSyxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHSCxhQUFhLENBQUNJLE1BQWxDLEVBQTBDRCxDQUFDLEVBQTNDLEVBQStDO0FBQzdDLFFBQU1FLFlBQVksR0FBR0wsYUFBYSxDQUFDRyxDQUFELENBQWxDLENBRDZDLENBRTdDOztBQUNBLFFBQU1HLFlBQVksR0FBR0QsWUFBWSxDQUFDRSxLQUFiLENBQW1CYixXQUFuQixlQUNiVyxZQURhLElBRWpCQSxZQUZKO0FBR0EsUUFBTUcsSUFBSSxHQUFHLHlCQUFXRixZQUFYLENBQWI7QUFDQSxRQUFNRyxNQUFNLEdBQUdYLEtBQUssQ0FBQ08sWUFBRCxDQUFwQixDQVA2QyxDQVM3Qzs7QUFDQSxRQUFJSyxLQUFLLENBQUNDLE9BQU4sQ0FBY0YsTUFBZCxDQUFKLEVBQTJCO0FBQ3pCLFdBQUssSUFBSU4sRUFBQyxHQUFHLENBQWIsRUFBZ0JBLEVBQUMsR0FBR00sTUFBTSxDQUFDTCxNQUEzQixFQUFtQ0QsRUFBQyxFQUFwQyxFQUF3QztBQUN0Q0osUUFBQUEsVUFBVSxDQUFDYSxJQUFYLENBQWdCO0FBQUNoQixVQUFBQSxRQUFRLEVBQUVZLElBQVg7QUFBaUJYLFVBQUFBLEtBQUssRUFBRVksTUFBTSxDQUFDTixFQUFEO0FBQTlCLFNBQWhCO0FBQ0Q7QUFDRixLQUpELE1BSU87QUFDTEosTUFBQUEsVUFBVSxDQUFDYSxJQUFYLENBQWdCO0FBQUNoQixRQUFBQSxRQUFRLEVBQUVZLElBQVg7QUFBaUJYLFFBQUFBLEtBQUssRUFBRVk7QUFBeEIsT0FBaEI7QUFDRDtBQUNGOztBQUVELFNBQU9WLFVBQVA7QUFDRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7cHJlZml4fSBmcm9tICdpbmxpbmUtc3R5bGUtcHJlZml4ZXInXG5pbXBvcnQgZGVjYW1lbGl6ZSBmcm9tICcuL3V0aWxzL2RlY2FtZWxpemUnXG5cbmNvbnN0IHByZWZpeFJlZ2V4ID0gL14oV2Via2l0fG1zfE1venxPKS9cblxuLyoqXG4gKiBBZGRzIHZlbmRvciBwcmVmaXhlcyB0byBwcm9wZXJ0aWVzIGFuZCB2YWx1ZXMuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHByZWZpeGVyKHByb3BlcnR5LCB2YWx1ZSkge1xuICBjb25zdCBydWxlcyA9IHByZWZpeCh7W3Byb3BlcnR5XTogdmFsdWV9KVxuICBjb25zdCBydWxlc0FycmF5ID0gW11cbiAgY29uc3QgcHJvcGVydHlOYW1lcyA9IE9iamVjdC5rZXlzKHJ1bGVzKVxuXG4gIC8vIENvbnZlcnQgcnVsZXMgb2JqZWN0IHRvIGFuIGFycmF5XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgcHJvcGVydHlOYW1lcy5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IHByb3BlcnR5TmFtZSA9IHByb3BlcnR5TmFtZXNbaV1cbiAgICAvLyBBZGQgYSBkYXNoIGluIGZyb250IG9mIHRoZSBwcmVmaXhlc1xuICAgIGNvbnN0IHByZWZpeGVkUHJvcCA9IHByb3BlcnR5TmFtZS5tYXRjaChwcmVmaXhSZWdleClcbiAgICAgID8gYC0ke3Byb3BlcnR5TmFtZX1gXG4gICAgICA6IHByb3BlcnR5TmFtZVxuICAgIGNvbnN0IHByb3AgPSBkZWNhbWVsaXplKHByZWZpeGVkUHJvcClcbiAgICBjb25zdCB2YWx1ZXMgPSBydWxlc1twcm9wZXJ0eU5hbWVdXG5cbiAgICAvLyBIYW5kbGUgcHJlZml4ZWQgdmFsdWVzXG4gICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWVzKSkge1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB2YWx1ZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgcnVsZXNBcnJheS5wdXNoKHtwcm9wZXJ0eTogcHJvcCwgdmFsdWU6IHZhbHVlc1tpXX0pXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHJ1bGVzQXJyYXkucHVzaCh7cHJvcGVydHk6IHByb3AsIHZhbHVlOiB2YWx1ZXN9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBydWxlc0FycmF5XG59XG4iXX0=