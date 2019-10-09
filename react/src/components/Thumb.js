import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

export default class Thumb extends Component {
  render() {
    const { photo, onClick, selected } = this.props;
    return (
      <div
        key={photo.image}
        className={cx('thumb', 'pointer', { selected })}
        style={{
          backgroundImage: `url(/img/${photo.category}/thumbs/${photo.image})`,
        }}
        onClick={onClick}
        role="img"
        aria-label={photo.tite}
      />
    );
  }
}

Thumb.propTypes = {
  photo: PropTypes.object.isRequired,
  onClick: PropTypes.func,
  selected: PropTypes.bool,
};

Thumb.defaultProps = {
  selected: false,
  onClick: () => {},
};
