import store from 'stores/photography-store';
import { selectGalleryAction } from 'actions/photography-actions';

export var getGalleryPhotos = function (gallery) {
    let action = selectGalleryAction(gallery);
    store.dispatch(store.getState(), action);
};