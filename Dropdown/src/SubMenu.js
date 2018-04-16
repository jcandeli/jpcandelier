import React, { Component, PropTypes } from 'react';
import FaAngleRight from 'react-icons/lib/fa/angle-right';
import cx from 'classnames';
import DropdownItem from './DropdownItem';
import CheckboxItem from './CheckboxItem';

/**
 * SubMenu
 * @description
 */
class SubMenu extends Component {
    constructor(props) {
        super(props);
        this.isSelected = this.isSelected.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);
        this.expand = this.expand.bind(this);
        this.collapse = this.collapse.bind(this);
        this.state = { expanded: false };
    }

    handleKeyPress(e) {
        switch (e.keyCode) {
        case 39: // right
            this.expand();
            break;
        case 37: // left
            this.collapse();
            break;
        default:
            // do nothing
        }
    }

    expand() {
        this.setState({ expanded: true });
    }

    collapse() {
        this.setState({ expanded: false });
    }

    isSelected(value) {
        return (this.props.multiValue.filter(e => e.value === value).length > 0);
    }

    render() {
        return (
            <li
                className="dropdown-item"
                role="menuitem"
                aria-haspopup="true"
                onKeyDown={this.handleKeyPress}
                onMouseOver={this.expand}
                onMouseOut={this.collapse}
                tabIndex="0"
            >
                {this.props.label}

                <ul
                    className={
                        cx('sub-menu', { hide: !(this.state.expanded), block: this.state.expanded })
                    }
                    role="group"
                >
                    {
                        React.Children.map(this.props.children, (child) => {
                            let props;

                            switch (child.type) {
                            case DropdownItem: {
                                props = {
                                    selected: (child.props.value === this.props.singleValue.value),
                                    updateSelect: this.props.updateSingle
                                };
                                break;
                            }
                            case CheckboxItem: {
                                props = {
                                    selected: this.isSelected(child.props.value),
                                    updateSelect: this.props.updateMulti
                                };
                                break;
                            }
                            default:
                                props = {};
                            }
                            return React.cloneElement(child, props);
                        })
                    }
                </ul>
                <FaAngleRight className="chevron-right" />
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
SubMenu.propTypes = {
    label: PropTypes.string,
    updateSingle: PropTypes.func,
    updateMulti: PropTypes.func,
    singleValue: PropTypes.object,
    multiValue: PropTypes.array,
    children: PropTypes.oneOfType([
        PropTypes.node,
        PropTypes.arrayOf(PropTypes.node)
    ])
};

export default SubMenu;
