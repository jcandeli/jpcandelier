import React, { Component, PropTypes } from 'react';

export default class ImagePanel extends Component {
    render() {
        const { photo, next, prev } = this.props;
        return (
            <div className="image-panel">
                <a onClick={prev}>prev</a>
                <img src={`/img/${photo.category}/${photo.image}`} alt={photo.name} />
                <a onClick={next}>next</a>
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
    prev: PropTypes.func
};
