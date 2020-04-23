import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

// eslint-disable-next-line react/prefer-stateless-function
export default class extends React.PureComponent {
    static defaultProps = {
        type: 'default',
        disabled: false,
        size: 'md',
        className: '',
    }

    static propTypes = {
        type: PropTypes.oneOf(['primary', 'default', 'danger']),
        disabled: PropTypes.oneOf([true, false]),
        size: PropTypes.oneOf(['md', 'lg', 'sm']),
        className: PropTypes.string,
    }

    render() {
        const { type, disabled, size, children, className, onClick } = this.props;

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
}