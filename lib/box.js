"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _glamor = require("glamor");

var _enhancers = require("./enhancers");

var _enhanceProps3 = _interopRequireDefault(require("./enhance-props"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var cssWarned = false;

var Box =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Box, _React$Component);

  function Box() {
    _classCallCheck(this, Box);

    return _possibleConstructorReturn(this, _getPrototypeOf(Box).apply(this, arguments));
  }

  _createClass(Box, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          is = _this$props.is,
          css = _this$props.css,
          innerRef = _this$props.innerRef,
          children = _this$props.children,
          props = _objectWithoutProperties(_this$props, ["is", "css", "innerRef", "children"]); // Convert the CSS props to class names (and inject the styles)


      var _enhanceProps = (0, _enhanceProps3.default)(props),
          _enhanceProps2 = _slicedToArray(_enhanceProps, 2),
          className = _enhanceProps2[0],
          parsedProps = _enhanceProps2[1]; // Add glamor class


      if (css) {
        // Warn that it's deprecated in the development
        if (process.env.NODE_ENV !== 'production') {
          // Don't spam the warning
          if (!cssWarned) {
            cssWarned = true;
            console.warn("\uD83D\uDCE6 ui-box deprecation: the \u201Ccss\u201D prop will be removed in the next major version in favour of importing glamor directly and passing it\u055As generated class to the \u201CclassName\u201D prop.");
          }
        }

        parsedProps.className = "".concat(className, " ").concat((0, _glamor.css)(css).toString());
      } else {
        parsedProps.className = className;
      }

      if (innerRef) {
        parsedProps.ref = function (node) {
          innerRef(node);
        };
      }

      return _react.default.createElement(is, parsedProps, children);
    }
  }]);

  return Box;
}(_react.default.Component);

exports.default = Box;

_defineProperty(Box, "displayName", 'Box');

_defineProperty(Box, "propTypes", _objectSpread({}, _enhancers.propTypes, {
  css: _propTypes.default.object,
  innerRef: _propTypes.default.func,
  is: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.func, _propTypes.default.object]),
  boxSizing: _enhancers.propTypes.boxSizing
}));

