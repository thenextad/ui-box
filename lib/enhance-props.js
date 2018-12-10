"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = enhanceProps;

var _enhancers = require("./enhancers");

var _expandAliases = _interopRequireDefault(require("./expand-aliases"));

var styles = _interopRequireWildcard(require("./styles"));

var cache = _interopRequireWildcard(require("./cache"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/**
 * Converts the CSS props to class names and inserts the styles.
 */
function enhanceProps(rawProps) {
  var propsMap = (0, _expandAliases.default)(rawProps);
  var enhancedProps = {};
  var className = rawProps.className || '';
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = propsMap[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var _step$value = _slicedToArray(_step.value, 2),
          propName = _step$value[0],
          propValue = _step$value[1];

      var cachedClassName = cache.get(propName, propValue);

      if (cachedClassName) {
        className = "".concat(className, " ").concat(cachedClassName);
        continue;
      }

      var enhancer = _enhancers.propEnhancers[propName]; // Skip false boolean enhancers. e.g: `clearfix={false}`
      // Also allows omitting props via overriding with `null` (i.e: neutralising props)

      if (enhancer && (propValue === null || propValue === undefined || propValue === false)) {
        continue;
      } else if (!enhancer) {
        // Pass through native props. e.g: disabled, value, type
        enhancedProps[propName] = propValue;
        continue;
      }

      var newCss = enhancer(propValue); // Allow enhancers to return null for invalid values

      if (newCss) {
        styles.add(newCss.styles);
        cache.set(propName, propValue, newCss.className);
        className = "".concat(className, " ").concat(newCss.className);
      }
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return != null) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  className = className.trim();
  return [className, enhancedProps];
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9lbmhhbmNlLXByb3BzLmpzIl0sIm5hbWVzIjpbImVuaGFuY2VQcm9wcyIsInJhd1Byb3BzIiwicHJvcHNNYXAiLCJlbmhhbmNlZFByb3BzIiwiY2xhc3NOYW1lIiwicHJvcE5hbWUiLCJwcm9wVmFsdWUiLCJjYWNoZWRDbGFzc05hbWUiLCJjYWNoZSIsImdldCIsImVuaGFuY2VyIiwicHJvcEVuaGFuY2VycyIsInVuZGVmaW5lZCIsIm5ld0NzcyIsInN0eWxlcyIsImFkZCIsInNldCIsInRyaW0iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUFFQTs7O0FBR2UsU0FBU0EsWUFBVCxDQUFzQkMsUUFBdEIsRUFBZ0M7QUFDN0MsTUFBTUMsUUFBUSxHQUFHLDRCQUFjRCxRQUFkLENBQWpCO0FBQ0EsTUFBTUUsYUFBYSxHQUFHLEVBQXRCO0FBQ0EsTUFBSUMsU0FBUyxHQUFHSCxRQUFRLENBQUNHLFNBQVQsSUFBc0IsRUFBdEM7QUFINkM7QUFBQTtBQUFBOztBQUFBO0FBSzdDLHlCQUFvQ0YsUUFBcEMsOEhBQThDO0FBQUE7QUFBQSxVQUFsQ0csUUFBa0M7QUFBQSxVQUF4QkMsU0FBd0I7O0FBQzVDLFVBQU1DLGVBQWUsR0FBR0MsS0FBSyxDQUFDQyxHQUFOLENBQVVKLFFBQVYsRUFBb0JDLFNBQXBCLENBQXhCOztBQUNBLFVBQUlDLGVBQUosRUFBcUI7QUFDbkJILFFBQUFBLFNBQVMsYUFBTUEsU0FBTixjQUFtQkcsZUFBbkIsQ0FBVDtBQUNBO0FBQ0Q7O0FBRUQsVUFBTUcsUUFBUSxHQUFHQyx5QkFBY04sUUFBZCxDQUFqQixDQVA0QyxDQVE1QztBQUNBOztBQUNBLFVBQ0VLLFFBQVEsS0FDUEosU0FBUyxLQUFLLElBQWQsSUFBc0JBLFNBQVMsS0FBS00sU0FBcEMsSUFBaUROLFNBQVMsS0FBSyxLQUR4RCxDQURWLEVBR0U7QUFDQTtBQUNELE9BTEQsTUFLTyxJQUFJLENBQUNJLFFBQUwsRUFBZTtBQUNwQjtBQUNBUCxRQUFBQSxhQUFhLENBQUNFLFFBQUQsQ0FBYixHQUEwQkMsU0FBMUI7QUFDQTtBQUNEOztBQUVELFVBQU1PLE1BQU0sR0FBR0gsUUFBUSxDQUFDSixTQUFELENBQXZCLENBckI0QyxDQXNCNUM7O0FBQ0EsVUFBSU8sTUFBSixFQUFZO0FBQ1ZDLFFBQUFBLE1BQU0sQ0FBQ0MsR0FBUCxDQUFXRixNQUFNLENBQUNDLE1BQWxCO0FBQ0FOLFFBQUFBLEtBQUssQ0FBQ1EsR0FBTixDQUFVWCxRQUFWLEVBQW9CQyxTQUFwQixFQUErQk8sTUFBTSxDQUFDVCxTQUF0QztBQUNBQSxRQUFBQSxTQUFTLGFBQU1BLFNBQU4sY0FBbUJTLE1BQU0sQ0FBQ1QsU0FBMUIsQ0FBVDtBQUNEO0FBQ0Y7QUFqQzRDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBbUM3Q0EsRUFBQUEsU0FBUyxHQUFHQSxTQUFTLENBQUNhLElBQVYsRUFBWjtBQUVBLFNBQU8sQ0FBQ2IsU0FBRCxFQUFZRCxhQUFaLENBQVA7QUFDRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7cHJvcEVuaGFuY2Vyc30gZnJvbSAnLi9lbmhhbmNlcnMnXG5pbXBvcnQgZXhwYW5kQWxpYXNlcyBmcm9tICcuL2V4cGFuZC1hbGlhc2VzJ1xuaW1wb3J0ICogYXMgc3R5bGVzIGZyb20gJy4vc3R5bGVzJ1xuaW1wb3J0ICogYXMgY2FjaGUgZnJvbSAnLi9jYWNoZSdcblxuLyoqXG4gKiBDb252ZXJ0cyB0aGUgQ1NTIHByb3BzIHRvIGNsYXNzIG5hbWVzIGFuZCBpbnNlcnRzIHRoZSBzdHlsZXMuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGVuaGFuY2VQcm9wcyhyYXdQcm9wcykge1xuICBjb25zdCBwcm9wc01hcCA9IGV4cGFuZEFsaWFzZXMocmF3UHJvcHMpXG4gIGNvbnN0IGVuaGFuY2VkUHJvcHMgPSB7fVxuICBsZXQgY2xhc3NOYW1lID0gcmF3UHJvcHMuY2xhc3NOYW1lIHx8ICcnXG5cbiAgZm9yIChjb25zdCBbcHJvcE5hbWUsIHByb3BWYWx1ZV0gb2YgcHJvcHNNYXApIHtcbiAgICBjb25zdCBjYWNoZWRDbGFzc05hbWUgPSBjYWNoZS5nZXQocHJvcE5hbWUsIHByb3BWYWx1ZSlcbiAgICBpZiAoY2FjaGVkQ2xhc3NOYW1lKSB7XG4gICAgICBjbGFzc05hbWUgPSBgJHtjbGFzc05hbWV9ICR7Y2FjaGVkQ2xhc3NOYW1lfWBcbiAgICAgIGNvbnRpbnVlXG4gICAgfVxuXG4gICAgY29uc3QgZW5oYW5jZXIgPSBwcm9wRW5oYW5jZXJzW3Byb3BOYW1lXVxuICAgIC8vIFNraXAgZmFsc2UgYm9vbGVhbiBlbmhhbmNlcnMuIGUuZzogYGNsZWFyZml4PXtmYWxzZX1gXG4gICAgLy8gQWxzbyBhbGxvd3Mgb21pdHRpbmcgcHJvcHMgdmlhIG92ZXJyaWRpbmcgd2l0aCBgbnVsbGAgKGkuZTogbmV1dHJhbGlzaW5nIHByb3BzKVxuICAgIGlmIChcbiAgICAgIGVuaGFuY2VyICYmXG4gICAgICAocHJvcFZhbHVlID09PSBudWxsIHx8IHByb3BWYWx1ZSA9PT0gdW5kZWZpbmVkIHx8IHByb3BWYWx1ZSA9PT0gZmFsc2UpXG4gICAgKSB7XG4gICAgICBjb250aW51ZVxuICAgIH0gZWxzZSBpZiAoIWVuaGFuY2VyKSB7XG4gICAgICAvLyBQYXNzIHRocm91Z2ggbmF0aXZlIHByb3BzLiBlLmc6IGRpc2FibGVkLCB2YWx1ZSwgdHlwZVxuICAgICAgZW5oYW5jZWRQcm9wc1twcm9wTmFtZV0gPSBwcm9wVmFsdWVcbiAgICAgIGNvbnRpbnVlXG4gICAgfVxuXG4gICAgY29uc3QgbmV3Q3NzID0gZW5oYW5jZXIocHJvcFZhbHVlKVxuICAgIC8vIEFsbG93IGVuaGFuY2VycyB0byByZXR1cm4gbnVsbCBmb3IgaW52YWxpZCB2YWx1ZXNcbiAgICBpZiAobmV3Q3NzKSB7XG4gICAgICBzdHlsZXMuYWRkKG5ld0Nzcy5zdHlsZXMpXG4gICAgICBjYWNoZS5zZXQocHJvcE5hbWUsIHByb3BWYWx1ZSwgbmV3Q3NzLmNsYXNzTmFtZSlcbiAgICAgIGNsYXNzTmFtZSA9IGAke2NsYXNzTmFtZX0gJHtuZXdDc3MuY2xhc3NOYW1lfWBcbiAgICB9XG4gIH1cblxuICBjbGFzc05hbWUgPSBjbGFzc05hbWUudHJpbSgpXG5cbiAgcmV0dXJuIFtjbGFzc05hbWUsIGVuaGFuY2VkUHJvcHNdXG59XG4iXX0=