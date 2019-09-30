"use strict";

exports.__esModule = true;
exports.disabledExample = exports.iconExapmle = exports.isFoolWithExample = exports.colorThemeExample = exports.sizeExample = exports.defaultExample = exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _ = require("..");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = {
  title: 'Components|Button'
};
exports["default"] = _default;

var defaultExample = function defaultExample() {
  return _react["default"].createElement("div", {
    className: "row-gap"
  }, _react["default"].createElement(_.Button, null, " \u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u0430\u044F \u043A\u043D\u043E\u043F\u043A\u0430 "));
};

exports.defaultExample = defaultExample;

var sizeExample = function sizeExample() {
  return _react["default"].createElement("div", {
    className: "row-gap"
  }, _react["default"].createElement(_.Button, {
    size: "s"
  }, "size s primary"), _react["default"].createElement(_.Button, {
    size: "m"
  }, "size m primary"), _react["default"].createElement(_.Button, {
    size: "l"
  }, "size l primary"), _react["default"].createElement(_.Button, {
    size: "xl"
  }, "size xl primary"), _react["default"].createElement(_.Button, {
    size: "xxl"
  }, "size xxl primary"));
};

exports.sizeExample = sizeExample;

var colorThemeExample = function colorThemeExample() {
  return _react["default"].createElement("div", {
    className: "row-gap"
  }, _react["default"].createElement(_.Button, {
    colorTheme: "primary"
  }, "primary"), _react["default"].createElement(_.Button, {
    colorTheme: "ghost-orange"
  }, "ghost-orange"), _react["default"].createElement(_.Button, {
    colorTheme: "ghost-gray"
  }, "ghost-gray"));
};

exports.colorThemeExample = colorThemeExample;

var isFoolWithExample = function isFoolWithExample() {
  return _react["default"].createElement("div", {
    className: "row-gap"
  }, _react["default"].createElement(_.Button, {
    isFoolWith: true
  }, "full width"), _react["default"].createElement("div", {
    style: {
      width: '50%'
    }
  }, _react["default"].createElement(_.Button, {
    isFoolWith: true
  }, "full width")));
};

exports.isFoolWithExample = isFoolWithExample;

