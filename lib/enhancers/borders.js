"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.propEnhancers = exports.propValidators = exports.propAliases = exports.propTypes = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _getCss = _interopRequireDefault(require("../get-css"));

var _regex = require("../utils/regex");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var propTypes = {
  border: _propTypes.default.string,
  borderBottom: _propTypes.default.string,
  borderBottomColor: _propTypes.default.string,
  borderBottomStyle: _propTypes.default.string,
  borderBottomWidth: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number]),
  borderColor: _propTypes.default.string,
  borderLeft: _propTypes.default.string,
  borderLeftColor: _propTypes.default.string,
  borderLeftStyle: _propTypes.default.string,
  borderLeftWidth: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number]),
  borderRight: _propTypes.default.string,
  borderRightColor: _propTypes.default.string,
  borderRightStyle: _propTypes.default.string,
  borderRightWidth: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number]),
  borderStyle: _propTypes.default.string,
  borderTop: _propTypes.default.string,
  borderTopColor: _propTypes.default.string,
  borderTopStyle: _propTypes.default.string,
  borderTopWidth: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number]),
  borderWidth: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number])
};
exports.propTypes = propTypes;
var propAliases = {
  border: ['borderBottom', 'borderLeft', 'borderRight', 'borderTop'],
  borderColor: ['borderBottomColor', 'borderLeftColor', 'borderRightColor', 'borderTopColor'],
  borderStyle: ['borderBottomStyle', 'borderLeftStyle', 'borderRightStyle', 'borderTopStyle'],
  borderWidth: ['borderBottomWidth', 'borderLeftWidth', 'borderRightWidth', 'borderTopWidth']
};
exports.propAliases = propAliases;
var propValidators = {};
exports.propValidators = propValidators;

if (process.env.NODE_ENV !== 'production') {
  propValidators.borderColor = function (value) {
    if (_regex.spacesOutsideParentheses.test(value)) {
      return "multiple values (\u201C".concat(value, "\u201D) aren\u055At supported with \u201CborderColor\u201D. Use \u201CborderBottomColor\u201D, \u201CborderLeftColor\u201D \u201CborderRightColor\u201D and \u201CborderTopColor\u201D instead.");
    }
  };

  propValidators.borderStyle = function (value) {
    if (_regex.spacesOutsideParentheses.test(value)) {
      return "multiple values (\u201C".concat(value, "\u201D) aren\u055At supported with \u201CborderStyle\u201D. Use \u201CborderBottomStyle\u201D, \u201CborderLeftStyle\u201D \u201CborderRightStyle\u201D and \u201CborderTopStyle\u201D instead.");
    }
  };

  propValidators.borderWidth = function (value) {
    if (_regex.spacesOutsideParentheses.test(value)) {
      return "multiple values (\u201C".concat(value, "\u201D) aren\u055At supported with \u201CborderWidth\u201D. Use \u201CborderBottomWidth\u201D, \u201CborderLeftWidth\u201D \u201CborderRightWidth\u201D and \u201CborderTopWidth\u201D instead.");
    }
  };
}

