import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import { actions, constants } from '../redux/photos';

export class NavigationComponent extends Component {
    render() {
        return (
            <nav>
                <ul>
                    <Link to={`/${constants.CATEGORY_HOME}`}>All</Link>
                    <Link to={`/${constants.CATEGORY_TRAVEL}`}>Travel</Link>
                    <Link to={`/${constants.CATEGORY_BANDS}`}>Bands</Link>
                    <Link to={`/${constants.CATEGORY_LIFE}`}>Life</Link>
                </ul>
            </nav>
        );
    }
}

const mapStateToProps = ({ selectedCategory }) => ({ selectedCategory });

const Navigation = connect(
  mapStateToProps,
  actions
)(NavigationComponent);

export default Navigation;