var iconGear = _react["default"].createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  id: "Layer_2",
  "data-name": "Layer 2",
  viewBox: "0 0 128 128",
  width: "16",
  height: "16"
}, _react["default"].createElement("title", null, "AUTOMATION"), _react["default"].createElement("path", {
  d: "M126.25,72.167V55.833H113.393a49.754,49.754,0,0,0-8.656-21.021l9.156-9.156L102.343,14.107l-9.132,9.132A49.759,49.759,0,0,0,72.167,14.49V1.75H55.833V14.49a49.759,49.759,0,0,0-21.045,8.749l-9.132-9.132L14.107,25.657l9.156,9.156a49.754,49.754,0,0,0-8.656,21.021L1.75,55.691V72.024l12.908.142a49.76,49.76,0,0,0,8.724,20.9l-9.274,9.274,11.549,11.549,9.3-9.3a49.755,49.755,0,0,0,20.879,8.631V126.25H72.167V113.225a49.755,49.755,0,0,0,20.879-8.631l9.3,9.3,11.549-11.549-9.274-9.274a49.76,49.76,0,0,0,8.724-20.9Z",
  style: {
    'fill': '#284cb2'
  }
}), _react["default"].createElement("path", {
  d: "M100.83,64c0,.59-.01,1.17-.04,1.75a36.656,36.656,0,0,1-9.54,23.03c-.79.86-1.61,1.68-2.47,2.47a36.656,36.656,0,0,1-23.03,9.54c-.58.03-1.16.04-1.75.04s-1.17-.01-1.75-.04a36.656,36.656,0,0,1-23.03-9.54c-.86-.79-1.68-1.61-2.47-2.47a36.656,36.656,0,0,1-9.54-23.03c-.03-.58-.04-1.16-.04-1.75s.01-1.17.04-1.75a36.656,36.656,0,0,1,9.54-23.03c.79-.86,1.61-1.68,2.47-2.47a36.656,36.656,0,0,1,23.03-9.54c.58-.03,1.16-.04,1.75-.04s1.17.01,1.75.04a36.656,36.656,0,0,1,23.03,9.54c.86.79,1.68,1.61,2.47,2.47a36.656,36.656,0,0,1,9.54,23.03C100.82,62.83,100.83,63.41,100.83,64Z",
  style: {
    'fill': '#06daf7'
  }
}), _react["default"].createElement("circle", {
  cx: "64",
  cy: "64",
  r: "27.034",
  style: {
    'fill': '#e8f3fc'
  }
}), _react["default"].createElement("polygon", {
  points: "52.63 50.281 80.067 64 52.63 77.719 52.63 50.281",
  style: {
    'fill': '#ff6ca8'
  }
}), _react["default"].createElement("path", {
  d: "M109.368,80.405c-.383,1.051-.809,2.1-1.267,3.127a1.75,1.75,0,1,0,3.2,1.428c.491-1.1.949-2.228,1.36-3.355a1.75,1.75,0,0,0-3.289-1.2Z"
}), _react["default"].createElement("path", {
  d: "M126.25,54.083H114.86a51.9,51.9,0,0,0-7.853-19.065l8.122-8.124a1.749,1.749,0,0,0,0-2.475L103.581,12.87a1.749,1.749,0,0,0-2.475,0l-8.095,8.095a51.9,51.9,0,0,0-19.095-7.938V1.75A1.75,1.75,0,0,0,72.167,0H55.833a1.75,1.75,0,0,0-1.75,1.75V13.026a51.894,51.894,0,0,0-19.094,7.938l-8.1-8.095a1.749,1.749,0,0,0-2.475,0L12.87,24.419a1.749,1.749,0,0,0,0,2.475l8.123,8.124a51.894,51.894,0,0,0-7.854,19.065H1.75A1.75,1.75,0,0,0,0,55.833V72.167a1.75,1.75,0,0,0,1.75,1.75H13.2a51.935,51.935,0,0,0,7.909,18.952l-8.237,8.237a1.749,1.749,0,0,0,0,2.475L24.419,115.13a1.749,1.749,0,0,0,2.475,0l8.265-8.265a51.934,51.934,0,0,0,18.924,7.824V126.25a1.75,1.75,0,0,0,1.75,1.75H72.167a1.75,1.75,0,0,0,1.75-1.75V114.689a51.927,51.927,0,0,0,18.923-7.824l8.267,8.265a1.749,1.749,0,0,0,2.475,0l11.549-11.549a1.749,1.749,0,0,0,0-2.475l-9.273-9.274a1.75,1.75,0,0,0-2.475,2.475l8.036,8.037-9.074,9.074-8.062-8.061a1.75,1.75,0,0,0-2.255-.187A48.345,48.345,0,0,1,71.884,111.5a1.75,1.75,0,0,0-1.467,1.727V124.5H57.583V113.226a1.749,1.749,0,0,0-1.466-1.727,48.356,48.356,0,0,1-20.146-8.328,1.749,1.749,0,0,0-2.254.187l-8.061,8.061-9.074-9.074,8.036-8.037a1.749,1.749,0,0,0,.183-2.26,48.339,48.339,0,0,1-8.417-20.169,1.75,1.75,0,0,0-1.726-1.461H3.5V57.583H14.607a1.75,1.75,0,0,0,1.728-1.472A48.321,48.321,0,0,1,24.687,35.83a1.75,1.75,0,0,0-.187-2.255l-7.918-7.919,9.074-9.074,7.895,7.895a1.752,1.752,0,0,0,2.26.183,48.316,48.316,0,0,1,20.306-8.442,1.749,1.749,0,0,0,1.466-1.727V3.5H70.417V14.49a1.75,1.75,0,0,0,1.467,1.727,48.318,48.318,0,0,1,20.3,8.442,1.751,1.751,0,0,0,2.261-.183l7.895-7.895,9.074,9.074L103.5,33.575a1.75,1.75,0,0,0-.187,2.255,48.312,48.312,0,0,1,8.352,20.281,1.749,1.749,0,0,0,1.728,1.472H124.5V70.417H113.342a1.75,1.75,0,1,0,0,3.5H126.25a1.75,1.75,0,0,0,1.75-1.75V55.833A1.75,1.75,0,0,0,126.25,54.083Z"
}), _react["default"].createElement("path", {
  d: "M80.85,62.435,53.413,48.716a1.75,1.75,0,0,0-1.565,3.131L76.154,64,54.38,74.887V63.25a1.75,1.75,0,0,0-3.5,0V77.719a1.75,1.75,0,0,0,2.533,1.565L80.85,65.565a1.75,1.75,0,0,0,0-3.131Z"
}), _react["default"].createElement("path", {
  d: "M91.282,36.718a1.731,1.731,0,0,0-.183-.15,38.5,38.5,0,0,0-54.2,0,1.163,1.163,0,0,0-.328.328,38.5,38.5,0,0,0,0,54.2,1.163,1.163,0,0,0,.328.328,38.5,38.5,0,0,0,54.2,0,1.184,1.184,0,0,0,.334-.334,38.5,38.5,0,0,0,0-54.2A1.731,1.731,0,0,0,91.282,36.718ZM90,87.527,85.54,83.065A28.66,28.66,0,0,0,92.726,65.75h6.313A34.946,34.946,0,0,1,90,87.527ZM28.961,65.75h6.313a28.66,28.66,0,0,0,7.186,17.315L38,87.527A34.946,34.946,0,0,1,28.961,65.75ZM38,40.473l4.462,4.462A28.66,28.66,0,0,0,35.274,62.25H28.961A34.946,34.946,0,0,1,38,40.473ZM64,89.284A25.284,25.284,0,1,1,89.284,64,25.313,25.313,0,0,1,64,89.284ZM83.065,42.46A28.66,28.66,0,0,0,65.75,35.274V28.961A34.946,34.946,0,0,1,87.527,38ZM62.25,35.274a28.66,28.66,0,0,0-17.315,7.187L40.473,38A34.946,34.946,0,0,1,62.25,28.961ZM44.935,85.539A28.66,28.66,0,0,0,62.25,92.726v6.313A34.946,34.946,0,0,1,40.473,90ZM65.75,92.726A28.66,28.66,0,0,0,83.065,85.54L87.527,90A34.946,34.946,0,0,1,65.75,99.039ZM92.726,62.25A28.66,28.66,0,0,0,85.54,44.935L90,40.473A34.946,34.946,0,0,1,99.039,62.25Z"
}));

