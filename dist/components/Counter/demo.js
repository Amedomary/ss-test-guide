import React, { useState } from "react";
import PropTypes from "prop-types";
import cnBem from "../global/bem";
import { Counter } from "../index";
const bemClass = cnBem('Demo');

const Demo = props => {
  const [count, setCount] = useState(1);

  const updateCount = value => {
    setCount(value);
  };

  return React.createElement(Counter, {
    step: 2,
    minValue: 1,
    maxValue: 10,
    count: count,
    updateCount: updateCount
  });
};

Demo.displayName = "Demo";
export default Demo;