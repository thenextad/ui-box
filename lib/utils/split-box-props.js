"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = splitBoxProps;

var _enhancers = require("../enhancers");

var _splitProps = _interopRequireDefault(require("./split-props"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Convenience method to split the Box props.
 *
 * Useful for when you want to pass all of the Box props to the root Box and
 * pass the remaining props to a child element (e.g: disabled, readOnly, required, etc).
 */
function splitBoxProps(props) {
  return (0, _splitProps.default)(props, _enhancers.propNames);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlscy9zcGxpdC1ib3gtcHJvcHMuanMiXSwibmFtZXMiOlsic3BsaXRCb3hQcm9wcyIsInByb3BzIiwicHJvcE5hbWVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7Ozs7QUFFQTs7Ozs7O0FBTWUsU0FBU0EsYUFBVCxDQUF1QkMsS0FBdkIsRUFBOEI7QUFDM0MsU0FBTyx5QkFBV0EsS0FBWCxFQUFrQkMsb0JBQWxCLENBQVA7QUFDRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7cHJvcE5hbWVzfSBmcm9tICcuLi9lbmhhbmNlcnMnXG5pbXBvcnQgc3BsaXRQcm9wcyBmcm9tICcuL3NwbGl0LXByb3BzJ1xuXG4vKipcbiAqIENvbnZlbmllbmNlIG1ldGhvZCB0byBzcGxpdCB0aGUgQm94IHByb3BzLlxuICpcbiAqIFVzZWZ1bCBmb3Igd2hlbiB5b3Ugd2FudCB0byBwYXNzIGFsbCBvZiB0aGUgQm94IHByb3BzIHRvIHRoZSByb290IEJveCBhbmRcbiAqIHBhc3MgdGhlIHJlbWFpbmluZyBwcm9wcyB0byBhIGNoaWxkIGVsZW1lbnQgKGUuZzogZGlzYWJsZWQsIHJlYWRPbmx5LCByZXF1aXJlZCwgZXRjKS5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc3BsaXRCb3hQcm9wcyhwcm9wcykge1xuICByZXR1cm4gc3BsaXRQcm9wcyhwcm9wcywgcHJvcE5hbWVzKVxufVxuIl19