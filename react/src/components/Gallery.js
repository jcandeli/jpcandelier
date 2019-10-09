import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Mosaic from './Mosaic';
import Navigation from './Navigation';
import Footer from './Footer';
import { actions } from '../state/createStore';

export class GalleryComponent extends Component {
  componentWillMount() {
    this.props.selectCategory(this.props.params.category);
  }

  componentWillReceiveProps({ params }) {
    this.props.selectCategory(params.category);
  }

  render() {
    return (
      <div>
        <Navigation />
        <Mosaic columns={6} />
        <Footer />
      </div>
    );
  }
}

GalleryComponent.propTypes = {
  selectCategory: PropTypes.func,
  params: PropTypes.object,
};

GalleryComponent.defaultProps = {
  selectCategory: () => {},
  params: {},
};

const Gallery = connect(
  null,
  actions
)(GalleryComponent);

export default Gallery;
