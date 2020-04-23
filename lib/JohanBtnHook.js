import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

function Button(props) {
  var type = props.type,
      disabled = props.disabled,
      size = props.size,
      children = props.children,
      className = props.className,
      onClick = props.onClick;

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

Button.defaultProps = {
  type: 'default',
  disabled: false,
  size: 'md',
  className: ''
};
Button.propTypes = {
  type: PropTypes.oneOf(['primary', 'default', 'danger']),
  disabled: PropTypes.oneOf([true, false]),
  size: PropTypes.oneOf(['md', 'lg', 'sm']),
  className: PropTypes.string
};
export default React.memo(Button);