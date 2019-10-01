import React from 'react';
import PropTypes from "prop-types";
import "./Price.css";
const rootClass = 'price';

const Price = props => {
  const {
    children,
    isBold
  } = props;
  const isBoldClass = isBold ? 'bold' : '';
  return React.createElement("div", {
    className: `${rootClass} ${isBoldClass}`
  }, children);
};

Price.propTypes = {
  isBold: PropTypes.bool // instanceRef: PropTypes.func,
  // className: PropTypes.string, ??
  // style: PropTypes.object, ??
  // size: PropTypes.oneOf(["s", "m", "l", "xl", "xxl"]),
  // colorTheme: PropTypes.oneOf(["primary", "ghost-orange", "ghost-gray"]),
  // icon: PropTypes.node,
  // isDisabled: PropTypes.bool,
  // isFoolWith: PropTypes.bool

}; // className	string	-
// price	other	-	0
// oldPrice	other	-	0
// clubPrice	other	-	0
// colorTheme	other	-	primary
// size	other	-	m
// isBold	bool	-	false
// direction	other	-	row

export default Price;