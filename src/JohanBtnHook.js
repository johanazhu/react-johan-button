import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

function Button(props) {

    const { type, disabled, size, children, className, onClick } = props;

    const _classType = `johan-btn-${type}`;
    const _classSize = `johan-btn-${size}`;
    const _classes = classnames('johan-btn', _classType, _classSize, className);

    return (
        <button
            className={_classes}
            disabled={disabled}
            type="button"
            onClick={onClick}
        >
            {children}
        </button>
    );
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
    className: PropTypes.string,
};

export default React.memo(Button);