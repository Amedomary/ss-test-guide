import React from "react";
import PropTypes from "prop-types";
import "./Button.css";
import cnBem from "../global/bem";
const bemClass = cnBem('button');

const Button = props => {
  const {
    children,
    icon,
    size,
    colorTheme,
    isFoolWith,
    instanceRef,
    isDisabled
  } = props;
  const rootClass = bemClass({
    'size': size,
    'theme': colorTheme,
    'full-width': isFoolWith
  });
  const iconClass = bemClass('icon', {
    'with-text': !!children
  }); // const rootClass = 'button';
  // const iconClass = 'icon';

  return React.createElement("button", {
    className: rootClass,
    type: "button",
    ref: instanceRef,
    disabled: isDisabled
  }, icon && React.createElement("span", {
    className: iconClass
  }, " ", icon, " "), children);
};

Button.propTypes = {
  instanceRef: PropTypes.func,
  // className: PropTypes.string, ??
  // style: PropTypes.object, ??
  size: PropTypes.oneOf(["s", "m", "l", "xl", "xxl"]),
  colorTheme: PropTypes.oneOf(["primary", "ghost-orange", "ghost-gray"]),
  icon: PropTypes.node,
  isDisabled: PropTypes.bool,
  isFoolWith: PropTypes.bool
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
export default Button; // порядок свойств
// className
// children
// number, string
// array, object
// bool
// func