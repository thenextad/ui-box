"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.propEnhancers = exports.propValidators = exports.propAliases = exports.propTypes = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _getCss = _interopRequireDefault(require("../get-css"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var propTypes = {
  opacity: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number])
};
exports.propTypes = propTypes;
var propAliases = {};
exports.propAliases = propAliases;
var propValidators = {};
exports.propValidators = propValidators;
var _opacity = {
  className: 'opct',
  cssName: 'opacity',
  jsName: 'opacity',
  defaultUnit: ''
};
var propEnhancers = {
  opacity: function opacity(value) {
    return (0, _getCss.default)(_opacity, value);
  }
};
exports.propEnhancers = propEnhancers;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbmhhbmNlcnMvb3BhY2l0eS5qcyJdLCJuYW1lcyI6WyJwcm9wVHlwZXMiLCJvcGFjaXR5IiwiUHJvcFR5cGVzIiwib25lT2ZUeXBlIiwic3RyaW5nIiwibnVtYmVyIiwicHJvcEFsaWFzZXMiLCJwcm9wVmFsaWRhdG9ycyIsImNsYXNzTmFtZSIsImNzc05hbWUiLCJqc05hbWUiLCJkZWZhdWx0VW5pdCIsInByb3BFbmhhbmNlcnMiLCJ2YWx1ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOzs7O0FBRU8sSUFBTUEsU0FBUyxHQUFHO0FBQ3ZCQyxFQUFBQSxPQUFPLEVBQUVDLG1CQUFVQyxTQUFWLENBQW9CLENBQUNELG1CQUFVRSxNQUFYLEVBQW1CRixtQkFBVUcsTUFBN0IsQ0FBcEI7QUFEYyxDQUFsQjs7QUFJQSxJQUFNQyxXQUFXLEdBQUcsRUFBcEI7O0FBRUEsSUFBTUMsY0FBYyxHQUFHLEVBQXZCOztBQUVQLElBQU1OLFFBQU8sR0FBRztBQUNkTyxFQUFBQSxTQUFTLEVBQUUsTUFERztBQUVkQyxFQUFBQSxPQUFPLEVBQUUsU0FGSztBQUdkQyxFQUFBQSxNQUFNLEVBQUUsU0FITTtBQUlkQyxFQUFBQSxXQUFXLEVBQUU7QUFKQyxDQUFoQjtBQU9PLElBQU1DLGFBQWEsR0FBRztBQUMzQlgsRUFBQUEsT0FBTyxFQUFFLGlCQUFBWSxLQUFLO0FBQUEsV0FBSSxxQkFBT1osUUFBUCxFQUFnQlksS0FBaEIsQ0FBSjtBQUFBO0FBRGEsQ0FBdEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQgZ2V0Q3NzIGZyb20gJy4uL2dldC1jc3MnXG5cbmV4cG9ydCBjb25zdCBwcm9wVHlwZXMgPSB7XG4gIG9wYWNpdHk6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5udW1iZXJdKVxufVxuXG5leHBvcnQgY29uc3QgcHJvcEFsaWFzZXMgPSB7fVxuXG5leHBvcnQgY29uc3QgcHJvcFZhbGlkYXRvcnMgPSB7fVxuXG5jb25zdCBvcGFjaXR5ID0ge1xuICBjbGFzc05hbWU6ICdvcGN0JyxcbiAgY3NzTmFtZTogJ29wYWNpdHknLFxuICBqc05hbWU6ICdvcGFjaXR5JyxcbiAgZGVmYXVsdFVuaXQ6ICcnXG59XG5cbmV4cG9ydCBjb25zdCBwcm9wRW5oYW5jZXJzID0ge1xuICBvcGFjaXR5OiB2YWx1ZSA9PiBnZXRDc3Mob3BhY2l0eSwgdmFsdWUpXG59XG4iXX0=