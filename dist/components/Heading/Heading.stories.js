import React from 'react';
import Heading from './index';
export default {
  title: 'Components|Heading'
};
export const defaultExample = () => React.createElement("div", {
  className: "row-gap"
}, React.createElement(Heading, null, " \u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u044B\u0439 \u0417\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A "));
defaultExample.story = {
  name: 'Default'
};