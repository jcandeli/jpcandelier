import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import { actions, constants } from '../redux/photos';

export class NavigationComponent extends Component {
    render() {
        const { selectCategory } = this.props;
        return (
            <nav>
                <ul>
                    <li onClick={() => selectCategory(constants.CATEGORY_ALL)}>All</li>
                    <li onClick={() => selectCategory(constants.CATEGORY_TRAVEL)}>Travel</li>
                    <li onClick={() => selectCategory(constants.CATEGORY_BANDS)}>Bands</li>
                    <li onClick={() => selectCategory(constants.CATEGORY_LIFE)}>Life</li>
                </ul>
            </nav>
        );
    }
}

const mapStateToProps = ({ selectedCategory }) => ({ selectedCategory });

NavigationComponent.propTypes = {
    selectedCategory: PropTypes.string,
    selectCategory: PropTypes.func
};

const Navigation = connect(
  mapStateToProps,
  actions
)(NavigationComponent);

export default Navigation;
