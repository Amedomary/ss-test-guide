import React from 'react';
import Price from './index';
export default {
  title: 'Components|Price'
};
export const defaultExample = () => React.createElement("div", {
  className: "row-gap"
}, React.createElement(Price, null, " \u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u0430\u044F \u0446\u0435\u043D\u0430"), React.createElement(Price, {
  isBold: true
}, " 399 \u0440\u0443\u0431\u043B\u0435\u0439 isBold"));
defaultExample.story = {
  name: 'Default'
};