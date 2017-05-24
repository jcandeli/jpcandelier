import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import cx from 'classnames';
import Mosaic from './Mosaic';
import Navigation from './Navigation';
import Footer from './Footer';
import { actions } from '../redux/photos';

export class GalleryComponent extends Component {
    constructor(props) {
        super(props);
        this.toggleSelected = this.toggleSelected.bind(this);
        this.state = { photoSelected: false };
    }

    componentWillMount() {
        this.props.selectCategory(this.props.params.category);
    }

    componentWillReceiveProps({ params }) {
        this.props.selectCategory(params.category);
    }

    toggleSelected() {
        this.setState({ photoSelected: !this.state.photoSelected });
    }

    render() {
        return (
            <div className={cx('app', { zoomed: this.state.photoSelected })}>
                <Navigation />
                <Mosaic onSelect={this.toggleSelected} />
                <Footer />
            </div>
        );
    }
}

GalleryComponent.propTypes = {
    selectCategory: PropTypes.func,
    params: PropTypes.object
};

const mapStateToProps = ({ currentIndex }) => ({ currentIndex });

const Gallery = connect(
  mapStateToProps,
  actions
)(GalleryComponent);

export default Gallery;
