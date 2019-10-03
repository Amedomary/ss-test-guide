import React from 'react';
import Demo from './demo';
export default {
  title: 'Components|Counter'
};
export const defaultExample = () => React.createElement("div", {
  className: "row-gap"
}, React.createElement(Demo, null), React.createElement(Demo, null));
defaultExample.story = {
  name: 'Default'
};