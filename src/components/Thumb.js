import React, { Component, PropTypes } from 'react';

export default class Thumb extends Component {
    render() {
        const { photo, onClick } = this.props;
        return (
            <div
                key={photo.image}
                className="thumb"
                style={{ backgroundImage: `url(/img/${photo.category}/${photo.image})` }}
                onClick={onClick}
            />
        );
    }
}

Thumb.propTypes = {
    photo: PropTypes.object.isRequired,
    onClick: PropTypes.func.isRequired
};
