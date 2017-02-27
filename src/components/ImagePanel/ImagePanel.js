import React, { Component, PropTypes } from 'react';

export class ImagePanel extends Component {
    render() {
        const { photo } = this.props;
        return (
            <div className="image-panel">{
                (photo)
                ? <img src={`/img/${photo.category}/${photo.image}`} />
                : null
            }</div>
        );
    }
}

ImagePanel.defaultProps = {
    photo: null
};

ImagePanel.propTypes = {
    photo: PropTypes.object
};

export default ImagePanel;