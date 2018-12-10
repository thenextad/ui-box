"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.hydrate = hydrate;
exports.extractStyles = extractStyles;
exports.clearStyles = clearStyles;
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function get() {
    return _box.default;
  }
});
Object.defineProperty(exports, "splitProps", {
  enumerable: true,
  get: function get() {
    return _splitProps.default;
  }
});
Object.defineProperty(exports, "splitBoxProps", {
  enumerable: true,
  get: function get() {
    return _splitBoxProps.default;
  }
});
Object.defineProperty(exports, "css", {
  enumerable: true,
  get: function get() {
    return _glamor.css;
  }
});
Object.defineProperty(exports, "background", {
  enumerable: true,
  get: function get() {
    return _enhancers.background;
  }
});
Object.defineProperty(exports, "borderRadius", {
  enumerable: true,
  get: function get() {
    return _enhancers.borderRadius;
  }
});
Object.defineProperty(exports, "borders", {
  enumerable: true,
  get: function get() {
    return _enhancers.borders;
  }
});
Object.defineProperty(exports, "boxShadow", {
  enumerable: true,
  get: function get() {
    return _enhancers.boxShadow;
  }
});
Object.defineProperty(exports, "dimensions", {
  enumerable: true,
  get: function get() {
    return _enhancers.dimensions;
  }
});
Object.defineProperty(exports, "flex", {
  enumerable: true,
  get: function get() {
    return _enhancers.flex;
  }
});
Object.defineProperty(exports, "interaction", {
  enumerable: true,
  get: function get() {
    return _enhancers.interaction;
  }
});
Object.defineProperty(exports, "layout", {
  enumerable: true,
  get: function get() {
    return _enhancers.layout;
  }
});
Object.defineProperty(exports, "list", {
  enumerable: true,
  get: function get() {
    return _enhancers.list;
  }
});
Object.defineProperty(exports, "opacity", {
  enumerable: true,
  get: function get() {
    return _enhancers.opacity;
  }
});
Object.defineProperty(exports, "overflow", {
  enumerable: true,
  get: function get() {
    return _enhancers.overflow;
  }
});
Object.defineProperty(exports, "position", {
  enumerable: true,
  get: function get() {
    return _enhancers.position;
  }
});
Object.defineProperty(exports, "spacing", {
  enumerable: true,
  get: function get() {
    return _enhancers.spacing;
  }
});
Object.defineProperty(exports, "text", {
  enumerable: true,
  get: function get() {
    return _enhancers.text;
  }
});
Object.defineProperty(exports, "transform", {
  enumerable: true,
  get: function get() {
    return _enhancers.transform;
  }
});
Object.defineProperty(exports, "propTypes", {
  enumerable: true,
  get: function get() {
    return _enhancers.propTypes;
  }
});
Object.defineProperty(exports, "propNames", {
  enumerable: true,
  get: function get() {
    return _enhancers.propNames;
  }
});
Object.defineProperty(exports, "propAliases", {
  enumerable: true,
  get: function get() {
    return _enhancers.propAliases;
  }
});
Object.defineProperty(exports, "propEnhancers", {
  enumerable: true,
  get: function get() {
    return _enhancers.propEnhancers;
  }
});

var cache = _interopRequireWildcard(require("./cache"));

var styles = _interopRequireWildcard(require("./styles"));

var _box = _interopRequireDefault(require("./box"));

var _splitProps = _interopRequireDefault(require("./utils/split-props"));

var _splitBoxProps = _interopRequireDefault(require("./utils/split-box-props"));

var _glamor = require("glamor");

var _enhancers = require("./enhancers");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function hydrate(entries) {
  cache.hydrate(entries);
}

function extractStyles() {
  var output = {
    cache: cache.entries(),
    styles: styles.getAll()
  };
  clearStyles();
  return output;
}

