import { initialState } from 'initial-state';

export let selectGalleryReducer = function (state = initialState, action) {
    switch (action.type) {
        case 'SELECT_GALLERY':
            return Object.assign({}, state, {
                selectedGallery: {
                    type: action.value
                }
            });

        default:
            return state;
    }
}

