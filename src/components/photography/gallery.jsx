import React from 'react';
import { render } from 'react-dom';
import { getGalleryPhotos } from 'services/photography-service';
import store from 'stores/photography-store';

export const Gallery = React.createClass({
    render() {
        let { galleryType } = this.props.location.query;
        getGalleryPhotos(galleryType);

        store.subscribe(function() {
            var currentStore = store.getState();
            console.log(currentStore);
        });

        return (
            <div>
                <h3>{galleryType} blah</h3>
            </div>
        );
    }
});