function clearStyles() {
  cache.clear();
  styles.clear();
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJoeWRyYXRlIiwiZW50cmllcyIsImNhY2hlIiwiZXh0cmFjdFN0eWxlcyIsIm91dHB1dCIsInN0eWxlcyIsImdldEFsbCIsImNsZWFyU3R5bGVzIiwiY2xlYXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUVBOztBQUNBOztBQUNBOztBQUVBOztBQUNBOzs7Ozs7QUFzQk8sU0FBU0EsT0FBVCxDQUFpQkMsT0FBakIsRUFBMEI7QUFDL0JDLEVBQUFBLEtBQUssQ0FBQ0YsT0FBTixDQUFjQyxPQUFkO0FBQ0Q7O0FBRU0sU0FBU0UsYUFBVCxHQUF5QjtBQUM5QixNQUFNQyxNQUFNLEdBQUc7QUFDYkYsSUFBQUEsS0FBSyxFQUFFQSxLQUFLLENBQUNELE9BQU4sRUFETTtBQUViSSxJQUFBQSxNQUFNLEVBQUVBLE1BQU0sQ0FBQ0MsTUFBUDtBQUZLLEdBQWY7QUFJQUMsRUFBQUEsV0FBVztBQUNYLFNBQU9ILE1BQVA7QUFDRDs7QUFFTSxTQUFTRyxXQUFULEdBQXVCO0FBQzVCTCxFQUFBQSxLQUFLLENBQUNNLEtBQU47QUFDQUgsRUFBQUEsTUFBTSxDQUFDRyxLQUFQO0FBQ0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBjYWNoZSBmcm9tICcuL2NhY2hlJ1xuaW1wb3J0ICogYXMgc3R5bGVzIGZyb20gJy4vc3R5bGVzJ1xuXG5leHBvcnQge2RlZmF1bHR9IGZyb20gJy4vYm94J1xuZXhwb3J0IHtkZWZhdWx0IGFzIHNwbGl0UHJvcHN9IGZyb20gJy4vdXRpbHMvc3BsaXQtcHJvcHMnXG5leHBvcnQge2RlZmF1bHQgYXMgc3BsaXRCb3hQcm9wc30gZnJvbSAnLi91dGlscy9zcGxpdC1ib3gtcHJvcHMnXG5cbmV4cG9ydCB7Y3NzfSBmcm9tICdnbGFtb3InXG5leHBvcnQge1xuICBiYWNrZ3JvdW5kLFxuICBib3JkZXJSYWRpdXMsXG4gIGJvcmRlcnMsXG4gIGJveFNoYWRvdyxcbiAgZGltZW5zaW9ucyxcbiAgZmxleCxcbiAgaW50ZXJhY3Rpb24sXG4gIGxheW91dCxcbiAgbGlzdCxcbiAgb3BhY2l0eSxcbiAgb3ZlcmZsb3csXG4gIHBvc2l0aW9uLFxuICBzcGFjaW5nLFxuICB0ZXh0LFxuICB0cmFuc2Zvcm0sXG4gIHByb3BUeXBlcyxcbiAgcHJvcE5hbWVzLFxuICBwcm9wQWxpYXNlcyxcbiAgcHJvcEVuaGFuY2Vyc1xufSBmcm9tICcuL2VuaGFuY2VycydcblxuZXhwb3J0IGZ1bmN0aW9uIGh5ZHJhdGUoZW50cmllcykge1xuICBjYWNoZS5oeWRyYXRlKGVudHJpZXMpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBleHRyYWN0U3R5bGVzKCkge1xuICBjb25zdCBvdXRwdXQgPSB7XG4gICAgY2FjaGU6IGNhY2hlLmVudHJpZXMoKSxcbiAgICBzdHlsZXM6IHN0eWxlcy5nZXRBbGwoKVxuICB9XG4gIGNsZWFyU3R5bGVzKClcbiAgcmV0dXJuIG91dHB1dFxufVxuXG5leHBvcnQgZnVuY3Rpb24gY2xlYXJTdHlsZXMoKSB7XG4gIGNhY2hlLmNsZWFyKClcbiAgc3R5bGVzLmNsZWFyKClcbn1cbiJdfQ==