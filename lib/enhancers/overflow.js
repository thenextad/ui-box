"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.propEnhancers = exports.propValidators = exports.propAliases = exports.propTypes = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _getCss = _interopRequireDefault(require("../get-css"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var propTypes = {
  overflow: _propTypes.default.string,
  overflowX: _propTypes.default.string,
  overflowY: _propTypes.default.string
};
exports.propTypes = propTypes;
var propAliases = {
  overflow: ['overflowX', 'overflowY']
};
exports.propAliases = propAliases;
var propValidators = {};
exports.propValidators = propValidators;
var _overflowY = {
  className: 'ovflw-y',
  cssName: 'overflow-y',
  jsName: 'overflowY',
  safeValue: true
};
var _overflowX = {
  className: 'ovflw-x',
  cssName: 'overflow-x',
  jsName: 'overflowX',
  safeValue: true
};
var propEnhancers = {
  overflowX: function overflowX(value) {
    return (0, _getCss.default)(_overflowX, value);
  },
  overflowY: function overflowY(value) {
    return (0, _getCss.default)(_overflowY, value);
  }
};
exports.propEnhancers = propEnhancers;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbmhhbmNlcnMvb3ZlcmZsb3cuanMiXSwibmFtZXMiOlsicHJvcFR5cGVzIiwib3ZlcmZsb3ciLCJQcm9wVHlwZXMiLCJzdHJpbmciLCJvdmVyZmxvd1giLCJvdmVyZmxvd1kiLCJwcm9wQWxpYXNlcyIsInByb3BWYWxpZGF0b3JzIiwiY2xhc3NOYW1lIiwiY3NzTmFtZSIsImpzTmFtZSIsInNhZmVWYWx1ZSIsInByb3BFbmhhbmNlcnMiLCJ2YWx1ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOzs7O0FBRU8sSUFBTUEsU0FBUyxHQUFHO0FBQ3ZCQyxFQUFBQSxRQUFRLEVBQUVDLG1CQUFVQyxNQURHO0FBRXZCQyxFQUFBQSxTQUFTLEVBQUVGLG1CQUFVQyxNQUZFO0FBR3ZCRSxFQUFBQSxTQUFTLEVBQUVILG1CQUFVQztBQUhFLENBQWxCOztBQU1BLElBQU1HLFdBQVcsR0FBRztBQUN6QkwsRUFBQUEsUUFBUSxFQUFFLENBQUMsV0FBRCxFQUFjLFdBQWQ7QUFEZSxDQUFwQjs7QUFJQSxJQUFNTSxjQUFjLEdBQUcsRUFBdkI7O0FBRVAsSUFBTUYsVUFBUyxHQUFHO0FBQ2hCRyxFQUFBQSxTQUFTLEVBQUUsU0FESztBQUVoQkMsRUFBQUEsT0FBTyxFQUFFLFlBRk87QUFHaEJDLEVBQUFBLE1BQU0sRUFBRSxXQUhRO0FBSWhCQyxFQUFBQSxTQUFTLEVBQUU7QUFKSyxDQUFsQjtBQU1BLElBQU1QLFVBQVMsR0FBRztBQUNoQkksRUFBQUEsU0FBUyxFQUFFLFNBREs7QUFFaEJDLEVBQUFBLE9BQU8sRUFBRSxZQUZPO0FBR2hCQyxFQUFBQSxNQUFNLEVBQUUsV0FIUTtBQUloQkMsRUFBQUEsU0FBUyxFQUFFO0FBSkssQ0FBbEI7QUFPTyxJQUFNQyxhQUFhLEdBQUc7QUFDM0JSLEVBQUFBLFNBQVMsRUFBRSxtQkFBQVMsS0FBSztBQUFBLFdBQUkscUJBQU9ULFVBQVAsRUFBa0JTLEtBQWxCLENBQUo7QUFBQSxHQURXO0FBRTNCUixFQUFBQSxTQUFTLEVBQUUsbUJBQUFRLEtBQUs7QUFBQSxXQUFJLHFCQUFPUixVQUFQLEVBQWtCUSxLQUFsQixDQUFKO0FBQUE7QUFGVyxDQUF0QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcbmltcG9ydCBnZXRDc3MgZnJvbSAnLi4vZ2V0LWNzcydcblxuZXhwb3J0IGNvbnN0IHByb3BUeXBlcyA9IHtcbiAgb3ZlcmZsb3c6IFByb3BUeXBlcy5zdHJpbmcsXG4gIG92ZXJmbG93WDogUHJvcFR5cGVzLnN0cmluZyxcbiAgb3ZlcmZsb3dZOiBQcm9wVHlwZXMuc3RyaW5nXG59XG5cbmV4cG9ydCBjb25zdCBwcm9wQWxpYXNlcyA9IHtcbiAgb3ZlcmZsb3c6IFsnb3ZlcmZsb3dYJywgJ292ZXJmbG93WSddXG59XG5cbmV4cG9ydCBjb25zdCBwcm9wVmFsaWRhdG9ycyA9IHt9XG5cbmNvbnN0IG92ZXJmbG93WSA9IHtcbiAgY2xhc3NOYW1lOiAnb3ZmbHcteScsXG4gIGNzc05hbWU6ICdvdmVyZmxvdy15JyxcbiAganNOYW1lOiAnb3ZlcmZsb3dZJyxcbiAgc2FmZVZhbHVlOiB0cnVlXG59XG5jb25zdCBvdmVyZmxvd1ggPSB7XG4gIGNsYXNzTmFtZTogJ292Zmx3LXgnLFxuICBjc3NOYW1lOiAnb3ZlcmZsb3cteCcsXG4gIGpzTmFtZTogJ292ZXJmbG93WCcsXG4gIHNhZmVWYWx1ZTogdHJ1ZVxufVxuXG5leHBvcnQgY29uc3QgcHJvcEVuaGFuY2VycyA9IHtcbiAgb3ZlcmZsb3dYOiB2YWx1ZSA9PiBnZXRDc3Mob3ZlcmZsb3dYLCB2YWx1ZSksXG4gIG92ZXJmbG93WTogdmFsdWUgPT4gZ2V0Q3NzKG92ZXJmbG93WSwgdmFsdWUpXG59XG4iXX0=