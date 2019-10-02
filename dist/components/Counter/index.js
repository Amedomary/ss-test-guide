import React from "react";
import PropTypes from "prop-types";
import "./Counter.scss";
import cnBem from "../global/bem";
const bemClass = cnBem('counter');

const Counter = props => {
  const {} = props;
  const rootClass = bemClass();
  return React.createElement("div", {
    className: rootClass
  }, "- 123 +");
};

Counter.propTypes = {};
Counter.defaultProps = {};
Counter.displayName = "Counter";
export default Counter;