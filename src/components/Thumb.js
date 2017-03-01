import React, { Component, PropTypes } from 'react';
import cx from 'classnames';

export default class Thumb extends Component {
    render() {
        const { photo, onClick, selected } = this.props;
        const classNames = cx('thumb', { selected });
        return (
            <div
                key={photo.image}
                className={classNames}
                style={{ backgroundImage: `url(/img/${photo.category}/${photo.image})` }}
                onClick={onClick}
            />
        );
    }
}

Thumb.propTypes = {
    photo: PropTypes.object.isRequired,
    onClick: PropTypes.func.isRequired,
    selected: PropTypes.bool
};

Thumb.defaultProps = {
    selected: false
};
