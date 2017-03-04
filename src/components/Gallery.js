import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Mosaic from './Mosaic';
import Navigation from './Navigation';
import { actions } from '../redux/photos';

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
            </div>
        );
    }
}

GalleryComponent.propTypes = {
    selectCategory: PropTypes.func,
    params: PropTypes.object
};

const Gallery = connect(
  null,
  actions
)(GalleryComponent);

export default Gallery;
