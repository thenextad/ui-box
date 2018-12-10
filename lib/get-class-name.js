"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getClassName;

var _hash = _interopRequireDefault(require("@emotion/hash"));

var _getSafeValue = _interopRequireDefault(require("./get-safe-value"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Generates the class name.
 */
function getClassName(propertyInfo, value) {
  var className = propertyInfo.className,
      _propertyInfo$safeVal = propertyInfo.safeValue,
      safeValue = _propertyInfo$safeVal === void 0 ? false : _propertyInfo$safeVal,
      _propertyInfo$complex = propertyInfo.complexValue,
      complexValue = _propertyInfo$complex === void 0 ? false : _propertyInfo$complex;
  var valueKey; // Shortcut the global keywords

  if (value === 'inherit' || value === 'initial' || value === 'unset') {
    valueKey = value; // Always hash values that contain a calc() because the operators get
    // stripped which can result in class name collisions
  } else if (complexValue || value.includes('calc(')) {
    valueKey = (0, _hash.default)(value);
  } else if (safeValue) {
    valueKey = value;
  } else {
    valueKey = (0, _getSafeValue.default)(value);
  }

  return "\uD83D\uDCE6".concat(className, "_").concat(valueKey);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9nZXQtY2xhc3MtbmFtZS5qcyJdLCJuYW1lcyI6WyJnZXRDbGFzc05hbWUiLCJwcm9wZXJ0eUluZm8iLCJ2YWx1ZSIsImNsYXNzTmFtZSIsInNhZmVWYWx1ZSIsImNvbXBsZXhWYWx1ZSIsInZhbHVlS2V5IiwiaW5jbHVkZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7OztBQUVBOzs7QUFHZSxTQUFTQSxZQUFULENBQXNCQyxZQUF0QixFQUFvQ0MsS0FBcEMsRUFBMkM7QUFBQSxNQUV0REMsU0FGc0QsR0FLcERGLFlBTG9ELENBRXRERSxTQUZzRDtBQUFBLDhCQUtwREYsWUFMb0QsQ0FHdERHLFNBSHNEO0FBQUEsTUFHdERBLFNBSHNELHNDQUcxQyxLQUgwQztBQUFBLDhCQUtwREgsWUFMb0QsQ0FJdERJLFlBSnNEO0FBQUEsTUFJdERBLFlBSnNELHNDQUl2QyxLQUp1QztBQU14RCxNQUFJQyxRQUFKLENBTndELENBUXhEOztBQUNBLE1BQUlKLEtBQUssS0FBSyxTQUFWLElBQXVCQSxLQUFLLEtBQUssU0FBakMsSUFBOENBLEtBQUssS0FBSyxPQUE1RCxFQUFxRTtBQUNuRUksSUFBQUEsUUFBUSxHQUFHSixLQUFYLENBRG1FLENBRW5FO0FBQ0E7QUFDRCxHQUpELE1BSU8sSUFBSUcsWUFBWSxJQUFJSCxLQUFLLENBQUNLLFFBQU4sQ0FBZSxPQUFmLENBQXBCLEVBQTZDO0FBQ2xERCxJQUFBQSxRQUFRLEdBQUcsbUJBQUtKLEtBQUwsQ0FBWDtBQUNELEdBRk0sTUFFQSxJQUFJRSxTQUFKLEVBQWU7QUFDcEJFLElBQUFBLFFBQVEsR0FBR0osS0FBWDtBQUNELEdBRk0sTUFFQTtBQUNMSSxJQUFBQSxRQUFRLEdBQUcsMkJBQWFKLEtBQWIsQ0FBWDtBQUNEOztBQUVELCtCQUFZQyxTQUFaLGNBQXlCRyxRQUF6QjtBQUNEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGhhc2ggZnJvbSAnQGVtb3Rpb24vaGFzaCdcbmltcG9ydCBnZXRTYWZlVmFsdWUgZnJvbSAnLi9nZXQtc2FmZS12YWx1ZSdcblxuLyoqXG4gKiBHZW5lcmF0ZXMgdGhlIGNsYXNzIG5hbWUuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldENsYXNzTmFtZShwcm9wZXJ0eUluZm8sIHZhbHVlKSB7XG4gIGNvbnN0IHtcbiAgICBjbGFzc05hbWUsXG4gICAgc2FmZVZhbHVlID0gZmFsc2UsIC8vIFZhbHVlIG5ldmVyIGNvbnRhaW5zIHVuc2FmZSBjaGFyYWN0ZXJzLiBlLmc6IDEwLCBoaWRkZW4sIGJvcmRlci1ib3hcbiAgICBjb21wbGV4VmFsdWUgPSBmYWxzZSAvLyBDb21wbGV4IHZhbHVlcyB0aGF0IGFyZSBiZXN0IGhhc2hlZC4gZS5nOiBiYWNrZ3JvdW5kLWltYWdlXG4gIH0gPSBwcm9wZXJ0eUluZm9cbiAgbGV0IHZhbHVlS2V5XG5cbiAgLy8gU2hvcnRjdXQgdGhlIGdsb2JhbCBrZXl3b3Jkc1xuICBpZiAodmFsdWUgPT09ICdpbmhlcml0JyB8fCB2YWx1ZSA9PT0gJ2luaXRpYWwnIHx8IHZhbHVlID09PSAndW5zZXQnKSB7XG4gICAgdmFsdWVLZXkgPSB2YWx1ZVxuICAgIC8vIEFsd2F5cyBoYXNoIHZhbHVlcyB0aGF0IGNvbnRhaW4gYSBjYWxjKCkgYmVjYXVzZSB0aGUgb3BlcmF0b3JzIGdldFxuICAgIC8vIHN0cmlwcGVkIHdoaWNoIGNhbiByZXN1bHQgaW4gY2xhc3MgbmFtZSBjb2xsaXNpb25zXG4gIH0gZWxzZSBpZiAoY29tcGxleFZhbHVlIHx8IHZhbHVlLmluY2x1ZGVzKCdjYWxjKCcpKSB7XG4gICAgdmFsdWVLZXkgPSBoYXNoKHZhbHVlKVxuICB9IGVsc2UgaWYgKHNhZmVWYWx1ZSkge1xuICAgIHZhbHVlS2V5ID0gdmFsdWVcbiAgfSBlbHNlIHtcbiAgICB2YWx1ZUtleSA9IGdldFNhZmVWYWx1ZSh2YWx1ZSlcbiAgfVxuXG4gIHJldHVybiBg8J+TpiR7Y2xhc3NOYW1lfV8ke3ZhbHVlS2V5fWBcbn1cbiJdfQ==