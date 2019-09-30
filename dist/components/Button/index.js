"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

require("./Button.scss");

var _bem = _interopRequireDefault(require("../global/bem"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var bemClass = (0, _bem["default"])('button');

var Button = function Button(props) {
  var children = props.children,
      icon = props.icon,
      size = props.size,
      colorTheme = props.colorTheme,
      isFoolWith = props.isFoolWith,
      instanceRef = props.instanceRef,
      isDisabled = props.isDisabled;
  var rootClass = bemClass({
    'size': size,
    'theme': colorTheme,
    'full-width': isFoolWith
  });
  var iconClass = bemClass('icon', {
    'with-text': !!children
  });
  return _react["default"].createElement("button", {
    className: rootClass,
    type: "button",
    ref: instanceRef,
    disabled: isDisabled
  }, icon && _react["default"].createElement("span", {
    className: iconClass
  }, " ", icon, " "), children);
};

Button.propTypes = {
  instanceRef: _propTypes["default"].func,
  // className: PropTypes.string, ??
  // style: PropTypes.object, ??
  size: _propTypes["default"].oneOf(["s", "m", "l", "xl", "xxl"]),
  colorTheme: _propTypes["default"].oneOf(["primary", "ghost-orange", "ghost-gray"]),
  icon: _propTypes["default"].node,
  isDisabled: _propTypes["default"].bool,
  isFoolWith: _propTypes["default"].bool
};
Button.defaultProps = {
  // className: PropTypes.string,
  size: "l",
  colorTheme: "primary",
  // style: PropTypes.object,
  // icon: PropTypes.node,
  // isDisabled: false, ??
  isFoolWith: false,
  isDisabled: false // instanceRef: PropTypes.func,

};
Button.displayName = "Button";
var _default = Button; // порядок свойств
// className
// children
// number, string
// array, object
// bool
// func

exports["default"] = _default;