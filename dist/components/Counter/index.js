import React, { useState } from "react";
import PropTypes from "prop-types";
import "./Counter.scss";
import cnBem from "../global/bem";
const bemClass = cnBem('counter');

const Counter = props => {
  const {
    count,
    updateCount,
    step,
    minValue,
    maxValue
  } = props;

  const checkValue = value => {
    value = Number(String(value).replace(/[\D]/gi, ''));

    if (value >= maxValue) {
      return maxValue;
    }

    if (value <= minValue) {
      return minValue;
    }

    return value;
  };

  const decrement = value => {
    return checkValue(value - step);
  };

  const increment = value => {
    return checkValue(value + step);
  };

  return React.createElement("div", {
    className: bemClass()
  }, React.createElement("button", {
    className: bemClass('button'),
    onClick: () => updateCount(prevCount => decrement(prevCount)),
    type: "button",
    disabled: count <= minValue
  }, "-"), React.createElement("input", {
    className: bemClass('input'),
    value: count,
    type: "text",
    name: "name",
    id: "id",
    onChange: event => updateCount(checkValue(event.target.value))
  }), React.createElement("button", {
    className: bemClass('button'),
    onClick: () => updateCount(prevCount => increment(prevCount)),
    type: "button",
    disabled: count >= maxValue
  }, "+"));
};

Counter.propTypes = {
  count: PropTypes.number,
  updateCount: PropTypes.func,
  step: PropTypes.number,
  minValue: PropTypes.number,
  maxValue: PropTypes.number
};
Counter.defaultProps = {
  count: 1
};
Counter.displayName = "Counter";
export default Counter;