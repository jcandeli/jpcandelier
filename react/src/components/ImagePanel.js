import React, { Component, PropTypes } from 'react';
import { Element, scroller } from 'react-scroll';

export default class ImagePanel extends Component {
    componentDidMount() {
        scroller.scrollTo('imagePanel', {
            duration: 100,
            delay: 100,
            smooth: true,
            offset: -40
        });
    }

    componentDidUpdate() {
        scroller.scrollTo('imagePanel', {
            duration: 100,
            delay: 100,
            smooth: true,
            offset: -40
        });
    }

    render() {
        const { photo, next, prev, close } = this.props;
        return (
            <Element name="imagePanel">
                <div className="image-panel bg-dark">
                    <a className="previous" onClick={prev}>
                        <img src="/img/prev.png" alt="previous button" />
                    </a>

                    <img
                        src={`/img/${photo.category}/${photo.image}`}
                        alt={photo.name}
                        className="photo"
                    />

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
            </Element>
        );
    }
}

ImagePanel.defaultProps = {
    photo: {}
};

ImagePanel.propTypes = {
    photo: PropTypes.object,
    next: PropTypes.func,
    prev: PropTypes.func,
    close: PropTypes.func
};
