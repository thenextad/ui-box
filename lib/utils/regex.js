"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.unsafeClassNameCharacters = exports.spacesOutsideParentheses = void 0;
var spacesOutsideParentheses = / (?=([^()]*\([^()]*\))*[^()]*$)/g;
exports.spacesOutsideParentheses = spacesOutsideParentheses;
var unsafeClassNameCharacters = /[^_a-zA-Z0-9-]/g;
exports.unsafeClassNameCharacters = unsafeClassNameCharacters;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlscy9yZWdleC5qcyJdLCJuYW1lcyI6WyJzcGFjZXNPdXRzaWRlUGFyZW50aGVzZXMiLCJ1bnNhZmVDbGFzc05hbWVDaGFyYWN0ZXJzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBTyxJQUFNQSx3QkFBd0IsR0FBRyxrQ0FBakM7O0FBQ0EsSUFBTUMseUJBQXlCLEdBQUcsaUJBQWxDIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IHNwYWNlc091dHNpZGVQYXJlbnRoZXNlcyA9IC8gKD89KFteKCldKlxcKFteKCldKlxcKSkqW14oKV0qJCkvZ1xuZXhwb3J0IGNvbnN0IHVuc2FmZUNsYXNzTmFtZUNoYXJhY3RlcnMgPSAvW15fYS16QS1aMC05LV0vZ1xuIl19