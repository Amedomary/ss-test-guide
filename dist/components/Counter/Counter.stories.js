import React from 'react';
import Counter from './index';
export default {
  title: 'Components|Counter'
};
export const defaultExample = () => React.createElement("div", {
  className: "row-gap"
}, React.createElement(Counter, null), React.createElement(Counter, null));
defaultExample.story = {
  name: 'Default'
};