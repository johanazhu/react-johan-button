"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

function Button(props) {
  var type = props.type,
      disabled = props.disabled,
      size = props.size,
      children = props.children,
      className = props.className,
      onClick = props.onClick;

  var _classType = "johan-btn-".concat(type);

  var _classSize = "johan-btn-".concat(size);

  var _classes = (0, _classnames["default"])('johan-btn', _classType, _classSize, className);

  return /*#__PURE__*/_react["default"].createElement("button", {
    className: _classes,
    disabled: disabled,
    type: "button",
    onClick: onClick
  }, children);
}

Button.defaultProps = {
  type: 'default',
  disabled: false,
  size: 'md',
  className: ''
};
Button.propTypes = {
  type: _propTypes["default"].oneOf(['primary', 'default', 'danger']),
  disabled: _propTypes["default"].oneOf([true, false]),
  size: _propTypes["default"].oneOf(['md', 'lg', 'sm']),
  className: _propTypes["default"].string
};

var _default = _react["default"].memo(Button);

exports["default"] = _default;
module.exports = exports.default;