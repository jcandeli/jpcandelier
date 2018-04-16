import React, { Component, PropTypes } from 'react';
import cx from 'classnames';
import UnCheckedBox from 'react-icons/lib/fa/square-o';
import CheckedBox from 'react-icons/lib/fa/check-square-o';

/**
 * CheckboxItem
 * @description
 */
class CheckboxItem extends Component {
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
                className={cx('checkbox-item', 'dropdown-item', { selected: this.props.selected })}
                onClick={this.selectItem}
                onKeyDown={this.handleKeyPress}
                role="menuitemcheckbox"
                aria-checked={this.props.selected ? 'true' : 'false'}
                tabIndex="0"
            >
                {
                    (this.props.selected)
                        ? <CheckedBox className="margined-sm-right" />
                        : <UnCheckedBox className="margined-sm-right" />
                }
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
CheckboxItem.propTypes = {
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
CheckboxItem.defaultProps = {
    selected: false
};
export default CheckboxItem;
