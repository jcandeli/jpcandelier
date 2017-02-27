import React, { Component, PropTypes } from 'react';

export class Thumb extends Component {
    render() {
        const { photo, onClick } = this.props;
        return (<div
            key={photo.image}
            className="thumb"
            style={{ backgroundImage: `url(/img/${photo.category}/${photo.image})` }}
            onClick={() => onClick(photo)}
        />);
    }
}

Thumb.propTypes = {
    photo: PropTypes.object,
    onClick: PropTypes.func
};

export default Thumb;