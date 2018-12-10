"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = decamelize;
// Fork of https://github.com/sindresorhus/decamelize because it contains ES6 code
// and css properties don't contain unicode
var separator = '-';
var regex1 = /([a-z\d])([A-Z])/g;
var regex2 = /([a-z]+)([A-Z][a-z\d]+)/g;

function decamelize(text) {
  return text.replace(regex1, "$1".concat(separator, "$2")).replace(regex2, "$1".concat(separator, "$2")).toLowerCase();
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlscy9kZWNhbWVsaXplLmpzIl0sIm5hbWVzIjpbInNlcGFyYXRvciIsInJlZ2V4MSIsInJlZ2V4MiIsImRlY2FtZWxpemUiLCJ0ZXh0IiwicmVwbGFjZSIsInRvTG93ZXJDYXNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQUNBO0FBQ0EsSUFBTUEsU0FBUyxHQUFHLEdBQWxCO0FBQ0EsSUFBTUMsTUFBTSxHQUFHLG1CQUFmO0FBQ0EsSUFBTUMsTUFBTSxHQUFHLDBCQUFmOztBQUVlLFNBQVNDLFVBQVQsQ0FBb0JDLElBQXBCLEVBQTBCO0FBQ3ZDLFNBQU9BLElBQUksQ0FDUkMsT0FESSxDQUNJSixNQURKLGNBQ2lCRCxTQURqQixTQUVKSyxPQUZJLENBRUlILE1BRkosY0FFaUJGLFNBRmpCLFNBR0pNLFdBSEksRUFBUDtBQUlEIiwic291cmNlc0NvbnRlbnQiOlsiLy8gRm9yayBvZiBodHRwczovL2dpdGh1Yi5jb20vc2luZHJlc29yaHVzL2RlY2FtZWxpemUgYmVjYXVzZSBpdCBjb250YWlucyBFUzYgY29kZVxuLy8gYW5kIGNzcyBwcm9wZXJ0aWVzIGRvbid0IGNvbnRhaW4gdW5pY29kZVxuY29uc3Qgc2VwYXJhdG9yID0gJy0nXG5jb25zdCByZWdleDEgPSAvKFthLXpcXGRdKShbQS1aXSkvZ1xuY29uc3QgcmVnZXgyID0gLyhbYS16XSspKFtBLVpdW2EtelxcZF0rKS9nXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGRlY2FtZWxpemUodGV4dCkge1xuICByZXR1cm4gdGV4dFxuICAgIC5yZXBsYWNlKHJlZ2V4MSwgYCQxJHtzZXBhcmF0b3J9JDJgKVxuICAgIC5yZXBsYWNlKHJlZ2V4MiwgYCQxJHtzZXBhcmF0b3J9JDJgKVxuICAgIC50b0xvd2VyQ2FzZSgpXG59XG4iXX0=