import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import { actions, constants } from '../../redux/photos';

export class Navigation extends Component {
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

function mapStateToProps({ selectedCategory }) {
  return { selectedCategory };
}

Navigation.propTypes = {
    selectedCategory: PropTypes.string
};

export default connect(
  mapStateToProps,
  actions
)(Navigation);
