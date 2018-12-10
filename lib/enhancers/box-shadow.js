"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.propEnhancers = exports.propValidators = exports.propAliases = exports.propTypes = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _getCss = _interopRequireDefault(require("../get-css"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var propTypes = {
  boxShadow: _propTypes.default.string
};
exports.propTypes = propTypes;
var propAliases = {};
exports.propAliases = propAliases;
var propValidators = {};
exports.propValidators = propValidators;
var _boxShadow = {
  className: 'bs',
  cssName: 'box-shadow',
  jsName: 'boxShadow',
  complexValue: true
};
var propEnhancers = {
  boxShadow: function boxShadow(value) {
    return (0, _getCss.default)(_boxShadow, value);
  }
};
exports.propEnhancers = propEnhancers;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbmhhbmNlcnMvYm94LXNoYWRvdy5qcyJdLCJuYW1lcyI6WyJwcm9wVHlwZXMiLCJib3hTaGFkb3ciLCJQcm9wVHlwZXMiLCJzdHJpbmciLCJwcm9wQWxpYXNlcyIsInByb3BWYWxpZGF0b3JzIiwiY2xhc3NOYW1lIiwiY3NzTmFtZSIsImpzTmFtZSIsImNvbXBsZXhWYWx1ZSIsInByb3BFbmhhbmNlcnMiLCJ2YWx1ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOzs7O0FBRU8sSUFBTUEsU0FBUyxHQUFHO0FBQ3ZCQyxFQUFBQSxTQUFTLEVBQUVDLG1CQUFVQztBQURFLENBQWxCOztBQUlBLElBQU1DLFdBQVcsR0FBRyxFQUFwQjs7QUFFQSxJQUFNQyxjQUFjLEdBQUcsRUFBdkI7O0FBRVAsSUFBTUosVUFBUyxHQUFHO0FBQ2hCSyxFQUFBQSxTQUFTLEVBQUUsSUFESztBQUVoQkMsRUFBQUEsT0FBTyxFQUFFLFlBRk87QUFHaEJDLEVBQUFBLE1BQU0sRUFBRSxXQUhRO0FBSWhCQyxFQUFBQSxZQUFZLEVBQUU7QUFKRSxDQUFsQjtBQU9PLElBQU1DLGFBQWEsR0FBRztBQUMzQlQsRUFBQUEsU0FBUyxFQUFFLG1CQUFBVSxLQUFLO0FBQUEsV0FBSSxxQkFBT1YsVUFBUCxFQUFrQlUsS0FBbEIsQ0FBSjtBQUFBO0FBRFcsQ0FBdEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQgZ2V0Q3NzIGZyb20gJy4uL2dldC1jc3MnXG5cbmV4cG9ydCBjb25zdCBwcm9wVHlwZXMgPSB7XG4gIGJveFNoYWRvdzogUHJvcFR5cGVzLnN0cmluZ1xufVxuXG5leHBvcnQgY29uc3QgcHJvcEFsaWFzZXMgPSB7fVxuXG5leHBvcnQgY29uc3QgcHJvcFZhbGlkYXRvcnMgPSB7fVxuXG5jb25zdCBib3hTaGFkb3cgPSB7XG4gIGNsYXNzTmFtZTogJ2JzJyxcbiAgY3NzTmFtZTogJ2JveC1zaGFkb3cnLFxuICBqc05hbWU6ICdib3hTaGFkb3cnLFxuICBjb21wbGV4VmFsdWU6IHRydWVcbn1cblxuZXhwb3J0IGNvbnN0IHByb3BFbmhhbmNlcnMgPSB7XG4gIGJveFNoYWRvdzogdmFsdWUgPT4gZ2V0Q3NzKGJveFNoYWRvdywgdmFsdWUpXG59XG4iXX0=