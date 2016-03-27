import React from 'react';
import { render } from 'react-dom';

export let Gallery = React.createClass({
    render() {
        let { galleryType } = this.props.location.query;

        return (
            <h3>{galleryType} Gallery</h3>
        );
    }
});