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
    if (value >= maxValue) {
      console.log(maxValue);
      return maxValue;
    }

    if (value <= minValue) {
      return minValue;
    }
  };

  return React.createElement("div", {
    className: bemClass()
  }, React.createElement("button", {
    className: bemClass('button'),
    onClick: () => updateCount(prevCount => checkValue(prevCount - step)),
    type: "button",
    disabled: false
  }, "-"), React.createElement("input", {
    className: bemClass('input'),
    value: count,
    type: "text",
    name: "name",
    id: "id",
    onChange: event => updateCount(Number(event.target.value))
  }), React.createElement("button", {
    className: bemClass('button'),
    onClick: () => updateCount(prevCount => prevCount + step),
    type: "button",
    disabled: false
  }, "+"));
};

Counter.propTypes = {};
Counter.defaultProps = {};
Counter.displayName = "Counter";
export default Counter;