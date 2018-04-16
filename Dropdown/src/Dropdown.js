import React, { Component, PropTypes } from 'react';
import cx from 'classnames';
import FaAngleDown from 'react-icons/lib/fa/angle-down';
import DropdownItem from './DropdownItem';
import CheckboxItem from './CheckboxItem';
import SubMenu from './SubMenu';

require('./styles/Dropdown.scss');

const PREV = 'previousElementSibling';
const NEXT = 'nextElementSibling';

/**
 * Dropdown
 * @description custom styled dropdown box
 */
class Dropdown extends Component {
    constructor(props) {
        super(props);
        this.toggleExanded = this.toggleExanded.bind(this);
        this.updateMulti = this.updateMulti.bind(this);
        this.updateSingle = this.updateSingle.bind(this);
        this.expand = this.expand.bind(this);
        this.collapse = this.collapse.bind(this);
        this.focus = this.focus.bind(this);
        this.blur = this.blur.bind(this);
        this.isSelected = this.isSelected.bind(this);
        this.isFocused = this.isFocused.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);
        this.state = {
            expanded: false,
            isFocused: false,
            selectedLabel: null,
            multiValue: [],
            singleValue: {},
            id: props.id || `dropdown-${(Math.floor((Math.random() * 1000000) + 1))}`
        };
    }

    componentWillMount() {
        const { initValue } = this.props;
        if (Array.isArray(initValue)) {
            const selectedLabel = initValue.map((val) => val.label).join(', ');
            this.setState({ multiValue: initValue, selectedLabel });
        } else if (initValue && initValue.value) {
            this.updateSingle(initValue.value, initValue.label, true);
        }
    }

    isSelected(value) {
        return (this.state.multiValue.filter(e => e.value === value).length > 0);
    }

    isFocused(focused) {
        this.setState({ isFocused: focused });
    }

    handleKeyPress(e) {
        switch (e.keyCode) {
        case 40: // down
            if (!this.state.expanded) {
                this.expand();
            }
            this.focusItem(NEXT);
            break;
        case 38: // up
            if (!this.state.expanded) {
                this.expand();
            }
            this.focusItem(PREV);
            break;
        default:
            // do nothing
        }
    }

    focusItem(direction = NEXT) {
        const focused = this.menu.querySelector('.dropdown-item:focus');
        const nextItem = (focused && focused[direction])
            ? focused[direction] : this.menu.querySelector('.dropdown-item');
        nextItem.focus();
    }

    toggleExanded() {
        this.setState({ expanded: !(this.state.expanded) });
    }

    expand() {
        this.setState({ expanded: true });
    }

    collapse() {
        setTimeout(() => {
            if (!this.state.isFocused) {
                this.setState({ expanded: false });
            }
        }, 0);
    }

    focus() {
        this.isFocused(true);
    }

    blur() {
        this.isFocused(false);
        this.collapse();
    }

    updateMulti(value, label, selected) {
        let multiValue = [...this.state.multiValue];
        let selectedLabel;

        if (!value) {
            multiValue = [];
        } else {
            multiValue = (selected)
                ? [...multiValue, { label, value }]
                : multiValue.filter((val) => val.value !== value);

            selectedLabel = multiValue.map((val) => val.label).join(', ');
        }

        this.setState({
            singleValue: {},
            multiValue,
            selectedLabel
        });
        this.props.onSelect(multiValue);
    }

    updateSingle(value, label, selected) {
        const singleValue = (selected && value) ? { label, value } : {};
        const selectedLabel = (selected && value) ? label : null;
        this.setState({ multiValue: [], singleValue, selectedLabel });
        this.props.onSelect(singleValue);
    }

    render() {
        return (
            <div
                className="dropdown-list"
                onKeyDown={this.handleKeyPress}
                onFocus={this.focus}
                onBlur={this.blur}
                role="menu"
            >
                <div
                    className="dropdown-btn"
                    onClick={this.toggleExanded}
                    tabIndex="0"
                    aria-haspopup="true"
                    aria-expanded={this.state.expanded}
                    id={this.state.id}
                >
                    {this.state.selectedLabel || this.props.placeholder}
                    <FaAngleDown className="chevron-down" />
                </div>

                <ul
                    className={cx('menu', { hide: !(this.state.expanded) })}
                    aria-labelledby={this.state.id}
                    ref={(menu) => { this.menu = menu; }}
                >
                    {
                        React.Children.map(this.props.children, (child) => {
                            let props;

                            switch (child.type) {
                            case DropdownItem: {
                                props = {
                                    selected: (child.props.value === this.state.singleValue.value),
                                    updateSelect: this.updateSingle
                                };
                                break;
                            }
                            case CheckboxItem: {
                                props = {
                                    selected: this.isSelected(child.props.value),
                                    updateSelect: this.updateMulti
                                };
                                break;
                            }
                            case SubMenu: {
                                props = {
                                    updateSingle: this.updateSingle,
                                    updateMulti: this.updateMulti,
                                    singleValue: this.state.singleValue,
                                    multiValue: this.state.multiValue
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
            </div>
        );
    }
}

/**
 * propTypes
 * @type {object}
 * @property {String} placeholder
 * @property {Node} children
 */
Dropdown.propTypes = {
    placeholder: PropTypes.string,
    onSelect: PropTypes.func,
    children: PropTypes.oneOfType([
        PropTypes.node,
        PropTypes.arrayOf(PropTypes.node)
    ]),
    id: PropTypes.string,
    initValue: PropTypes.oneOfType([
        PropTypes.object,
        PropTypes.arrayOf(PropTypes.object)
    ])
};

/**
 * defaultProps
 * @type {object}
 * @property {String} placeholder
 * @property {Node} children
 */
Dropdown.defaultProps = {
    placeholder: 'Select ...',
    onSelect: () => {},
    id: null
};

export default Dropdown;
