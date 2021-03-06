"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = splitProps;

/**
 * Utility to split props based on an array of keys
 */
function splitProps(props, keys) {
  var matchedProps = {};
  var remainingProps = {};
  var propKeys = Object.keys(props);

  for (var i = 0; i < propKeys.length; i++) {
    var propKey = propKeys[i];
    var propValue = props[propKey];

    if (keys.includes(propKey)) {
      matchedProps[propKey] = propValue;
    } else {
      remainingProps[propKey] = propValue;
    }
  }

  return {
    matchedProps: matchedProps,
    remainingProps: remainingProps
  };
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlscy9zcGxpdC1wcm9wcy5qcyJdLCJuYW1lcyI6WyJzcGxpdFByb3BzIiwicHJvcHMiLCJrZXlzIiwibWF0Y2hlZFByb3BzIiwicmVtYWluaW5nUHJvcHMiLCJwcm9wS2V5cyIsIk9iamVjdCIsImkiLCJsZW5ndGgiLCJwcm9wS2V5IiwicHJvcFZhbHVlIiwiaW5jbHVkZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7O0FBR2UsU0FBU0EsVUFBVCxDQUFvQkMsS0FBcEIsRUFBMkJDLElBQTNCLEVBQWlDO0FBQzlDLE1BQU1DLFlBQVksR0FBRyxFQUFyQjtBQUNBLE1BQU1DLGNBQWMsR0FBRyxFQUF2QjtBQUNBLE1BQU1DLFFBQVEsR0FBR0MsTUFBTSxDQUFDSixJQUFQLENBQVlELEtBQVosQ0FBakI7O0FBRUEsT0FBSyxJQUFJTSxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHRixRQUFRLENBQUNHLE1BQTdCLEVBQXFDRCxDQUFDLEVBQXRDLEVBQTBDO0FBQ3hDLFFBQU1FLE9BQU8sR0FBR0osUUFBUSxDQUFDRSxDQUFELENBQXhCO0FBQ0EsUUFBTUcsU0FBUyxHQUFHVCxLQUFLLENBQUNRLE9BQUQsQ0FBdkI7O0FBRUEsUUFBSVAsSUFBSSxDQUFDUyxRQUFMLENBQWNGLE9BQWQsQ0FBSixFQUE0QjtBQUMxQk4sTUFBQUEsWUFBWSxDQUFDTSxPQUFELENBQVosR0FBd0JDLFNBQXhCO0FBQ0QsS0FGRCxNQUVPO0FBQ0xOLE1BQUFBLGNBQWMsQ0FBQ0ssT0FBRCxDQUFkLEdBQTBCQyxTQUExQjtBQUNEO0FBQ0Y7O0FBRUQsU0FBTztBQUFDUCxJQUFBQSxZQUFZLEVBQVpBLFlBQUQ7QUFBZUMsSUFBQUEsY0FBYyxFQUFkQTtBQUFmLEdBQVA7QUFDRCIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogVXRpbGl0eSB0byBzcGxpdCBwcm9wcyBiYXNlZCBvbiBhbiBhcnJheSBvZiBrZXlzXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHNwbGl0UHJvcHMocHJvcHMsIGtleXMpIHtcbiAgY29uc3QgbWF0Y2hlZFByb3BzID0ge31cbiAgY29uc3QgcmVtYWluaW5nUHJvcHMgPSB7fVxuICBjb25zdCBwcm9wS2V5cyA9IE9iamVjdC5rZXlzKHByb3BzKVxuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgcHJvcEtleXMubGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCBwcm9wS2V5ID0gcHJvcEtleXNbaV1cbiAgICBjb25zdCBwcm9wVmFsdWUgPSBwcm9wc1twcm9wS2V5XVxuXG4gICAgaWYgKGtleXMuaW5jbHVkZXMocHJvcEtleSkpIHtcbiAgICAgIG1hdGNoZWRQcm9wc1twcm9wS2V5XSA9IHByb3BWYWx1ZVxuICAgIH0gZWxzZSB7XG4gICAgICByZW1haW5pbmdQcm9wc1twcm9wS2V5XSA9IHByb3BWYWx1ZVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7bWF0Y2hlZFByb3BzLCByZW1haW5pbmdQcm9wc31cbn1cbiJdfQ==