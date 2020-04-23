"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

function _createSuper(Derived) { return function () { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

// eslint-disable-next-line react/prefer-stateless-function
var _default = /*#__PURE__*/function (_React$PureComponent) {
  (0, _inherits2["default"])(_default, _React$PureComponent);

  var _super = _createSuper(_default);

  function _default() {
    (0, _classCallCheck2["default"])(this, _default);
    return _super.apply(this, arguments);
  }

  (0, _createClass2["default"])(_default, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          type = _this$props.type,
          disabled = _this$props.disabled,
          size = _this$props.size,
          children = _this$props.children,
          className = _this$props.className,
          onClick = _this$props.onClick;

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
  }]);
  return _default;
}(_react["default"].PureComponent);

exports["default"] = _default;
_default.defaultProps = {
  type: 'default',
  disabled: false,
  size: 'md',
  className: ''
};
_default.propTypes = {
  type: _propTypes["default"].oneOf(['primary', 'default', 'danger']),
  disabled: _propTypes["default"].oneOf([true, false]),
  size: _propTypes["default"].oneOf(['md', 'lg', 'sm']),
  className: _propTypes["default"].string
};
module.exports = exports.default;