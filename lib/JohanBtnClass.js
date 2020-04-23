import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _inherits from "@babel/runtime/helpers/inherits";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames'; // eslint-disable-next-line react/prefer-stateless-function

var _default = /*#__PURE__*/function (_React$PureComponent) {
  _inherits(_default, _React$PureComponent);

  var _super = _createSuper(_default);

  function _default() {
    _classCallCheck(this, _default);

    return _super.apply(this, arguments);
  }

  _createClass(_default, [{
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

      var _classes = classnames('johan-btn', _classType, _classSize, className);

      return /*#__PURE__*/React.createElement("button", {
        className: _classes,
        disabled: disabled,
        type: "button",
        onClick: onClick
      }, children);
    }
  }]);

  return _default;
}(React.PureComponent);

_default.defaultProps = {
  type: 'default',
  disabled: false,
  size: 'md',
  className: ''
};
_default.propTypes = {
  type: PropTypes.oneOf(['primary', 'default', 'danger']),
  disabled: PropTypes.oneOf([true, false]),
  size: PropTypes.oneOf(['md', 'lg', 'sm']),
  className: PropTypes.string
};
export { _default as default };