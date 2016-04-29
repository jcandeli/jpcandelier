import React from 'react';
import { render } from 'react-dom';
import { connect } from 'react-redux';

export const Gallery = React.createClass({
    render: function() {
        return (
            <div>
                <h3>{this.props.galleryType} Gallery</h3>
            </div>
        );
    }
});

const mapStateToProps = function(state) {
    return {
        galleryType: state.selectedGallery.type
    }
}


export default connect(mapStateToProps)(Gallery);