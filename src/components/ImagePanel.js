import React, { Component, PropTypes } from 'react';

export default class ImagePanel extends Component {
    render() {
        const { photo, next, prev, close } = this.props;
        return (
            <div className="image-panel">
                <a onClick={prev}>prev</a>
                <img src={`/img/${photo.category}/${photo.image}`} alt={photo.name} />
                <p>{photo.title}</p>
                <p>{photo.location}</p>
                <p>{photo.camera}</p>
                <a onClick={next}>next</a>
                <a onClick={close}>close</a>
            </div>
        );
    }
}

ImagePanel.defaultProps = {
    photo: null
};

ImagePanel.propTypes = {
    photo: PropTypes.object,
    next: PropTypes.func,
    prev: PropTypes.func,
    close: PropTypes.func
};