var _borderLeft = {
  className: 'b-lft',
  cssName: 'border-left',
  jsName: 'borderLeft'
};
var _borderLeftColor = {
  className: 'b-lft-clr',
  cssName: 'border-left-color',
  jsName: 'borderLeftColor'
};
var _borderLeftStyle = {
  className: 'b-lft-stl',
  cssName: 'border-left-style',
  jsName: 'borderLeftStyle',
  safeValue: true
};
var _borderLeftWidth = {
  className: 'b-lft-wdt',
  cssName: 'border-left-width',
  jsName: 'borderLeftWidth'
};
var _borderRight = {
  className: 'b-rgt',
  cssName: 'border-right',
  jsName: 'borderRight'
};
var _borderRightColor = {
  className: 'b-rgt-clr',
  cssName: 'border-right-color',
  jsName: 'borderRightColor'
};
var _borderRightStyle = {
  className: 'b-rgt-stl',
  cssName: 'border-right-style',
  jsName: 'borderRightStyle',
  safeValue: true
};
var _borderRightWidth = {
  className: 'b-rgt-wdt',
  cssName: 'border-right-width',
  jsName: 'borderRightWidth'
};
var _borderTop = {
  className: 'b-top',
  cssName: 'border-top',
  jsName: 'borderTop'
};
var _borderTopColor = {
  className: 'b-top-clr',
  cssName: 'border-top-color',
  jsName: 'borderTopColor'
};
var _borderTopStyle = {
  className: 'b-top-stl',
  cssName: 'border-top-style',
  jsName: 'borderTopStyle',
  safeValue: true
};
var _borderTopWidth = {
  className: 'b-top-wdt',
  cssName: 'border-top-width',
  jsName: 'borderTopWidth'
};
var _borderBottom = {
  className: 'b-btm',
  cssName: 'border-bottom',
  jsName: 'borderBottom'
};
var _borderBottomColor = {
  className: 'b-btm-clr',
  cssName: 'border-bottom-color',
  jsName: 'borderBottomColor'
};
var _borderBottomStyle = {
  className: 'b-btm-stl',
  cssName: 'border-bottom-style',
  jsName: 'borderBottomStyle',
  safeValue: true
};
var _borderBottomWidth = {
  className: 'b-btm-wdt',
  cssName: 'border-bottom-width',
  jsName: 'borderBottomWidth'
};
var propEnhancers = {
  borderBottom: function borderBottom(value) {
    return (0, _getCss.default)(_borderBottom, value);
  },
  borderBottomColor: function borderBottomColor(value) {
    return (0, _getCss.default)(_borderBottomColor, value);
  },
  borderBottomStyle: function borderBottomStyle(value) {
    return (0, _getCss.default)(_borderBottomStyle, value);
  },
  borderBottomWidth: function borderBottomWidth(value) {
    return (0, _getCss.default)(_borderBottomWidth, value);
  },
  borderLeft: function borderLeft(value) {
    return (0, _getCss.default)(_borderLeft, value);
  },
  borderLeftColor: function borderLeftColor(value) {
    return (0, _getCss.default)(_borderLeftColor, value);
  },
  borderLeftStyle: function borderLeftStyle(value) {
    return (0, _getCss.default)(_borderLeftStyle, value);
  },
  borderLeftWidth: function borderLeftWidth(value) {
    return (0, _getCss.default)(_borderLeftWidth, value);
  },
  borderRight: function borderRight(value) {
    return (0, _getCss.default)(_borderRight, value);
  },
  borderRightColor: function borderRightColor(value) {
    return (0, _getCss.default)(_borderRightColor, value);
  },
  borderRightStyle: function borderRightStyle(value) {
    return (0, _getCss.default)(_borderRightStyle, value);
  },
  borderRightWidth: function borderRightWidth(value) {
    return (0, _getCss.default)(_borderRightWidth, value);
  },
  borderTop: function borderTop(value) {
    return (0, _getCss.default)(_borderTop, value);
  },
  borderTopColor: function borderTopColor(value) {
    return (0, _getCss.default)(_borderTopColor, value);
  },
  borderTopStyle: function borderTopStyle(value) {
    return (0, _getCss.default)(_borderTopStyle, value);
  },
  borderTopWidth: function borderTopWidth(value) {
    return (0, _getCss.default)(_borderTopWidth, value);
  }
};
exports.propEnhancers = propEnhancers;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbmhhbmNlcnMvYm9yZGVycy5qcyJdLCJuYW1lcyI6WyJwcm9wVHlwZXMiLCJib3JkZXIiLCJQcm9wVHlwZXMiLCJzdHJpbmciLCJib3JkZXJCb3R0b20iLCJib3JkZXJCb3R0b21Db2xvciIsImJvcmRlckJvdHRvbVN0eWxlIiwiYm9yZGVyQm90dG9tV2lkdGgiLCJvbmVPZlR5cGUiLCJudW1iZXIiLCJib3JkZXJDb2xvciIsImJvcmRlckxlZnQiLCJib3JkZXJMZWZ0Q29sb3IiLCJib3JkZXJMZWZ0U3R5bGUiLCJib3JkZXJMZWZ0V2lkdGgiLCJib3JkZXJSaWdodCIsImJvcmRlclJpZ2h0Q29sb3IiLCJib3JkZXJSaWdodFN0eWxlIiwiYm9yZGVyUmlnaHRXaWR0aCIsImJvcmRlclN0eWxlIiwiYm9yZGVyVG9wIiwiYm9yZGVyVG9wQ29sb3IiLCJib3JkZXJUb3BTdHlsZSIsImJvcmRlclRvcFdpZHRoIiwiYm9yZGVyV2lkdGgiLCJwcm9wQWxpYXNlcyIsInByb3BWYWxpZGF0b3JzIiwicHJvY2VzcyIsImVudiIsIk5PREVfRU5WIiwidmFsdWUiLCJzcGFjZXNPdXRzaWRlUGFyZW50aGVzZXMiLCJ0ZXN0IiwiY2xhc3NOYW1lIiwiY3NzTmFtZSIsImpzTmFtZSIsInNhZmVWYWx1ZSIsInByb3BFbmhhbmNlcnMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7OztBQUVPLElBQU1BLFNBQVMsR0FBRztBQUN2QkMsRUFBQUEsTUFBTSxFQUFFQyxtQkFBVUMsTUFESztBQUV2QkMsRUFBQUEsWUFBWSxFQUFFRixtQkFBVUMsTUFGRDtBQUd2QkUsRUFBQUEsaUJBQWlCLEVBQUVILG1CQUFVQyxNQUhOO0FBSXZCRyxFQUFBQSxpQkFBaUIsRUFBRUosbUJBQVVDLE1BSk47QUFLdkJJLEVBQUFBLGlCQUFpQixFQUFFTCxtQkFBVU0sU0FBVixDQUFvQixDQUFDTixtQkFBVUMsTUFBWCxFQUFtQkQsbUJBQVVPLE1BQTdCLENB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QUEsZ0JBQWdCLEVBQUUsMEJBQUFhLEtBQUs7QUFBQSxXQUFJLHFCQUFPYixpQkFBUCxFQUF5QmEsS0FBekIsQ0FBSjtBQUFBLEdBWEk7QUFZM0JaLEVBQUFBLGdCQUFnQixFQUFFLDBCQUFBWSxLQUFLO0FBQUEsV0FBSSxxQkFBT1osaUJBQVAsRUFBeUJZLEtBQXpCLENBQUo7QUFBQSxHQVpJO0FBYTNCVixFQUFBQSxTQUFTLEVBQUUsbUJBQUFVLEtBQUs7QUFBQSxXQUFJLHFCQUFPVixVQUFQLEVBQWtCVSxLQUFsQixDQUFKO0FBQUEsR0FiVztBQWMzQlQsRUFBQUEsY0FBYyxFQUFFLHdCQUFBUyxLQUFLO0FBQUEsV0FBSSxxQkFBT1QsZUFBUCxFQUF1QlMsS0FBdkIsQ0FBSjtBQUFBLEdBZE07QUFlM0JSLEVBQUFBLGNBQWMsRUFBRSx3QkFBQVEsS0FBSztBQUFBLFdBQUkscUJBQU9SLGVBQVAsRUFBdUJRLEtBQXZCLENBQUo7QUFBQSxHQWZNO0FBZ0IzQlAsRUFBQUEsY0FBYyxFQUFFLHdCQUFBTyxLQUFLO0FBQUEsV0FBSSxxQkFBT1AsZUFBUCxFQUF1Qk8sS0FBdkIsQ0FBSjtBQUFBO0FBaEJNLENBQXRCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuaW1wb3J0IGdldENzcyBmcm9tICcuLi9nZXQtY3NzJ1xuaW1wb3J0IHtzcGFjZXNPdXRzaWRlUGFyZW50aGVzZXN9IGZyb20gJy4uL3V0aWxzL3JlZ2V4J1xuXG5leHBvcnQgY29uc3QgcHJvcFR5cGVzID0ge1xuICBib3JkZXI6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGJvcmRlckJvdHRvbTogUHJvcFR5cGVzLnN0cmluZyxcbiAgYm9yZGVyQm90dG9tQ29sb3I6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGJvcmRlckJvdHRvbVN0eWxlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBib3JkZXJCb3R0b21XaWR0aDogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLm51bWJlcl0pLFxuICBib3JkZXJDb2xvcjogUHJvcFR5cGVzLnN0cmluZyxcbiAgYm9yZGVyTGVmdDogUHJvcFR5cGVzLnN0cmluZyxcbiAgYm9yZGVyTGVmdENvbG9yOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBib3JkZXJMZWZ0U3R5bGU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGJvcmRlckxlZnRXaWR0aDogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLm51bWJlcl0pLFxuICBib3JkZXJSaWdodDogUHJvcFR5cGVzLnN0cmluZyxcbiAgYm9yZGVyUmlnaHRDb2xvcjogUHJvcFR5cGVzLnN0cmluZyxcbiAgYm9yZGVyUmlnaHRTdHlsZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgYm9yZGVyUmlnaHRXaWR0aDogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLm51bWJlcl0pLFxuICBib3JkZXJTdHlsZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgYm9yZGVyVG9wOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBib3JkZXJUb3BDb2xvcjogUHJvcFR5cGVzLnN0cmluZyxcbiAgYm9yZGVyVG9wU3R5bGU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGJvcmRlclRvcFdpZHRoOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMubnVtYmVyXSksXG4gIGJvcmRlcldpZHRoOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMubnVtYmVyXSlcbn1cblxuZXhwb3J0IGNvbnN0IHByb3BBbGlhc2VzID0ge1xuICBib3JkZXI6IFsnYm9yZGVyQm90dG9tJywgJ2JvcmRlckxlZnQnLCAnYm9yZGVyUmlnaHQnLCAnYm9yZGVyVG9wJ10sXG4gIGJvcmRlckNvbG9yOiBbXG4gICAgJ2JvcmRlckJvdHRvbUNvbG9yJyxcbiAgICAnYm9yZGVyTGVmdENvbG9yJyxcbiAgICAnYm9yZGVyUmlnaHRDb2xvcicsXG4gICAgJ2JvcmRlclRvcENvbG9yJ1xuICBdLFxuICBib3JkZXJTdHlsZTogW1xuICAgICdib3JkZXJCb3R0b21TdHlsZScsXG4gICAgJ2JvcmRlckxlZnRTdHlsZScsXG4gICAgJ2JvcmRlclJpZ2h0U3R5bGUnLFxuICAgICdib3JkZXJUb3BTdHlsZSdcbiAgXSxcbiAgYm9yZGVyV2lkdGg6IFtcbiAgICAnYm9yZGVyQm90dG9tV2lkdGgnLFxuICAgICdib3JkZXJMZWZ0V2lkdGgnLFxuICAgICdib3JkZXJSaWdodFdpZHRoJyxcbiAgICAnYm9yZGVyVG9wV2lkdGgnXG4gIF1cbn1cblxuZXhwb3J0IGNvbnN0IHByb3BWYWxpZGF0b3JzID0ge31cblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgcHJvcFZhbGlkYXRvcnMuYm9yZGVyQ29sb3IgPSB2YWx1ZSA9PiB7XG4gICAgaWYgKHNwYWNlc091dHNpZGVQYXJlbnRoZXNlcy50ZXN0KHZhbHVlKSkge1xuICAgICAgcmV0dXJuIGBtdWx0aXBsZSB2YWx1ZXMgKOKAnCR7dmFsdWV94oCdKSBhcmVu1Zp0IHN1cHBvcnRlZCB3aXRoIOKAnGJvcmRlckNvbG9y4oCdLiBVc2Ug4oCcYm9yZGVyQm90dG9tQ29sb3LigJ0sIOKAnGJvcmRlckxlZnRDb2xvcuKAnSDigJxib3JkZXJSaWdodENvbG9y4oCdIGFuZCDigJxib3JkZXJUb3BDb2xvcuKAnSBpbnN0ZWFkLmBcbiAgICB9XG4gIH1cbiAgcHJvcFZhbGlkYXRvcnMuYm9yZGVyU3R5bGUgPSB2YWx1ZSA9PiB7XG4gICAgaWYgKHNwYWNlc091dHNpZGVQYXJlbnRoZXNlcy50ZXN0KHZhbHVlKSkge1xuICAgICAgcmV0dXJuIGBtdWx0aXBsZSB2YWx1ZXMgKOKAnCR7dmFsdWV94oCdKSBhcmVu1Zp0IHN1cHBvcnRlZCB3aXRoIOKAnGJvcmRlclN0eWxl4oCdLiBVc2Ug4oCcYm9yZGVyQm90dG9tU3R5bGXigJ0sIOKAnGJvcmRlckxlZnRTdHlsZeKAnSDigJxib3JkZXJSaWdodFN0eWxl4oCdIGFuZCDigJxib3JkZXJUb3BTdHlsZeKAnSBpbnN0ZWFkLmBcbiAgICB9XG4gIH1cbiAgcHJvcFZhbGlkYXRvcnMuYm9yZGVyV2lkdGggPSB2YWx1ZSA9PiB7XG4gICAgaWYgKHNwYWNlc091dHNpZGVQYXJlbnRoZXNlcy50ZXN0KHZhbHVlKSkge1xuICAgICAgcmV0dXJuIGBtdWx0aXBsZSB2YWx1ZXMgKOKAnCR7dmFsdWV94oCdKSBhcmVu1Zp0IHN1cHBvcnRlZCB3aXRoIOKAnGJvcmRlcldpZHRo4oCdLiBVc2Ug4oCcYm9yZGVyQm90dG9tV2lkdGjigJ0sIOKAnGJvcmRlckxlZnRXaWR0aOKAnSDigJxib3JkZXJSaWdodFdpZHRo4oCdIGFuZCDigJxib3JkZXJUb3BXaWR0aOKAnSBpbnN0ZWFkLmBcbiAgICB9XG4gIH1cbn1cblxuY29uc3QgYm9yZGVyTGVmdCA9IHtcbiAgY2xhc3NOYW1lOiAnYi1sZnQnLFxuICBjc3NOYW1lOiAnYm9yZGVyLWxlZnQnLFxuICBqc05hbWU6ICdib3JkZXJMZWZ0J1xufVxuY29uc3QgYm9yZGVyTGVmdENvbG9yID0ge1xuICBjbGFzc05hbWU6ICdiLWxmdC1jbHInLFxuICBjc3NOYW1lOiAnYm9yZGVyLWxlZnQtY29sb3InLFxuICBqc05hbWU6ICdib3JkZXJMZWZ0Q29sb3InXG59XG5jb25zdCBib3JkZXJMZWZ0U3R5bGUgPSB7XG4gIGNsYXNzTmFtZTogJ2ItbGZ0LXN0bCcsXG4gIGNzc05hbWU6ICdib3JkZXItbGVmdC1zdHlsZScsXG4gIGpzTmFtZTogJ2JvcmRlckxlZnRTdHlsZScsXG4gIHNhZmVWYWx1ZTogdHJ1ZVxufVxuY29uc3QgYm9yZGVyTGVmdFdpZHRoID0ge1xuICBjbGFzc05hbWU6ICdiLWxmdC13ZHQnLFxuICBjc3NOYW1lOiAnYm9yZGVyLWxlZnQtd2lkdGgnLFxuICBqc05hbWU6ICdib3JkZXJMZWZ0V2lkdGgnXG59XG5jb25zdCBib3JkZXJSaWdodCA9IHtcbiAgY2xhc3NOYW1lOiAnYi1yZ3QnLFxuICBjc3NOYW1lOiAnYm9yZGVyLXJpZ2h0JyxcbiAganNOYW1lOiAnYm9yZGVyUmlnaHQnXG59XG5jb25zdCBib3JkZXJSaWdodENvbG9yID0ge1xuICBjbGFzc05hbWU6ICdiLXJndC1jbHInLFxuICBjc3NOYW1lOiAnYm9yZGVyLXJpZ2h0LWNvbG9yJyxcbiAganNOYW1lOiAnYm9yZGVyUmlnaHRDb2xvcidcbn1cbmNvbnN0IGJvcmRlclJpZ2h0U3R5bGUgPSB7XG4gIGNsYXNzTmFtZTogJ2Itcmd0LXN0bCcsXG4gIGNzc05hbWU6ICdib3JkZXItcmlnaHQtc3R5bGUnLFxuICBqc05hbWU6ICdib3JkZXJSaWdodFN0eWxlJyxcbiAgc2FmZVZhbHVlOiB0cnVlXG59XG5jb25zdCBib3JkZXJSaWdodFdpZHRoID0ge1xuICBjbGFzc05hbWU6ICdiLXJndC13ZHQnLFxuICBjc3NOYW1lOiAnYm9yZGVyLXJpZ2h0LXdpZHRoJyxcbiAganNOYW1lOiAnYm9yZGVyUmlnaHRXaWR0aCdcbn1cbmNvbnN0IGJvcmRlclRvcCA9IHtcbiAgY2xhc3NOYW1lOiAnYi10b3AnLFxuICBjc3NOYW1lOiAnYm9yZGVyLXRvcCcsXG4gIGpzTmFtZTogJ2JvcmRlclRvcCdcbn1cbmNvbnN0IGJvcmRlclRvcENvbG9yID0ge1xuICBjbGFzc05hbWU6ICdiLXRvcC1jbHInLFxuICBjc3NOYW1lOiAnYm9yZGVyLXRvcC1jb2xvcicsXG4gIGpzTmFtZTogJ2JvcmRlclRvcENvbG9yJ1xufVxuY29uc3QgYm9yZGVyVG9wU3R5bGUgPSB7XG4gIGNsYXNzTmFtZTogJ2ItdG9wLXN0bCcsXG4gIGNzc05hbWU6ICdib3JkZXItdG9wLXN0eWxlJyxcbiAganNOYW1lOiAnYm9yZGVyVG9wU3R5bGUnLFxuICBzYWZlVmFsdWU6IHRydWVcbn1cbmNvbnN0IGJvcmRlclRvcFdpZHRoID0ge1xuICBjbGFzc05hbWU6ICdiLXRvcC13ZHQnLFxuICBjc3NOYW1lOiAnYm9yZGVyLXRvcC13aWR0aCcsXG4gIGpzTmFtZTogJ2JvcmRlclRvcFdpZHRoJ1xufVxuY29uc3QgYm9yZGVyQm90dG9tID0ge1xuICBjbGFzc05hbWU6ICdiLWJ0bScsXG4gIGNzc05hbWU6ICdib3JkZXItYm90dG9tJyxcbiAganNOYW1lOiAnYm9yZGVyQm90dG9tJ1xufVxuY29uc3QgYm9yZGVyQm90dG9tQ29sb3IgPSB7XG4gIGNsYXNzTmFtZTogJ2ItYnRtLWNscicsXG4gIGNzc05hbWU6ICdib3JkZXItYm90dG9tLWNvbG9yJyxcbiAganNOYW1lOiAnYm9yZGVyQm90dG9tQ29sb3InXG59XG5jb25zdCBib3JkZXJCb3R0b21TdHlsZSA9IHtcbiAgY2xhc3NOYW1lOiAnYi1idG0tc3RsJyxcbiAgY3NzTmFtZTogJ2JvcmRlci1ib3R0b20tc3R5bGUnLFxuICBqc05hbWU6ICdib3JkZXJCb3R0b21TdHlsZScsXG4gIHNhZmVWYWx1ZTogdHJ1ZVxufVxuY29uc3QgYm9yZGVyQm90dG9tV2lkdGggPSB7XG4gIGNsYXNzTmFtZTogJ2ItYnRtLXdkdCcsXG4gIGNzc05hbWU6ICdib3JkZXItYm90dG9tLXdpZHRoJyxcbiAganNOYW1lOiAnYm9yZGVyQm90dG9tV2lkdGgnXG59XG5cbmV4cG9ydCBjb25zdCBwcm9wRW5oYW5jZXJzID0ge1xuICBib3JkZXJCb3R0b206IHZhbHVlID0+IGdldENzcyhib3JkZXJCb3R0b20sIHZhbHVlKSxcbiAgYm9yZGVyQm90dG9tQ29sb3I6IHZhbHVlID0+IGdldENzcyhib3JkZXJCb3R0b21Db2xvciwgdmFsdWUpLFxuICBib3JkZXJCb3R0b21TdHlsZTogdmFsdWUgPT4gZ2V0Q3NzKGJvcmRlckJvdHRvbVN0eWxlLCB2YWx1ZSksXG4gIGJvcmRlckJvdHRvbVdpZHRoOiB2YWx1ZSA9PiBnZXRDc3MoYm9yZGVyQm90dG9tV2lkdGgsIHZhbHVlKSxcbiAgYm9yZGVyTGVmdDogdmFsdWUgPT4gZ2V0Q3NzKGJvcmRlckxlZnQsIHZhbHVlKSxcbiAgYm9yZGVyTGVmdENvbG9yOiB2YWx1ZSA9PiBnZXRDc3MoYm9yZGVyTGVmdENvbG9yLCB2YWx1ZSksXG4gIGJvcmRlckxlZnRTdHlsZTogdmFsdWUgPT4gZ2V0Q3NzKGJvcmRlckxlZnRTdHlsZSwgdmFsdWUpLFxuICBib3JkZXJMZWZ0V2lkdGg6IHZhbHVlID0+IGdldENzcyhib3JkZXJMZWZ0V2lkdGgsIHZhbHVlKSxcbiAgYm9yZGVyUmlnaHQ6IHZhbHVlID0+IGdldENzcyhib3JkZXJSaWdodCwgdmFsdWUpLFxuICBib3JkZXJSaWdodENvbG9yOiB2YWx1ZSA9PiBnZXRDc3MoYm9yZGVyUmlnaHRDb2xvciwgdmFsdWUpLFxuICBib3JkZXJSaWdodFN0eWxlOiB2YWx1ZSA9PiBnZXRDc3MoYm9yZGVyUmlnaHRTdHlsZSwgdmFsdWUpLFxuICBib3JkZXJSaWdodFdpZHRoOiB2YWx1ZSA9PiBnZXRDc3MoYm9yZGVyUmlnaHRXaWR0aCwgdmFsdWUpLFxuICBib3JkZXJUb3A6IHZhbHVlID0+IGdldENzcyhib3JkZXJUb3AsIHZhbHVlKSxcbiAgYm9yZGVyVG9wQ29sb3I6IHZhbHVlID0+IGdldENzcyhib3JkZXJUb3BDb2xvciwgdmFsdWUpLFxuICBib3JkZXJUb3BTdHlsZTogdmFsdWUgPT4gZ2V0Q3NzKGJvcmRlclRvcFN0eWxlLCB2YWx1ZSksXG4gIGJvcmRlclRvcFdpZHRoOiB2YWx1ZSA9PiBnZXRDc3MoYm9yZGVyVG9wV2lkdGgsIHZhbHVlKVxufVxuIl19