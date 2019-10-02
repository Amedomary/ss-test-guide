import React from "react";
import PropTypes from "prop-types";
import "./NAME.css";
import cnBem from "../global/bem";
const bemClass = cnBem('NAME');

const NAME = props => {
  const {} = props;
  const rootClass = bemClass();
  return React.createElement("div", {
    className: rootClass
  }, "- 123 +");
};

NAME.propTypes = {};
NAME.defaultProps = {};
NAME.displayName = "NAME";
export default NAME;