"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.propEnhancers = exports.propValidators = exports.propAliases = exports.propTypes = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _getCss = _interopRequireDefault(require("../get-css"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var propTypes = {
  boxSizing: _propTypes.default.string,
  clear: _propTypes.default.string,
  clearfix: _propTypes.default.bool,
  display: _propTypes.default.string,
  float: _propTypes.default.string,
  zIndex: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number])
};
exports.propTypes = propTypes;
var propAliases = {};
exports.propAliases = propAliases;
var propValidators = {};
exports.propValidators = propValidators;
var _display = {
  className: 'dspl',
  cssName: 'display',
  jsName: 'display',
  safeValue: true,
  isPrefixed: true
};
var _float = {
  className: 'flt',
  cssName: 'float',
  jsName: 'float',
  safeValue: true
};
var _clear = {
  className: 'clr',
  cssName: 'clear',
  jsName: 'clear',
  safeValue: true
};
var _zIndex = {
  className: 'z-idx',
  cssName: 'z-index',
  jsName: 'zIndex',
  safeValue: true,
  defaultUnit: ''
};
var _boxSizing = {
  className: 'box-szg',
  cssName: 'box-sizing',
  jsName: 'boxSizing',
  safeValue: true
};
var propEnhancers = {
  boxSizing: function boxSizing(value) {
    return (0, _getCss.default)(_boxSizing, value);
  },
  clear: function clear(value) {
    return (0, _getCss.default)(_clear, value);
  },
  clearfix: function clearfix() {
    return {
      className: '📦clearfix',
      styles: "\n.\uD83D\uDCE6clearfix:before, .\uD83D\uDCE6clearfix:after {\n  display: table;\n  clear: both;\n  content: \"\";\n}"
    };
  },
  display: function display(value) {
    return (0, _getCss.default)(_display, value);
  },
  float: function float(value) {
    return (0, _getCss.default)(_float, value);
  },
  zIndex: function zIndex(value) {
    return (0, _getCss.default)(_zIndex, value);
  }
};
exports.propEnhancers = propEnhancers;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbmhhbmNlcnMvbGF5b3V0LmpzIl0sIm5hbWVzIjpbInByb3BUeXBlcyIsImJveFNpemluZyIsIlByb3BUeXBlcyIsInN0cmluZyIsImNsZWFyIiwiY2xlYXJmaXgiLCJib29sIiwiZGlzcGxheSIsImZsb2F0IiwiekluZGV4Iiwib25lT2ZUeXBlIiwibnVtYmVyIiwicHJvcEFsaWFzZXMiLCJwcm9wVmFsaWRhdG9ycyIsImNsYXNzTmFtZSIsImNzc05hbWUiLCJqc05hbWUiLCJzYWZlVmFsdWUiLCJpc1ByZWZpeGVkIiwiZGVmYXVsdFVuaXQiLCJwcm9wRW5oYW5jZXJzIiwidmFsdWUiLCJzdHlsZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7OztBQUVPLElBQU1BLFNBQVMsR0FBRztBQUN2QkMsRUFBQUEsU0FBUyxFQUFFQyxtQkFBVUMsTUFERTtBQUV2QkMsRUFBQUEsS0FBSyxFQUFFRixtQkFBVUMsTUFGTTtBQUd2QkUsRUFBQUEsUUFBUSxFQUFFSCxtQkFBVUksSUFIRztBQUl2QkMsRUFBQUEsT0FBTyxFQUFFTCxtQkFBVUMsTUFKSTtBQUt2QkssRUFBQUEsS0FBSyxFQUFFTixtQkFBVUMsTUFMTTtBQU12Qk0sRUFBQUEsTUFBTSxFQUFFUCxtQkFBVVEsU0FBVixDQUFvQixDQUFDUixtQkFBVUMsTUFBWCxFQUFtQkQsbUJBQVVTLE1BQTdCLENBQXBCO0FBTmUsQ0FBbEI7O0FBU0EsSUFBTUMsV0FBVyxHQUFHLEVBQXBCOztBQUVBLElBQU1DLGNBQWMsR0FBRyxFQUF2Qjs7QUFFUCxJQUFNTixRQUFPLEdBQUc7QUFDZE8sRUFBQUEsU0FBUyxFQUFFLE1BREc7QUFFZEMsRUFBQUEsT0FBTyxFQUFFLFNBRks7QUFHZEMsRUFBQUEsTUFBTSxFQUFFLFNBSE07QUFJZEMsRUFBQUEsU0FBUyxFQUFFLElBSkc7QUFLZEMsRUFBQUEsVUFBVSxFQUFFO0FBTEUsQ0FBaEI7QUFPQSxJQUFNVixNQUFLLEdBQUc7QUFDWk0sRUFBQUEsU0FBUyxFQUFFLEtBREM7QUFFWkMsRUFBQUEsT0FBTyxFQUFFLE9BRkc7QUFHWkMsRUFBQUEsTUFBTSxFQUFFLE9BSEk7QUFJWkMsRUFBQUEsU0FBUyxFQUFFO0FBSkMsQ0FBZDtBQU1BLElBQU1iLE1BQUssR0FBRztBQUNaVSxFQUFBQSxTQUFTLEVBQUUsS0FEQztBQUVaQyxFQUFBQSxPQUFPLEVBQUUsT0FGRztBQUdaQyxFQUFBQSxNQUFNLEVBQUUsT0FISTtBQUlaQyxFQUFBQSxTQUFTLEVBQUU7QUFKQyxDQUFkO0FBTUEsSUFBTVIsT0FBTSxHQUFHO0FBQ2JLLEVBQUFBLFNBQVMsRUFBRSxPQURFO0FBRWJDLEVBQUFBLE9BQU8sRUFBRSxTQUZJO0FBR2JDLEVBQUFBLE1BQU0sRUFBRSxRQUhLO0FBSWJDLEVBQUFBLFNBQVMsRUFBRSxJQUpFO0FBS2JFLEVBQUFBLFdBQVcsRUFBRTtBQUxBLENBQWY7QUFPQSxJQUFNbEIsVUFBUyxHQUFHO0FBQ2hCYSxFQUFBQSxTQUFTLEVBQUUsU0FESztBQUVoQkMsRUFBQUEsT0FBTyxFQUFFLFlBRk87QUFHaEJDLEVBQUFBLE1BQU0sRUFBRSxXQUhRO0FBSWhCQyxFQUFBQSxTQUFTLEVBQUU7QUFKSyxDQUFsQjtBQU9PLElBQU1HLGFBQWEsR0FBRztBQUMzQm5CLEVBQUFBLFNBQVMsRUFBRSxtQkFBQW9CLEtBQUs7QUFBQSxXQUFJLHFCQUFPcEIsVUFBUCxFQUFrQm9CLEtBQWxCLENBQUo7QUFBQSxHQURXO0FBRTNCakIsRUFBQUEsS0FBSyxFQUFFLGVBQUFpQixLQUFLO0FBQUEsV0FBSSxxQkFBT2pCLE1BQVAsRUFBY2lCLEtBQWQsQ0FBSjtBQUFBLEdBRmU7QUFHM0JoQixFQUFBQSxRQUFRLEVBQUU7QUFBQSxXQUFPO0FBQ2ZTLE1BQUFBLFNBQVMsRUFBRSxZQURJO0FBRWZRLE1BQUFBLE1BQU07QUFGUyxLQUFQO0FBQUEsR0FIaUI7QUFZM0JmLEVBQUFBLE9BQU8sRUFBRSxpQkFBQWMsS0FBSztBQUFBLFdBQUkscUJBQU9kLFFBQVAsRUFBZ0JjLEtBQWhCLENBQUo7QUFBQSxHQVphO0FBYTNCYixFQUFBQSxLQUFLLEVBQUUsZUFBQWEsS0FBSztBQUFBLFdBQUkscUJBQU9iLE1BQVAsRUFBY2EsS0FBZCxDQUFKO0FBQUEsR0FiZTtBQWMzQlosRUFBQUEsTUFBTSxFQUFFLGdCQUFBWSxLQUFLO0FBQUEsV0FBSSxxQkFBT1osT0FBUCxFQUFlWSxLQUFmLENBQUo7QUFBQTtBQWRjLENBQXRCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuaW1wb3J0IGdldENzcyBmcm9tICcuLi9nZXQtY3NzJ1xuXG5leHBvcnQgY29uc3QgcHJvcFR5cGVzID0ge1xuICBib3hTaXppbmc6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGNsZWFyOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBjbGVhcmZpeDogUHJvcFR5cGVzLmJvb2wsXG4gIGRpc3BsYXk6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGZsb2F0OiBQcm9wVHlwZXMuc3RyaW5nLFxuICB6SW5kZXg6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5udW1iZXJdKVxufVxuXG5leHBvcnQgY29uc3QgcHJvcEFsaWFzZXMgPSB7fVxuXG5leHBvcnQgY29uc3QgcHJvcFZhbGlkYXRvcnMgPSB7fVxuXG5jb25zdCBkaXNwbGF5ID0ge1xuICBjbGFzc05hbWU6ICdkc3BsJyxcbiAgY3NzTmFtZTogJ2Rpc3BsYXknLFxuICBqc05hbWU6ICdkaXNwbGF5JyxcbiAgc2FmZVZhbHVlOiB0cnVlLFxuICBpc1ByZWZpeGVkOiB0cnVlXG59XG5jb25zdCBmbG9hdCA9IHtcbiAgY2xhc3NOYW1lOiAnZmx0JyxcbiAgY3NzTmFtZTogJ2Zsb2F0JyxcbiAganNOYW1lOiAnZmxvYXQnLFxuICBzYWZlVmFsdWU6IHRydWVcbn1cbmNvbnN0IGNsZWFyID0ge1xuICBjbGFzc05hbWU6ICdjbHInLFxuICBjc3NOYW1lOiAnY2xlYXInLFxuICBqc05hbWU6ICdjbGVhcicsXG4gIHNhZmVWYWx1ZTogdHJ1ZVxufVxuY29uc3QgekluZGV4ID0ge1xuICBjbGFzc05hbWU6ICd6LWlkeCcsXG4gIGNzc05hbWU6ICd6LWluZGV4JyxcbiAganNOYW1lOiAnekluZGV4JyxcbiAgc2FmZVZhbHVlOiB0cnVlLFxuICBkZWZhdWx0VW5pdDogJydcbn1cbmNvbnN0IGJveFNpemluZyA9IHtcbiAgY2xhc3NOYW1lOiAnYm94LXN6ZycsXG4gIGNzc05hbWU6ICdib3gtc2l6aW5nJyxcbiAganNOYW1lOiAnYm94U2l6aW5nJyxcbiAgc2FmZVZhbHVlOiB0cnVlXG59XG5cbmV4cG9ydCBjb25zdCBwcm9wRW5oYW5jZXJzID0ge1xuICBib3hTaXppbmc6IHZhbHVlID0+IGdldENzcyhib3hTaXppbmcsIHZhbHVlKSxcbiAgY2xlYXI6IHZhbHVlID0+IGdldENzcyhjbGVhciwgdmFsdWUpLFxuICBjbGVhcmZpeDogKCkgPT4gKHtcbiAgICBjbGFzc05hbWU6ICfwn5OmY2xlYXJmaXgnLFxuICAgIHN0eWxlczogYFxuLvCfk6ZjbGVhcmZpeDpiZWZvcmUsIC7wn5OmY2xlYXJmaXg6YWZ0ZXIge1xuICBkaXNwbGF5OiB0YWJsZTtcbiAgY2xlYXI6IGJvdGg7XG4gIGNvbnRlbnQ6IFwiXCI7XG59YFxuICB9KSxcbiAgZGlzcGxheTogdmFsdWUgPT4gZ2V0Q3NzKGRpc3BsYXksIHZhbHVlKSxcbiAgZmxvYXQ6IHZhbHVlID0+IGdldENzcyhmbG9hdCwgdmFsdWUpLFxuICB6SW5kZXg6IHZhbHVlID0+IGdldENzcyh6SW5kZXgsIHZhbHVlKVxufVxuIl19