var iconExapmle = function iconExapmle() {
  return _react["default"].createElement("div", {
    className: "row-gap"
  }, _react["default"].createElement(_.Button, {
    icon: iconGear
  }, " + icon "), _react["default"].createElement(_.Button, {
    icon: iconGear
  }), _react["default"].createElement(_.Button, {
    icon: iconGear,
    size: "xl"
  }), _react["default"].createElement(_.Button, {
    icon: iconGear,
    colorTheme: "ghost-orange"
  }), _react["default"].createElement(_.Button, {
    icon: iconGear,
    colorTheme: "ghost-gray"
  }), _react["default"].createElement(_.Button, {
    icon: iconGear,
    isDisabled: true
  }));
};

exports.iconExapmle = iconExapmle;

var disabledExample = function disabledExample() {
  return _react["default"].createElement("div", {
    className: "row-gap"
  }, _react["default"].createElement(_.Button, {
    isDisabled: true
  }, " isDisabled "), _react["default"].createElement(_.Button, {
    isDisabled: true,
    size: "xl"
  }, " isDisabled "), _react["default"].createElement(_.Button, {
    isDisabled: true,
    colorTheme: "ghost-orange"
  }, " isDisabled "), _react["default"].createElement(_.Button, {
    isDisabled: true,
    colorTheme: "ghost-gray"
  }, " isDisabled "), _react["default"].createElement(_.Button, {
    icon: iconGear,
    isDisabled: true
  }, " isDisabled "));
};

exports.disabledExample = disabledExample;
defaultExample.story = {
  name: 'Default'
};
sizeExample.story = {
  name: 'Size'
};
colorThemeExample.story = {
  name: 'Color theme'
};
isFoolWithExample.story = {// name: 'With icon',
};
iconExapmle.story = {
  name: 'With icon'
};
disabledExample.story = {
  name: 'Disabled'
};