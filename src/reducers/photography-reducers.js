import { initialState } from 'initial-state';

export let selectGalleryReducer = function (state = initialState, action) {
    switch (action.type) {
        case 'SELECT_GALLERY':
            let newState = Object.assign({}, state);
            newState.selectedGallery.type = action.value;
            return newState;

        default:
            return state;
    }
}

