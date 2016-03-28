import React from 'react';
import { render } from 'react-dom';

export const Gallery = React.createClass({
    render() {
        let { galleryType } = this.props.location.query;

        return (
            <div>
                <h3>{galleryType} blah</h3>
            </div>
        );
    }
});