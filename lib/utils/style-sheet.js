"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = StyleSheet;

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

// This file is based off glamor's StyleSheet
// https://github.com/threepointone/glamor/blob/v2.20.40/src/sheet.js
var isBrowser = typeof window !== 'undefined';
var isDev = process.env.NODE_ENV === 'development' || !process.env.NODE_ENV;
var isTest = process.env.NODE_ENV === 'test';

function last(arr) {
  return arr[arr.length - 1];
}

function sheetForTag(tag) {
  if (tag.sheet) {
    return tag.sheet;
  } // This weirdness brought to you by firefox


  for (var i = 0; i < document.styleSheets.length; i += 1) {
    if (document.styleSheets[i].ownerNode === tag) {
      return document.styleSheets[i];
    }
  }
}

function makeStyleTag() {
  var tag = document.createElement('style');
  tag.type = 'text/css';
  tag.setAttribute('data-ui-box', '');
  tag.appendChild(document.createTextNode(''));
  (document.head || document.getElementsByTagName('head')[0]).appendChild(tag);
  return tag;
}

function StyleSheet() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref$speedy = _ref.speedy,
      speedy = _ref$speedy === void 0 ? !isDev && !isTest : _ref$speedy,
      _ref$maxLength = _ref.maxLength,
      maxLength = _ref$maxLength === void 0 ? 65000 : _ref$maxLength;

  this.isSpeedy = speedy; // The big drawback here is that the css won't be editable in devtools

  this.sheet = undefined;
  this.tags = [];
  this.maxLength = maxLength;
  this.ctr = 0;
}

