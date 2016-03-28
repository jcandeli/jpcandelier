import React from 'react';
import { render } from 'react-dom';
import { connect } from 'react-redux';
import { getGalleryPhotos } from 'services/photography-service';
import store from 'stores/photography-store';

export const Gallery = React.createClass({
    render: function() {
        return (
            <div>
                <h3>{this.props.galleryType} Gallery</h3>
            </div>
        );
    }
});

const stateToProps = function(state) {
    return {
        galleryType: state.selectGalleryReducer.selectedGallery.type
    }
}

export default connect(stateToProps)(Gallery);