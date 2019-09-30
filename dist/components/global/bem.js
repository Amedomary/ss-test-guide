"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _classname = require("@bem-react/classname");

var cnBem = (0, _classname.withNaming)({
  n: '',
  e: '__',
  m: '_',
  v: '_'
});
var _default = cnBem; // cat() // Cat
// cat({ size: 'm' }) // Cat Cat_size_m
// cat('Tail') // Cat-Tail
// cat('Tail', { length: 'small' }) // Cat-Tail Cat-Tail_length_small

exports["default"] = _default;