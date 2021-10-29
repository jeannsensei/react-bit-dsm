"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

require("./Button.css");

var _jsxRuntime = require("react/jsx-runtime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Button = function Button(props) {
  var text = props.text;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
    className: "btn",
    children: text
  });
};

Button.propTypes = {
  /**
   * @property {boolean} primary determines is a primary button (emphasized)
   */
  primary: _propTypes.default.bool,

  /**
   * @property {string} text label to be displayed within the button
   */
  text: _propTypes.default.string
};
Button.defaultProps = {
  text: "Hero Button!",
  primary: true
};
var _default = Button;
exports.default = _default;

//# sourceMappingURL=Button.js.map