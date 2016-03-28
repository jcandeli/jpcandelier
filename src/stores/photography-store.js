import { createStore, combineReducers } from 'redux';
import { selectGalleryReducer } from 'reducers/photography-reducers';

// Combine Reducers
// var reducers = combineReducers({
//     selectGalleryReducer: selectGalleryReducer
// });

// Create store
var store = createStore(selectGalleryReducer);

export default store;