"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.propEnhancers = exports.propValidators = exports.propAliases = exports.propTypes = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _getCss = _interopRequireDefault(require("../get-css"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var propTypes = {
  cursor: _propTypes.default.string,
  pointerEvents: _propTypes.default.string,
  userSelect: _propTypes.default.string,
  visibility: _propTypes.default.string
};
exports.propTypes = propTypes;
var propAliases = {};
exports.propAliases = propAliases;
var propValidators = {};
exports.propValidators = propValidators;
var _cursor = {
  className: 'crsr',
  cssName: 'cursor',
  jsName: 'cursor'
};
var _userSelect = {
  className: 'usr-slct',
  cssName: 'user-select',
  jsName: 'userSelect',
  safeValue: true,
  isPrefixed: true
};
var _visibility = {
  className: 'vsblt',
  cssName: 'visibility',
  jsName: 'visibility',
  safeValue: true
};
var _pointerEvents = {
  className: 'ptr-evts',
  cssName: 'pointer-events',
  jsName: 'pointerEvents',
  safeValue: true
};
var propEnhancers = {
  cursor: function cursor(value) {
    return (0, _getCss.default)(_cursor, value);
  },
  pointerEvents: function pointerEvents(value) {
    return (0, _getCss.default)(_pointerEvents, value);
  },
  userSelect: function userSelect(value) {
    return (0, _getCss.default)(_userSelect, value);
  },
  visibility: function visibility(value) {
    return (0, _getCss.default)(_visibility, value);
  }
};
exports.propEnhancers = propEnhancers;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbmhhbmNlcnMvaW50ZXJhY3Rpb24uanMiXSwibmFtZXMiOlsicHJvcFR5cGVzIiwiY3Vyc29yIiwiUHJvcFR5cGVzIiwic3RyaW5nIiwicG9pbnRlckV2ZW50cyIsInVzZXJTZWxlY3QiLCJ2aXNpYmlsaXR5IiwicHJvcEFsaWFzZXMiLCJwcm9wVmFsaWRhdG9ycyIsImNsYXNzTmFtZSIsImNzc05hbWUiLCJqc05hbWUiLCJzYWZlVmFsdWUiLCJpc1ByZWZpeGVkIiwicHJvcEVuaGFuY2VycyIsInZhbHVlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7Ozs7QUFFTyxJQUFNQSxTQUFTLEdBQUc7QUFDdkJDLEVBQUFBLE1BQU0sRUFBRUMsbUJBQVVDLE1BREs7QUFFdkJDLEVBQUFBLGFBQWEsRUFBRUYsbUJBQVVDLE1BRkY7QUFHdkJFLEVBQUFBLFVBQVUsRUFBRUgsbUJBQVVDLE1BSEM7QUFJdkJHLEVBQUFBLFVBQVUsRUFBRUosbUJBQVVDO0FBSkMsQ0FBbEI7O0FBT0EsSUFBTUksV0FBVyxHQUFHLEVBQXBCOztBQUVBLElBQU1DLGNBQWMsR0FBRyxFQUF2Qjs7QUFFUCxJQUFNUCxPQUFNLEdBQUc7QUFDYlEsRUFBQUEsU0FBUyxFQUFFLE1BREU7QUFFYkMsRUFBQUEsT0FBTyxFQUFFLFFBRkk7QUFHYkMsRUFBQUEsTUFBTSxFQUFFO0FBSEssQ0FBZjtBQUtBLElBQU1OLFdBQVUsR0FBRztBQUNqQkksRUFBQUEsU0FBUyxFQUFFLFVBRE07QUFFakJDLEVBQUFBLE9BQU8sRUFBRSxhQUZRO0FBR2pCQyxFQUFBQSxNQUFNLEVBQUUsWUFIUztBQUlqQkMsRUFBQUEsU0FBUyxFQUFFLElBSk07QUFLakJDLEVBQUFBLFVBQVUsRUFBRTtBQUxLLENBQW5CO0FBT0EsSUFBTVAsV0FBVSxHQUFHO0FBQ2pCRyxFQUFBQSxTQUFTLEVBQUUsT0FETTtBQUVqQkMsRUFBQUEsT0FBTyxFQUFFLFlBRlE7QUFHakJDLEVBQUFBLE1BQU0sRUFBRSxZQUhTO0FBSWpCQyxFQUFBQSxTQUFTLEVBQUU7QUFKTSxDQUFuQjtBQU1BLElBQU1SLGNBQWEsR0FBRztBQUNwQkssRUFBQUEsU0FBUyxFQUFFLFVBRFM7QUFFcEJDLEVBQUFBLE9BQU8sRUFBRSxnQkFGVztBQUdwQkMsRUFBQUEsTUFBTSxFQUFFLGVBSFk7QUFJcEJDLEVBQUFBLFNBQVMsRUFBRTtBQUpTLENBQXRCO0FBT08sSUFBTUUsYUFBYSxHQUFHO0FBQzNCYixFQUFBQSxNQUFNLEVBQUUsZ0JBQUFjLEtBQUs7QUFBQSxXQUFJLHFCQUFPZCxPQUFQLEVBQWVjLEtBQWYsQ0FBSjtBQUFBLEdBRGM7QUFFM0JYLEVBQUFBLGFBQWEsRUFBRSx1QkFBQVcsS0FBSztBQUFBLFdBQUkscUJBQU9YLGNBQVAsRUFBc0JXLEtBQXRCLENBQUo7QUFBQSxHQUZPO0FBRzNCVixFQUFBQSxVQUFVLEVBQUUsb0JBQUFVLEtBQUs7QUFBQSxXQUFJLHFCQUFPVixXQUFQLEVBQW1CVSxLQUFuQixDQUFKO0FBQUEsR0FIVTtBQUkzQlQsRUFBQUEsVUFBVSxFQUFFLG9CQUFBUyxLQUFLO0FBQUEsV0FBSSxxQkFBT1QsV0FBUCxFQUFtQlMsS0FBbkIsQ0FBSjtBQUFBO0FBSlUsQ0FBdEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQgZ2V0Q3NzIGZyb20gJy4uL2dldC1jc3MnXG5cbmV4cG9ydCBjb25zdCBwcm9wVHlwZXMgPSB7XG4gIGN1cnNvcjogUHJvcFR5cGVzLnN0cmluZyxcbiAgcG9pbnRlckV2ZW50czogUHJvcFR5cGVzLnN0cmluZyxcbiAgdXNlclNlbGVjdDogUHJvcFR5cGVzLnN0cmluZyxcbiAgdmlzaWJpbGl0eTogUHJvcFR5cGVzLnN0cmluZ1xufVxuXG5leHBvcnQgY29uc3QgcHJvcEFsaWFzZXMgPSB7fVxuXG5leHBvcnQgY29uc3QgcHJvcFZhbGlkYXRvcnMgPSB7fVxuXG5jb25zdCBjdXJzb3IgPSB7XG4gIGNsYXNzTmFtZTogJ2Nyc3InLFxuICBjc3NOYW1lOiAnY3Vyc29yJyxcbiAganNOYW1lOiAnY3Vyc29yJ1xufVxuY29uc3QgdXNlclNlbGVjdCA9IHtcbiAgY2xhc3NOYW1lOiAndXNyLXNsY3QnLFxuICBjc3NOYW1lOiAndXNlci1zZWxlY3QnLFxuICBqc05hbWU6ICd1c2VyU2VsZWN0JyxcbiAgc2FmZVZhbHVlOiB0cnVlLFxuICBpc1ByZWZpeGVkOiB0cnVlXG59XG5jb25zdCB2aXNpYmlsaXR5ID0ge1xuICBjbGFzc05hbWU6ICd2c2JsdCcsXG4gIGNzc05hbWU6ICd2aXNpYmlsaXR5JyxcbiAganNOYW1lOiAndmlzaWJpbGl0eScsXG4gIHNhZmVWYWx1ZTogdHJ1ZVxufVxuY29uc3QgcG9pbnRlckV2ZW50cyA9IHtcbiAgY2xhc3NOYW1lOiAncHRyLWV2dHMnLFxuICBjc3NOYW1lOiAncG9pbnRlci1ldmVudHMnLFxuICBqc05hbWU6ICdwb2ludGVyRXZlbnRzJyxcbiAgc2FmZVZhbHVlOiB0cnVlXG59XG5cbmV4cG9ydCBjb25zdCBwcm9wRW5oYW5jZXJzID0ge1xuICBjdXJzb3I6IHZhbHVlID0+IGdldENzcyhjdXJzb3IsIHZhbHVlKSxcbiAgcG9pbnRlckV2ZW50czogdmFsdWUgPT4gZ2V0Q3NzKHBvaW50ZXJFdmVudHMsIHZhbHVlKSxcbiAgdXNlclNlbGVjdDogdmFsdWUgPT4gZ2V0Q3NzKHVzZXJTZWxlY3QsIHZhbHVlKSxcbiAgdmlzaWJpbGl0eTogdmFsdWUgPT4gZ2V0Q3NzKHZpc2liaWxpdHksIHZhbHVlKVxufVxuIl19