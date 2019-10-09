import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ImagePanel extends Component {
  render() {
    const { photo, next, prev, close } = this.props;
    return (
      <div className="image-panel bg-dark">
        <a className="previous" onClick={prev} role="button" tabIndex="0">
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

        <a className="next" onClick={next} role="button" tabIndex="0">
          <img src="/img/next.png" alt="next button" />
        </a>

        <a className="close" onClick={close} role="button" tabIndex="0">
          &times;
        </a>
      </div>
    );
  }
}

ImagePanel.propTypes = {
  photo: PropTypes.object,
  next: PropTypes.func,
  prev: PropTypes.func,
  close: PropTypes.func,
};

ImagePanel.defaultProps = {
  photo: {},
  next: () => {},
  prev: () => {},
  close: () => {},
};
