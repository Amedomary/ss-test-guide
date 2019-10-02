import React from "react";
import PropTypes from "prop-types";
import "./Counter.scss";
import cnBem from "../global/bem"

const bemClass = cnBem('counter');

const Counter = props => {
  const { } = props;
  const rootClass = bemClass();

  return (
    <div className={rootClass}>- 123 +</div>
  );
};

Counter.propTypes = {
};

Counter.defaultProps = {
};

Counter.displayName = "Counter";

export default Counter;