_defineProperty(Box, "defaultProps", {
  css: null,
  innerRef: null,
  is: 'div',
  boxSizing: 'border-box'
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9ib3guanMiXSwibmFtZXMiOlsiY3NzV2FybmVkIiwiQm94IiwicHJvcHMiLCJpcyIsImNzcyIsImlubmVyUmVmIiwiY2hpbGRyZW4iLCJjbGFzc05hbWUiLCJwYXJzZWRQcm9wcyIsInByb2Nlc3MiLCJlbnYiLCJOT0RFX0VOViIsImNvbnNvbGUiLCJ3YXJuIiwidG9TdHJpbmciLCJyZWYiLCJub2RlIiwiUmVhY3QiLCJjcmVhdGVFbGVtZW50IiwiQ29tcG9uZW50IiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwib2JqZWN0IiwiZnVuYyIsIm9uZU9mVHlwZSIsInN0cmluZyIsImJveFNpemluZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLElBQUlBLFNBQVMsR0FBRyxLQUFoQjs7SUFFcUJDLEc7Ozs7Ozs7Ozs7Ozs7NkJBc0JWO0FBQUEsd0JBQ3lDLEtBQUtDLEtBRDlDO0FBQUEsVUFDQUMsRUFEQSxlQUNBQSxFQURBO0FBQUEsVUFDSUMsR0FESixlQUNJQSxHQURKO0FBQUEsVUFDU0MsUUFEVCxlQUNTQSxRQURUO0FBQUEsVUFDbUJDLFFBRG5CLGVBQ21CQSxRQURuQjtBQUFBLFVBQ2dDSixLQURoQyxpRkFFUDs7O0FBRk8sMEJBRzBCLDRCQUFhQSxLQUFiLENBSDFCO0FBQUE7QUFBQSxVQUdBSyxTQUhBO0FBQUEsVUFHV0MsV0FIWCxzQkFLUDs7O0FBQ0EsVUFBSUosR0FBSixFQUFTO0FBQ1A7QUFDQSxZQUFJSyxPQUFPLENBQUNDLEdBQVIsQ0FBWUMsUUFBWixLQUF5QixZQUE3QixFQUEyQztBQUN6QztBQUNBLGNBQUksQ0FBQ1gsU0FBTCxFQUFnQjtBQUNkQSxZQUFBQSxTQUFTLEdBQUcsSUFBWjtBQUNBWSxZQUFBQSxPQUFPLENBQUNDLElBQVI7QUFHRDtBQUNGOztBQUNETCxRQUFBQSxXQUFXLENBQUNELFNBQVosYUFBMkJBLFNBQTNCLGNBQXdDLGlCQUFLSCxHQUFMLEVBQVVVLFFBQVYsRUFBeEM7QUFDRCxPQVpELE1BWU87QUFDTE4sUUFBQUEsV0FBVyxDQUFDRCxTQUFaLEdBQXdCQSxTQUF4QjtBQUNEOztBQUVELFVBQUlGLFFBQUosRUFBYztBQUNaRyxRQUFBQSxXQUFXLENBQUNPLEdBQVosR0FBa0IsVUFBQUMsSUFBSSxFQUFJO0FBQ3hCWCxVQUFBQSxRQUFRLENBQUNXLElBQUQsQ0FBUjtBQUNELFNBRkQ7QUFHRDs7QUFFRCxhQUFPQyxlQUFNQyxhQUFOLENBQW9CZixFQUFwQixFQUF3QkssV0FBeEIsRUFBcUNGLFFBQXJDLENBQVA7QUFDRDs7OztFQW5EOEJXLGVBQU1FLFM7Ozs7Z0JBQWxCbEIsRyxpQkFDRSxLOztnQkFERkEsRyxpQ0FJZG1CLG9CO0FBQ0hoQixFQUFBQSxHQUFHLEVBQUVpQixtQkFBVUMsTTtBQUNmakIsRUFBQUEsUUFBUSxFQUFFZ0IsbUJBQVVFLEk7QUFDcEJwQixFQUFBQSxFQUFFLEVBQUVrQixtQkFBVUcsU0FBVixDQUFvQixDQUN0QkgsbUJBQVVJLE1BRFksRUFFdEJKLG1CQUFVRSxJQUZZLEVBR3RCRixtQkFBVUMsTUFIWSxDQUFwQixDO0FBS0pJLEVBQUFBLFNBQVMsRUFBRU4scUJBQVVNOzs7Z0JBWkp6QixHLGtCQWVHO0FBQ3BCRyxFQUFBQSxHQUFHLEVBQUUsSUFEZTtBQUVwQkMsRUFBQUEsUUFBUSxFQUFFLElBRlU7QUFHcEJGLEVBQUFBLEVBQUUsRUFBRSxLQUhnQjtBQUlwQnVCLEVBQUFBLFNBQVMsRUFBRTtBQUpTLEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQge2NzcyBhcyBnY3NzfSBmcm9tICdnbGFtb3InXG5pbXBvcnQge3Byb3BUeXBlc30gZnJvbSAnLi9lbmhhbmNlcnMnXG5pbXBvcnQgZW5oYW5jZVByb3BzIGZyb20gJy4vZW5oYW5jZS1wcm9wcydcblxubGV0IGNzc1dhcm5lZCA9IGZhbHNlXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJveCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHN0YXRpYyBkaXNwbGF5TmFtZSA9ICdCb3gnXG5cbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICAuLi5wcm9wVHlwZXMsXG4gICAgY3NzOiBQcm9wVHlwZXMub2JqZWN0LFxuICAgIGlubmVyUmVmOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBpczogUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgICBQcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgUHJvcFR5cGVzLmZ1bmMsXG4gICAgICBQcm9wVHlwZXMub2JqZWN0XG4gICAgXSksXG4gICAgYm94U2l6aW5nOiBwcm9wVHlwZXMuYm94U2l6aW5nXG4gIH1cblxuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIGNzczogbnVsbCxcbiAgICBpbm5lclJlZjogbnVsbCxcbiAgICBpczogJ2RpdicsXG4gICAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCdcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7aXMsIGNzcywgaW5uZXJSZWYsIGNoaWxkcmVuLCAuLi5wcm9wc30gPSB0aGlzLnByb3BzXG4gICAgLy8gQ29udmVydCB0aGUgQ1NTIHByb3BzIHRvIGNsYXNzIG5hbWVzIChhbmQgaW5qZWN0IHRoZSBzdHlsZXMpXG4gICAgY29uc3QgW2NsYXNzTmFtZSwgcGFyc2VkUHJvcHNdID0gZW5oYW5jZVByb3BzKHByb3BzKVxuXG4gICAgLy8gQWRkIGdsYW1vciBjbGFzc1xuICAgIGlmIChjc3MpIHtcbiAgICAgIC8vIFdhcm4gdGhhdCBpdCdzIGRlcHJlY2F0ZWQgaW4gdGhlIGRldmVsb3BtZW50XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAvLyBEb24ndCBzcGFtIHRoZSB3YXJuaW5nXG4gICAgICAgIGlmICghY3NzV2FybmVkKSB7XG4gICAgICAgICAgY3NzV2FybmVkID0gdHJ1ZVxuICAgICAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICAgIGDwn5OmIHVpLWJveCBkZXByZWNhdGlvbjogdGhlIOKAnGNzc+KAnSBwcm9wIHdpbGwgYmUgcmVtb3ZlZCBpbiB0aGUgbmV4dCBtYWpvciB2ZXJzaW9uIGluIGZhdm91ciBvZiBpbXBvcnRpbmcgZ2xhbW9yIGRpcmVjdGx5IGFuZCBwYXNzaW5nIGl01ZpzIGdlbmVyYXRlZCBjbGFzcyB0byB0aGUg4oCcY2xhc3NOYW1l4oCdIHByb3AuYFxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcGFyc2VkUHJvcHMuY2xhc3NOYW1lID0gYCR7Y2xhc3NOYW1lfSAke2djc3MoY3NzKS50b1N0cmluZygpfWBcbiAgICB9IGVsc2Uge1xuICAgICAgcGFyc2VkUHJvcHMuY2xhc3NOYW1lID0gY2xhc3NOYW1lXG4gICAgfVxuXG4gICAgaWYgKGlubmVyUmVmKSB7XG4gICAgICBwYXJzZWRQcm9wcy5yZWYgPSBub2RlID0+IHtcbiAgICAgICAgaW5uZXJSZWYobm9kZSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChpcywgcGFyc2VkUHJvcHMsIGNoaWxkcmVuKVxuICB9XG59XG4iXX0=