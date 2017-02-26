import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import ImagePanel from '../ImagePanel';
import { actions } from '../../redux/photos';

export class Mosaic extends Component {
    render() {
        const { photos, selectPhoto } = this.props;
        return (
            <div>
                {photos.map(
                    (photo, index) => {
                        const thumb = <div
                            key={photo.image}
                            className="thumb"
                            style={{ backgroundImage: `url(/img/${photo.category}/${photo.image})` }}
                            onClick={() => selectPhoto(photo)}
                        />;

                        return (((index + 1) % 6) != 0) ? thumb : [thumb, <ImagePanel />];
                    }
                )}
            </div>
        );
    }
}

function mapStateToProps({ selectedCategory }) {
  return { selectedCategory };
}

Mosaic.propTypes = {
    photos: PropTypes.array,
    selectPhoto: PropTypes.func
};

export default connect(
  mapStateToProps,
  actions
)(Mosaic);
