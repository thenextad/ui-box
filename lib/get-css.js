"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getCss;

var _prefixer = _interopRequireDefault(require("./prefixer"));

var _valueToString = _interopRequireDefault(require("./value-to-string"));

var _getClassName = _interopRequireDefault(require("./get-class-name"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/**
 * Generates the class name and styles.
 */
function getCss(propertyInfo, value) {
  var rules; // Protect against unexpected values

  var valueType = _typeof(value);

  if (valueType !== 'string' && valueType !== 'number') {
    if (process.env.NODE_ENV !== 'production') {
      var name = propertyInfo.jsName;
      var encodedValue = JSON.stringify(value);
      console.error("\uD83D\uDCE6 ui-box: property \u201C".concat(name, "\u201D was passed invalid value \u201C").concat(encodedValue, "\u201D. Only numbers and strings are supported."));
    }

    return null;
  }

  var valueString = (0, _valueToString.default)(value, propertyInfo.defaultUnit);
  var className = (0, _getClassName.default)(propertyInfo, valueString); // Avoid running the prefixer when possible because it's slow

  if (propertyInfo.isPrefixed) {
    rules = (0, _prefixer.default)(propertyInfo.jsName, valueString);
  } else {
    rules = [{
      property: propertyInfo.cssName,
      value: valueString
    }];
  }

  var styles;

  if (process.env.NODE_ENV === 'production') {
    var rulesString = rules.map(function (rule) {
      return "".concat(rule.property, ":").concat(rule.value);
    }).join(';');
    styles = ".".concat(className, "{").concat(rulesString, "}");
  } else {
    var _rulesString = rules.map(function (rule) {
      return "  ".concat(rule.property, ": ").concat(rule.value, ";");
    }).join('\n');

    styles = "\n.".concat(className, " {\n").concat(_rulesString, "\n}");
  }

  return {
    className: className,
    styles: styles
  };
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9nZXQtY3NzLmpzIl0sIm5hbWVzIjpbImdldENzcyIsInByb3BlcnR5SW5mbyIsInZhbHVlIiwicnVsZXMiLCJ2YWx1ZVR5cGUiLCJwcm9jZXNzIiwiZW52IiwiTk9ERV9FTlYiLCJuYW1lIiwianNOYW1lIiwiZW5jb2RlZFZhbHVlIiwiSlNPTiIsInN0cmluZ2lmeSIsImNvbnNvbGUiLCJlcnJvciIsInZhbHVlU3RyaW5nIiwiZGVmYXVsdFVuaXQiLCJjbGFzc05hbWUiLCJpc1ByZWZpeGVkIiwicHJvcGVydHkiLCJjc3NOYW1lIiwic3R5bGVzIiwicnVsZXNTdHJpbmciLCJtYXAiLCJydWxlIiwiam9pbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOztBQUNBOzs7Ozs7QUFFQTs7O0FBR2UsU0FBU0EsTUFBVCxDQUFnQkMsWUFBaEIsRUFBOEJDLEtBQTlCLEVBQXFDO0FBQ2xELE1BQUlDLEtBQUosQ0FEa0QsQ0FHbEQ7O0FBQ0EsTUFBTUMsU0FBUyxXQUFVRixLQUFWLENBQWY7O0FBQ0EsTUFBSUUsU0FBUyxLQUFLLFFBQWQsSUFBMEJBLFNBQVMsS0FBSyxRQUE1QyxFQUFzRDtBQUNwRCxRQUFJQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUMsUUFBWixLQUF5QixZQUE3QixFQUEyQztBQUN6QyxVQUFNQyxJQUFJLEdBQUdQLFlBQVksQ0FBQ1EsTUFBMUI7QUFDQSxVQUFNQyxZQUFZLEdBQUdDLElBQUksQ0FBQ0MsU0FBTCxDQUFlVixLQUFmLENBQXJCO0FBQ0FXLE1BQUFBLE9BQU8sQ0FBQ0MsS0FBUiwrQ0FDMEJOLElBRDFCLG1EQUM2REUsWUFEN0Q7QUFHRDs7QUFDRCxXQUFPLElBQVA7QUFDRDs7QUFFRCxNQUFNSyxXQUFXLEdBQUcsNEJBQWNiLEtBQWQsRUFBcUJELFlBQVksQ0FBQ2UsV0FBbEMsQ0FBcEI7QUFFQSxNQUFNQyxTQUFTLEdBQUcsMkJBQWFoQixZQUFiLEVBQTJCYyxXQUEzQixDQUFsQixDQWxCa0QsQ0FvQmxEOztBQUNBLE1BQUlkLFlBQVksQ0FBQ2lCLFVBQWpCLEVBQTZCO0FBQzNCZixJQUFBQSxLQUFLLEdBQUcsdUJBQVNGLFlBQVksQ0FBQ1EsTUFBdEIsRUFBOEJNLFdBQTlCLENBQVI7QUFDRCxHQUZELE1BRU87QUFDTFosSUFBQUEsS0FBSyxHQUFHLENBQUM7QUFBQ2dCLE1BQUFBLFFBQVEsRUFBRWxCLFlBQVksQ0FBQ21CLE9BQXhCO0FBQWlDbEIsTUFBQUEsS0FBSyxFQUFFYTtBQUF4QyxLQUFELENBQVI7QUFDRDs7QUFFRCxNQUFJTSxNQUFKOztBQUNBLE1BQUloQixPQUFPLENBQUNDLEdBQVIsQ0FBWUMsUUFBWixLQUF5QixZQUE3QixFQUEyQztBQUN6QyxRQUFNZSxXQUFXLEdBQUduQixLQUFLLENBQ3RCb0IsR0FEaUIsQ0FDYixVQUFBQyxJQUFJO0FBQUEsdUJBQU9BLElBQUksQ0FBQ0wsUUFBWixjQUF3QkssSUFBSSxDQUFDdEIsS0FBN0I7QUFBQSxLQURTLEVBRWpCdUIsSUFGaUIsQ0FFWixHQUZZLENBQXBCO0FBR0FKLElBQUFBLE1BQU0sY0FBT0osU0FBUCxjQUFvQkssV0FBcEIsTUFBTjtBQUNELEdBTEQsTUFLTztBQUNMLFFBQU1BLFlBQVcsR0FBR25CLEtBQUssQ0FDdEJvQixHQURpQixDQUNiLFVBQUFDLElBQUk7QUFBQSx5QkFBU0EsSUFBSSxDQUFDTCxRQUFkLGVBQTJCSyxJQUFJLENBQUN0QixLQUFoQztBQUFBLEtBRFMsRUFFakJ1QixJQUZpQixDQUVaLElBRlksQ0FBcEI7O0FBR0FKLElBQUFBLE1BQU0sZ0JBQ1BKLFNBRE8saUJBRVJLLFlBRlEsUUFBTjtBQUlEOztBQUVELFNBQU87QUFBQ0wsSUFBQUEsU0FBUyxFQUFUQSxTQUFEO0FBQVlJLElBQUFBLE1BQU0sRUFBTkE7QUFBWixHQUFQO0FBQ0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgcHJlZml4ZXIgZnJvbSAnLi9wcmVmaXhlcidcbmltcG9ydCB2YWx1ZVRvU3RyaW5nIGZyb20gJy4vdmFsdWUtdG8tc3RyaW5nJ1xuaW1wb3J0IGdldENsYXNzTmFtZSBmcm9tICcuL2dldC1jbGFzcy1uYW1lJ1xuXG4vKipcbiAqIEdlbmVyYXRlcyB0aGUgY2xhc3MgbmFtZSBhbmQgc3R5bGVzLlxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRDc3MocHJvcGVydHlJbmZvLCB2YWx1ZSkge1xuICBsZXQgcnVsZXNcblxuICAvLyBQcm90ZWN0IGFnYWluc3QgdW5leHBlY3RlZCB2YWx1ZXNcbiAgY29uc3QgdmFsdWVUeXBlID0gdHlwZW9mIHZhbHVlXG4gIGlmICh2YWx1ZVR5cGUgIT09ICdzdHJpbmcnICYmIHZhbHVlVHlwZSAhPT0gJ251bWJlcicpIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgY29uc3QgbmFtZSA9IHByb3BlcnR5SW5mby5qc05hbWVcbiAgICAgIGNvbnN0IGVuY29kZWRWYWx1ZSA9IEpTT04uc3RyaW5naWZ5KHZhbHVlKVxuICAgICAgY29uc29sZS5lcnJvcihcbiAgICAgICAgYPCfk6YgdWktYm94OiBwcm9wZXJ0eSDigJwke25hbWV94oCdIHdhcyBwYXNzZWQgaW52YWxpZCB2YWx1ZSDigJwke2VuY29kZWRWYWx1ZX3igJ0uIE9ubHkgbnVtYmVycyBhbmQgc3RyaW5ncyBhcmUgc3VwcG9ydGVkLmBcbiAgICAgIClcbiAgICB9XG4gICAgcmV0dXJuIG51bGxcbiAgfVxuXG4gIGNvbnN0IHZhbHVlU3RyaW5nID0gdmFsdWVUb1N0cmluZyh2YWx1ZSwgcHJvcGVydHlJbmZvLmRlZmF1bHRVbml0KVxuXG4gIGNvbnN0IGNsYXNzTmFtZSA9IGdldENsYXNzTmFtZShwcm9wZXJ0eUluZm8sIHZhbHVlU3RyaW5nKVxuXG4gIC8vIEF2b2lkIHJ1bm5pbmcgdGhlIHByZWZpeGVyIHdoZW4gcG9zc2libGUgYmVjYXVzZSBpdCdzIHNsb3dcbiAgaWYgKHByb3BlcnR5SW5mby5pc1ByZWZpeGVkKSB7XG4gICAgcnVsZXMgPSBwcmVmaXhlcihwcm9wZXJ0eUluZm8uanNOYW1lLCB2YWx1ZVN0cmluZylcbiAgfSBlbHNlIHtcbiAgICBydWxlcyA9IFt7cHJvcGVydHk6IHByb3BlcnR5SW5mby5jc3NOYW1lLCB2YWx1ZTogdmFsdWVTdHJpbmd9XVxuICB9XG5cbiAgbGV0IHN0eWxlc1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJykge1xuICAgIGNvbnN0IHJ1bGVzU3RyaW5nID0gcnVsZXNcbiAgICAgIC5tYXAocnVsZSA9PiBgJHtydWxlLnByb3BlcnR5fToke3J1bGUudmFsdWV9YClcbiAgICAgIC5qb2luKCc7JylcbiAgICBzdHlsZXMgPSBgLiR7Y2xhc3NOYW1lfXske3J1bGVzU3RyaW5nfX1gXG4gIH0gZWxzZSB7XG4gICAgY29uc3QgcnVsZXNTdHJpbmcgPSBydWxlc1xuICAgICAgLm1hcChydWxlID0+IGAgICR7cnVsZS5wcm9wZXJ0eX06ICR7cnVsZS52YWx1ZX07YClcbiAgICAgIC5qb2luKCdcXG4nKVxuICAgIHN0eWxlcyA9IGBcbi4ke2NsYXNzTmFtZX0ge1xuJHtydWxlc1N0cmluZ31cbn1gXG4gIH1cblxuICByZXR1cm4ge2NsYXNzTmFtZSwgc3R5bGVzfVxufVxuIl19