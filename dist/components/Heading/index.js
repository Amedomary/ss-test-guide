"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

require("./style.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Heading = function Heading() {
  return _react["default"].createElement("h1", {
    className: "title"
  }, "Heading");
};

var _default = Heading;
exports["default"] = _default;