Object.assign(StyleSheet.prototype, {
  getSheet: function getSheet() {
    return sheetForTag(last(this.tags));
  },
  inject: function inject() {
    var _this = this;

    if (this.injected) {
      throw new Error('StyleSheet has already been injected.');
    }

    if (isBrowser) {
      this.tags[0] = makeStyleTag();
    } else {
      // Server side 'polyfill'. just enough behavior to be useful.
      this.sheet = {
        cssRules: [],
        insertRule: function insertRule(rule) {
          // Enough 'spec compliance' to be able to extract the rules later
          // in other words, just the cssText field
          _this.sheet.cssRules.push({
            cssText: rule
          });
        }
      };
    }

    this.injected = true;
  },
  speedy: function speedy(bool) {
    if (this.ctr !== 0) {
      throw new Error("StyleSheet cannot change speedy mode after inserting any rule to sheet. Either call speedy(".concat(bool, ") earlier in your app, or call flush() before speedy(").concat(bool, ")"));
    }

    this.isSpeedy = Boolean(bool);
  },
  _insert: function _insert(rule) {
    // This weirdness for perf
    var sheet = this.getSheet();
    sheet.insertRule(rule, sheet.cssRules.length);
  },
  insert: function insert(rule) {
    if (isBrowser) {
      // This is the ultrafast version, works across browsers
      if (this.isSpeedy && this.getSheet().insertRule) {
        this._insert(rule);
      } else {
        last(this.tags).appendChild(document.createTextNode(rule));
      }
    } else {
      // Server side is pretty simple
      this.sheet.insertRule(rule, this.sheet.cssRules.length);
    }

    this.ctr += 1;

    if (isBrowser && this.ctr % this.maxLength === 0) {
      this.tags.push(makeStyleTag());
    }

    return this.ctr - 1;
  },
  delete: function _delete(index) {
    // We insert a blank rule when 'deleting' so previously returned indexes remain stable
    return this.replace(index, '');
  },
  flush: function flush() {
    if (isBrowser) {
      this.tags.forEach(function (tag) {
        return tag.parentNode.removeChild(tag);
      });
      this.tags = [];
      this.sheet = null;
      this.ctr = 0;
    } else {
      // Simpler on server
      this.sheet.cssRules = [];
    }

    this.injected = false;
  },
  rules: function rules() {
    if (!isBrowser) {
      return this.sheet.cssRules;
    }

    var arr = [];
    this.tags.forEach(function (tag) {
      return arr.splice.apply(arr, [arr.length, 0].concat(_toConsumableArray(sheetForTag(tag).cssRules)));
    });
    return arr;
  }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlscy9zdHlsZS1zaGVldC5qcyJdLCJuYW1lcyI6WyJpc0Jyb3dzZXIiLCJ3aW5kb3ciLCJpc0RldiIsInByb2Nlc3MiLCJlbnYiLCJOT0RFX0VOViIsImlzVGVzdCIsImxhc3QiLCJhcnIiLCJsZW5ndGgiLCJzaGVldEZvclRhZyIsInRhZyIsInNoZWV0IiwiaSIsImRvY3VtZW50Iiwic3R5bGVTaGVldHMiLCJvd25lck5vZGUiLCJtYWtlU3R5bGVUYWciLCJjcmVhdGVFbGVtZW50IiwidHlwZSIsInNldEF0dHJpYnV0ZSIsImFwcGVuZENoaWxkIiwiY3JlYXRlVGV4dE5vZGUiLCJoZWFkIiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJTdHlsZVNoZWV0Iiwic3BlZWR5IiwibWF4TGVuZ3RoIiwiaXNTcGVlZHkiLCJ1bmRlZmluZWQiLCJ0YWdzIiwiY3RyIiwiT2JqZWN0IiwiYXNzaWduIiwicHJvdG90eXBlIiwiZ2V0U2hlZXQiLCJpbmplY3QiLCJpbmplY3RlZCIsIkVycm9yIiwiY3NzUnVsZXMiLCJpbnNlcnRSdWxlIiwicnVsZSIsInB1c2giLCJjc3NUZXh0IiwiYm9vbCIsIkJvb2xlYW4iLCJfaW5zZXJ0IiwiaW5zZXJ0IiwiZGVsZXRlIiwiaW5kZXgiLCJyZXBsYWNlIiwiZmx1c2giLCJmb3JFYWNoIiwicGFyZW50Tm9kZSIsInJlbW92ZUNoaWxkIiwicnVsZXMiLCJzcGxpY2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQSxJQUFNQSxTQUFTLEdBQUcsT0FBT0MsTUFBUCxLQUFrQixXQUFwQztBQUNBLElBQU1DLEtBQUssR0FBR0MsT0FBTyxDQUFDQyxHQUFSLENBQVlDLFFBQVosS0FBeUIsYUFBekIsSUFBMEMsQ0FBQ0YsT0FBTyxDQUFDQyxHQUFSLENBQVlDLFFBQXJFO0FBQ0EsSUFBTUMsTUFBTSxHQUFHSCxPQUFPLENBQUNDLEdBQVIsQ0FBWUMsUUFBWixLQUF5QixNQUF4Qzs7QUFFQSxTQUFTRSxJQUFULENBQWNDLEdBQWQsRUFBbUI7QUFDakIsU0FBT0EsR0FBRyxDQUFDQSxHQUFHLENBQUNDLE1BQUosR0FBYSxDQUFkLENBQVY7QUFDRDs7QUFFRCxTQUFTQyxXQUFULENBQXFCQyxHQUFyQixFQUEwQjtBQUN4QixNQUFJQSxHQUFHLENBQUNDLEtBQVIsRUFBZTtBQUNiLFdBQU9ELEdBQUcsQ0FBQ0MsS0FBWDtBQUNELEdBSHVCLENBS3hCOzs7QUFDQSxPQUFLLElBQUlDLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUdDLFFBQVEsQ0FBQ0MsV0FBVCxDQUFxQk4sTUFBekMsRUFBaURJLENBQUMsSUFBSSxDQUF0RCxFQUF5RDtBQUN2RCxRQUFJQyxRQUFRLENBQUNDLFdBQVQsQ0FBcUJGLENBQXJCLEVBQXdCRyxTQUF4QixLQUFzQ0wsR0FBMUMsRUFBK0M7QUFDN0MsYUFBT0csUUFBUSxDQUFDQyxXQUFULENBQXFCRixDQUFyQixDQUFQO0FBQ0Q7QUFDRjtBQUNGOztBQUVELFNBQVNJLFlBQVQsR0FBd0I7QUFDdEIsTUFBTU4sR0FBRyxHQUFHRyxRQUFRLENBQUNJLGFBQVQsQ0FBdUIsT0FBdkIsQ0FBWjtBQUNBUCxFQUFBQSxHQUFHLENBQUNRLElBQUosR0FBVyxVQUFYO0FBQ0FSLEVBQUFBLEdBQUcsQ0FBQ1MsWUFBSixDQUFpQixhQUFqQixFQUFnQyxFQUFoQztBQUNBVCxFQUFBQSxHQUFHLENBQUNVLFdBQUosQ0FBZ0JQLFFBQVEsQ0FBQ1EsY0FBVCxDQUF3QixFQUF4QixDQUFoQjtBQUNDLEdBQUNSLFFBQVEsQ0FBQ1MsSUFBVCxJQUFpQlQsUUFBUSxDQUFDVSxvQkFBVCxDQUE4QixNQUE5QixFQUFzQyxDQUF0QyxDQUFsQixFQUE0REgsV0FBNUQsQ0FBd0VWLEdBQXhFO0FBQ0QsU0FBT0EsR0FBUDtBQUNEOztBQUVjLFNBQVNjLFVBQVQsR0FHUDtBQUFBLGlGQUFKLEVBQUk7QUFBQSx5QkFGTkMsTUFFTTtBQUFBLE1BRk5BLE1BRU0sNEJBRkcsQ0FBQ3hCLEtBQUQsSUFBVSxDQUFDSSxNQUVkO0FBQUEsNEJBRE5xQixTQUNNO0FBQUEsTUFETkEsU0FDTSwrQkFETSxLQUNOOztBQUNOLE9BQUtDLFFBQUwsR0FBZ0JGLE1BQWhCLENBRE0sQ0FDaUI7O0FBQ3ZCLE9BQUtkLEtBQUwsR0FBYWlCLFNBQWI7QUFDQSxPQUFLQyxJQUFMLEdBQVksRUFBWjtBQUNBLE9BQUtILFNBQUwsR0FBaUJBLFNBQWpCO0FBQ0EsT0FBS0ksR0FBTCxHQUFXLENBQVg7QUFDRDs7QUFFREMsTUFBTSxDQUFDQyxNQUFQLENBQWNSLFVBQVUsQ0FBQ1MsU0FBekIsRUFBb0M7QUFDbENDLEVBQUFBLFFBRGtDLHNCQUN2QjtBQUNULFdBQU96QixXQUFXLENBQUNILElBQUksQ0FBQyxLQUFLdUIsSUFBTixDQUFMLENBQWxCO0FBQ0QsR0FIaUM7QUFJbENNLEVBQUFBLE1BSmtDLG9CQUl6QjtBQUFBOztBQUNQLFFBQUksS0FBS0MsUUFBVCxFQUFtQjtBQUNqQixZQUFNLElBQUlDLEtBQUosQ0FBVSx1Q0FBVixDQUFOO0FBQ0Q7O0FBQ0QsUUFBSXRDLFNBQUosRUFBZTtBQUNiLFdBQUs4QixJQUFMLENBQVUsQ0FBVixJQUFlYixZQUFZLEVBQTNCO0FBQ0QsS0FGRCxNQUVPO0FBQ0w7QUFDQSxXQUFLTCxLQUFMLEdBQWE7QUFDWDJCLFFBQUFBLFFBQVEsRUFBRSxFQURDO0FBRVhDLFFBQUFBLFVBQVUsRUFBRSxvQkFBQUMsSUFBSSxFQUFJO0FBQ2xCO0FBQ0E7QUFDQSxVQUFBLEtBQUksQ0FBQzdCLEtBQUwsQ0FBVzJCLFFBQVgsQ0FBb0JHLElBQXBCLENBQXlCO0FBQUNDLFlBQUFBLE9BQU8sRUFBRUY7QUFBVixXQUF6QjtBQUNEO0FBTlUsT0FBYjtBQVFEOztBQUNELFNBQUtKLFFBQUwsR0FBZ0IsSUFBaEI7QUFDRCxHQXRCaUM7QUF1QmxDWCxFQUFBQSxNQXZCa0Msa0JBdUIzQmtCLElBdkIyQixFQXVCckI7QUFDWCxRQUFJLEtBQUtiLEdBQUwsS0FBYSxDQUFqQixFQUFvQjtBQUNsQixZQUFNLElBQUlPLEtBQUosc0dBQzBGTSxJQUQxRixrRUFDc0pBLElBRHRKLE9BQU47QUFHRDs7QUFDRCxTQUFLaEIsUUFBTCxHQUFnQmlCLE9BQU8sQ0FBQ0QsSUFBRCxDQUF2QjtBQUNELEdBOUJpQztBQStCbENFLEVBQUFBLE9BL0JrQyxtQkErQjFCTCxJQS9CMEIsRUErQnBCO0FBQ1o7QUFDQSxRQUFNN0IsS0FBSyxHQUFHLEtBQUt1QixRQUFMLEVBQWQ7QUFDQXZCLElBQUFBLEtBQUssQ0FBQzRCLFVBQU4sQ0FBaUJDLElBQWpCLEVBQXVCN0IsS0FBSyxDQUFDMkIsUUFBTixDQUFlOUIsTUFBdEM7QUFDRCxHQW5DaUM7QUFvQ2xDc0MsRUFBQUEsTUFwQ2tDLGtCQW9DM0JOLElBcEMyQixFQW9DckI7QUFDWCxRQUFJekMsU0FBSixFQUFlO0FBQ2I7QUFDQSxVQUFJLEtBQUs0QixRQUFMLElBQWlCLEtBQUtPLFFBQUwsR0FBZ0JLLFVBQXJDLEVBQWlEO0FBQy9DLGFBQUtNLE9BQUwsQ0FBYUwsSUFBYjtBQUNELE9BRkQsTUFFTztBQUNMbEMsUUFBQUEsSUFBSSxDQUFDLEtBQUt1QixJQUFOLENBQUosQ0FBZ0JULFdBQWhCLENBQTRCUCxRQUFRLENBQUNRLGNBQVQsQ0FBd0JtQixJQUF4QixDQUE1QjtBQUNEO0FBQ0YsS0FQRCxNQU9PO0FBQ0w7QUFDQSxXQUFLN0IsS0FBTCxDQUFXNEIsVUFBWCxDQUFzQkMsSUFBdEIsRUFBNEIsS0FBSzdCLEtBQUwsQ0FBVzJCLFFBQVgsQ0FBb0I5QixNQUFoRDtBQUNEOztBQUVELFNBQUtzQixHQUFMLElBQVksQ0FBWjs7QUFDQSxRQUFJL0IsU0FBUyxJQUFJLEtBQUsrQixHQUFMLEdBQVcsS0FBS0osU0FBaEIsS0FBOEIsQ0FBL0MsRUFBa0Q7QUFDaEQsV0FBS0csSUFBTCxDQUFVWSxJQUFWLENBQWV6QixZQUFZLEVBQTNCO0FBQ0Q7O0FBQ0QsV0FBTyxLQUFLYyxHQUFMLEdBQVcsQ0FBbEI7QUFDRCxHQXREaUM7QUF1RGxDaUIsRUFBQUEsTUF2RGtDLG1CQXVEM0JDLEtBdkQyQixFQXVEcEI7QUFDWjtBQUNBLFdBQU8sS0FBS0MsT0FBTCxDQUFhRCxLQUFiLEVBQW9CLEVBQXBCLENBQVA7QUFDRCxHQTFEaUM7QUEyRGxDRSxFQUFBQSxLQTNEa0MsbUJBMkQxQjtBQUNOLFFBQUluRCxTQUFKLEVBQWU7QUFDYixXQUFLOEIsSUFBTCxDQUFVc0IsT0FBVixDQUFrQixVQUFBekMsR0FBRztBQUFBLGVBQUlBLEdBQUcsQ0FBQzBDLFVBQUosQ0FBZUMsV0FBZixDQUEyQjNDLEdBQTNCLENBQUo7QUFBQSxPQUFyQjtBQUNBLFdBQUttQixJQUFMLEdBQVksRUFBWjtBQUNBLFdBQUtsQixLQUFMLEdBQWEsSUFBYjtBQUNBLFdBQUttQixHQUFMLEdBQVcsQ0FBWDtBQUNELEtBTEQsTUFLTztBQUNMO0FBQ0EsV0FBS25CLEtBQUwsQ0FBVzJCLFFBQVgsR0FBc0IsRUFBdEI7QUFDRDs7QUFDRCxTQUFLRixRQUFMLEdBQWdCLEtBQWhCO0FBQ0QsR0F0RWlDO0FBdUVsQ2tCLEVBQUFBLEtBdkVrQyxtQkF1RTFCO0FBQ04sUUFBSSxDQUFDdkQsU0FBTCxFQUFnQjtBQUNkLGFBQU8sS0FBS1ksS0FBTCxDQUFXMkIsUUFBbEI7QUFDRDs7QUFDRCxRQUFNL0IsR0FBRyxHQUFHLEVBQVo7QUFDQSxTQUFLc0IsSUFBTCxDQUFVc0IsT0FBVixDQUFrQixVQUFBekMsR0FBRztBQUFBLGFBQ25CSCxHQUFHLENBQUNnRCxNQUFKLE9BQUFoRCxHQUFHLEdBQVFBLEdBQUcsQ0FBQ0MsTUFBWixFQUFvQixDQUFwQiw0QkFBOEJDLFdBQVcsQ0FBQ0MsR0FBRCxDQUFYLENBQWlCNEIsUUFBL0MsR0FEZ0I7QUFBQSxLQUFyQjtBQUdBLFdBQU8vQixHQUFQO0FBQ0Q7QUFoRmlDLENBQXBDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhpcyBmaWxlIGlzIGJhc2VkIG9mZiBnbGFtb3IncyBTdHlsZVNoZWV0XG4vLyBodHRwczovL2dpdGh1Yi5jb20vdGhyZWVwb2ludG9uZS9nbGFtb3IvYmxvYi92Mi4yMC40MC9zcmMvc2hlZXQuanNcbmNvbnN0IGlzQnJvd3NlciA9IHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnXG5jb25zdCBpc0RldiA9IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnIHx8ICFwcm9jZXNzLmVudi5OT0RFX0VOVlxuY29uc3QgaXNUZXN0ID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICd0ZXN0J1xuXG5mdW5jdGlvbiBsYXN0KGFycikge1xuICByZXR1cm4gYXJyW2Fyci5sZW5ndGggLSAxXVxufVxuXG5mdW5jdGlvbiBzaGVldEZvclRhZyh0YWcpIHtcbiAgaWYgKHRhZy5zaGVldCkge1xuICAgIHJldHVybiB0YWcuc2hlZXRcbiAgfVxuXG4gIC8vIFRoaXMgd2VpcmRuZXNzIGJyb3VnaHQgdG8geW91IGJ5IGZpcmVmb3hcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBkb2N1bWVudC5zdHlsZVNoZWV0cy5sZW5ndGg7IGkgKz0gMSkge1xuICAgIGlmIChkb2N1bWVudC5zdHlsZVNoZWV0c1tpXS5vd25lck5vZGUgPT09IHRhZykge1xuICAgICAgcmV0dXJuIGRvY3VtZW50LnN0eWxlU2hlZXRzW2ldXG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIG1ha2VTdHlsZVRhZygpIHtcbiAgY29uc3QgdGFnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKVxuICB0YWcudHlwZSA9ICd0ZXh0L2NzcydcbiAgdGFnLnNldEF0dHJpYnV0ZSgnZGF0YS11aS1ib3gnLCAnJylcbiAgdGFnLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKCcnKSlcbiAgOyhkb2N1bWVudC5oZWFkIHx8IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdoZWFkJylbMF0pLmFwcGVuZENoaWxkKHRhZylcbiAgcmV0dXJuIHRhZ1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTdHlsZVNoZWV0KHtcbiAgc3BlZWR5ID0gIWlzRGV2ICYmICFpc1Rlc3QsXG4gIG1heExlbmd0aCA9IDY1MDAwXG59ID0ge30pIHtcbiAgdGhpcy5pc1NwZWVkeSA9IHNwZWVkeSAvLyBUaGUgYmlnIGRyYXdiYWNrIGhlcmUgaXMgdGhhdCB0aGUgY3NzIHdvbid0IGJlIGVkaXRhYmxlIGluIGRldnRvb2xzXG4gIHRoaXMuc2hlZXQgPSB1bmRlZmluZWRcbiAgdGhpcy50YWdzID0gW11cbiAgdGhpcy5tYXhMZW5ndGggPSBtYXhMZW5ndGhcbiAgdGhpcy5jdHIgPSAwXG59XG5cbk9iamVjdC5hc3NpZ24oU3R5bGVTaGVldC5wcm90b3R5cGUsIHtcbiAgZ2V0U2hlZXQoKSB7XG4gICAgcmV0dXJuIHNoZWV0Rm9yVGFnKGxhc3QodGhpcy50YWdzKSlcbiAgfSxcbiAgaW5qZWN0KCkge1xuICAgIGlmICh0aGlzLmluamVjdGVkKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1N0eWxlU2hlZXQgaGFzIGFscmVhZHkgYmVlbiBpbmplY3RlZC4nKVxuICAgIH1cbiAgICBpZiAoaXNCcm93c2VyKSB7XG4gICAgICB0aGlzLnRhZ3NbMF0gPSBtYWtlU3R5bGVUYWcoKVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBTZXJ2ZXIgc2lkZSAncG9seWZpbGwnLiBqdXN0IGVub3VnaCBiZWhhdmlvciB0byBiZSB1c2VmdWwuXG4gICAgICB0aGlzLnNoZWV0ID0ge1xuICAgICAgICBjc3NSdWxlczogW10sXG4gICAgICAgIGluc2VydFJ1bGU6IHJ1bGUgPT4ge1xuICAgICAgICAgIC8vIEVub3VnaCAnc3BlYyBjb21wbGlhbmNlJyB0byBiZSBhYmxlIHRvIGV4dHJhY3QgdGhlIHJ1bGVzIGxhdGVyXG4gICAgICAgICAgLy8gaW4gb3RoZXIgd29yZHMsIGp1c3QgdGhlIGNzc1RleHQgZmllbGRcbiAgICAgICAgICB0aGlzLnNoZWV0LmNzc1J1bGVzLnB1c2goe2Nzc1RleHQ6IHJ1bGV9KVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuaW5qZWN0ZWQgPSB0cnVlXG4gIH0sXG4gIHNwZWVkeShib29sKSB7XG4gICAgaWYgKHRoaXMuY3RyICE9PSAwKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgIGBTdHlsZVNoZWV0IGNhbm5vdCBjaGFuZ2Ugc3BlZWR5IG1vZGUgYWZ0ZXIgaW5zZXJ0aW5nIGFueSBydWxlIHRvIHNoZWV0LiBFaXRoZXIgY2FsbCBzcGVlZHkoJHtib29sfSkgZWFybGllciBpbiB5b3VyIGFwcCwgb3IgY2FsbCBmbHVzaCgpIGJlZm9yZSBzcGVlZHkoJHtib29sfSlgXG4gICAgICApXG4gICAgfVxuICAgIHRoaXMuaXNTcGVlZHkgPSBCb29sZWFuKGJvb2wpXG4gIH0sXG4gIF9pbnNlcnQocnVsZSkge1xuICAgIC8vIFRoaXMgd2VpcmRuZXNzIGZvciBwZXJmXG4gICAgY29uc3Qgc2hlZXQgPSB0aGlzLmdldFNoZWV0KClcbiAgICBzaGVldC5pbnNlcnRSdWxlKHJ1bGUsIHNoZWV0LmNzc1J1bGVzLmxlbmd0aClcbiAgfSxcbiAgaW5zZXJ0KHJ1bGUpIHtcbiAgICBpZiAoaXNCcm93c2VyKSB7XG4gICAgICAvLyBUaGlzIGlzIHRoZSB1bHRyYWZhc3QgdmVyc2lvbiwgd29ya3MgYWNyb3NzIGJyb3dzZXJzXG4gICAgICBpZiAodGhpcy5pc1NwZWVkeSAmJiB0aGlzLmdldFNoZWV0KCkuaW5zZXJ0UnVsZSkge1xuICAgICAgICB0aGlzLl9pbnNlcnQocnVsZSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGxhc3QodGhpcy50YWdzKS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShydWxlKSlcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gU2VydmVyIHNpZGUgaXMgcHJldHR5IHNpbXBsZVxuICAgICAgdGhpcy5zaGVldC5pbnNlcnRSdWxlKHJ1bGUsIHRoaXMuc2hlZXQuY3NzUnVsZXMubGVuZ3RoKVxuICAgIH1cblxuICAgIHRoaXMuY3RyICs9IDFcbiAgICBpZiAoaXNCcm93c2VyICYmIHRoaXMuY3RyICUgdGhpcy5tYXhMZW5ndGggPT09IDApIHtcbiAgICAgIHRoaXMudGFncy5wdXNoKG1ha2VTdHlsZVRhZygpKVxuICAgIH1cbiAgICByZXR1cm4gdGhpcy5jdHIgLSAxXG4gIH0sXG4gIGRlbGV0ZShpbmRleCkge1xuICAgIC8vIFdlIGluc2VydCBhIGJsYW5rIHJ1bGUgd2hlbiAnZGVsZXRpbmcnIHNvIHByZXZpb3VzbHkgcmV0dXJuZWQgaW5kZXhlcyByZW1haW4gc3RhYmxlXG4gICAgcmV0dXJuIHRoaXMucmVwbGFjZShpbmRleCwgJycpXG4gIH0sXG4gIGZsdXNoKCkge1xuICAgIGlmIChpc0Jyb3dzZXIpIHtcbiAgICAgIHRoaXMudGFncy5mb3JFYWNoKHRhZyA9PiB0YWcucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0YWcpKVxuICAgICAgdGhpcy50YWdzID0gW11cbiAgICAgIHRoaXMuc2hlZXQgPSBudWxsXG4gICAgICB0aGlzLmN0ciA9IDBcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gU2ltcGxlciBvbiBzZXJ2ZXJcbiAgICAgIHRoaXMuc2hlZXQuY3NzUnVsZXMgPSBbXVxuICAgIH1cbiAgICB0aGlzLmluamVjdGVkID0gZmFsc2VcbiAgfSxcbiAgcnVsZXMoKSB7XG4gICAgaWYgKCFpc0Jyb3dzZXIpIHtcbiAgICAgIHJldHVybiB0aGlzLnNoZWV0LmNzc1J1bGVzXG4gICAgfVxuICAgIGNvbnN0IGFyciA9IFtdXG4gICAgdGhpcy50YWdzLmZvckVhY2godGFnID0+XG4gICAgICBhcnIuc3BsaWNlKGFyci5sZW5ndGgsIDAsIC4uLlsuLi5zaGVldEZvclRhZyh0YWcpLmNzc1J1bGVzXSlcbiAgICApXG4gICAgcmV0dXJuIGFyclxuICB9XG59KVxuIl19