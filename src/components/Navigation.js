import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { actions, constants } from '../redux/photos';

export class NavigationComponent extends Component {
    render() {
        return (
            <nav className="main-nav bg-light padded">
                <Link to="/"><img src="/img/logo.svg" className="logo" alt="logo" /></Link>

                <div className="name inline-block text-middle">
                    <span className="text-light">JP Candelier</span>
                    <span className="text-bold margined-sm-left">Photography</span>
                </div>

                <div className="nav-links float-right text-lg">
                    <Link to={`/${constants.CATEGORY_TRAVEL}`} activeClassName="selected">
                        Travel
                    </Link>
                    <Link to={`/${constants.CATEGORY_BANDS}`} activeClassName="selected">
                        Bands
                    </Link>
                    <Link to={`/${constants.CATEGORY_LIFE}`} activeClassName="selected">
                        Life
                    </Link>
                </div>
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
