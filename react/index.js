import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { Link } from 'gatsby';
import { actions, constants } from '../state/createStore';
import Thumb from '../components/thumb';
import Footer from '../components/footer';

export class HomeComponent extends Component {
  componentWillMount() {
    this.props.selectCategory(constants.CATEGORY_HOME);
  }

  render() {
    return (
      <div>
        <div className="panel bg-light text-centered absolute">
          <div className="panel-content">
            <div className="name">
              <h1 className="text-light">JP Candelier</h1>
              <h2>Photography</h2>
            </div>

            <div className="links">
              <Link to={`/${constants.CATEGORY_TRAVEL}`}>Travel</Link>
              &bull;
              <Link to={`/${constants.CATEGORY_BANDS}`}>Bands</Link>
              &bull;
              <Link to={`/${constants.CATEGORY_LIFE}`}>Life</Link>
            </div>

            <img src="/img/logo.svg" className="logo" alt="logo" />
          </div>
        </div>

        <div className="thumbs">
          {this.props.photos.map(photo => (
            <Thumb photo={photo} key={photo.image} />
          ))}
        </div>

        <Footer />
      </div>
    );
  }
}

HomeComponent.propTypes = {
  selectCategory: PropTypes.func,
  photos: PropTypes.array,
};

HomeComponent.defaultProps = {
  selectCategory: () => {},
  photos: [],
};

const mapStateToProps = ({ photos }) => ({ photos });

const Home = connect(
  mapStateToProps,
  actions
)(HomeComponent);

export default Home;
