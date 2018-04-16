import React, { Component, PropTypes } from 'react';
import cx from 'classnames';

/**
 * DropdownItem
 * @description
 */
class DropdownItem extends Component {
    constructor(props) {
        super(props);
        this.selectItem = this.selectItem.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);
    }

    handleKeyPress(e) {
        // space
        if (e.keyCode === 32) {
            this.selectItem();
        }
    }

    selectItem() {
        this.props.updateSelect(this.props.value, this.props.children, !this.props.selected);
    }

    render() {
        return (
            <li
                className={cx('dropdown-item', { selected: this.props.selected })}
                onClick={this.selectItem}
                onKeyDown={this.handleKeyPress}
                role="menuitem"
                tabIndex="0"
            >
                {this.props.children}
            </li>
        );
    }
}

/**
 * propTypes
 * @type {object}
 * @property {String} placeholder
 * @property {Node} children
 */
DropdownItem.propTypes = {
    updateSelect: PropTypes.func,
    selected: PropTypes.bool,
    value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
        PropTypes.object
    ]),
    children: PropTypes.string
};


/**
 * defaultProps
 * @type {object}
 * @property {Boolean} selected
 */
DropdownItem.defaultProps = {
    selected: false
};
export default DropdownItem;
