import React, { Component, PropTypes } from 'react';

export default class ImagePanel extends Component {
    render() {
        const { photo, next, prev, close } = this.props;
        return (
            <div className="image-panel bg-dark">
                <a className="previous" onClick={prev}>
                    <img src="/img/prev.png" alt="previous button" />
                </a>

                <img src={`/img/${photo.category}/${photo.image}`} alt={photo.name} className="photo" />

                <div className="image-panel-details text-left">
                    <h2 className="text-lg">{photo.title}</h2>
                    <p>{photo.location}</p>
                    <p className="text-sm">{photo.camera}</p>
                </div>

                <a className="next" onClick={next}>
                    <img src="/img/next.png" alt="next button" />
                </a>

                <a className="close" onClick={close}>&times;</a>
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
