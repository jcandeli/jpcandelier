import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { actions, constants } from '../redux/photos';

export class NavigationComponent extends Component {
    render() {
        return (
            <nav className="main-nav">
                <Link to="/"><img src="/img/logo.svg" className="logo" alt="logo" /></Link>
                <span className="text-light">JP Candelier</span>
                <span className="bold">Photography</span>
                <Link to={`/${constants.CATEGORY_TRAVEL}`}>Travel</Link>
                <Link to={`/${constants.CATEGORY_BANDS}`}>Bands</Link>
                <Link to={`/${constants.CATEGORY_LIFE}`}>Life</Link>
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
