import photoDB from '../photoDB';

export const constants = {
    SELECT_PHOTO: 'SELECT_PHOTO',
    DESELECT_PHOTO: 'DESELECT_PHOTO',
    SELECT_CATEGORY: 'SELECT_CATEGORY',
    EXPAND_ROW: 'EXPAND_ROW',

    CATEGORY_HOME: 'home',
    CATEGORY_TRAVEL: 'travel',
    CATEGORY_BANDS: 'bands',
    CATEGORY_LIFE: 'life'
};

export const actions = {
    selectCategory: (category) => ({
        type: constants.SELECT_CATEGORY,
        category
    }),

    selectPhoto: (index) => ({
        type: constants.SELECT_PHOTO,
        index
    }),

    deselectPhoto: () => ({
        type: constants.DESELECT_PHOTO
    }),

    expandRow: (rowIndex) => ({
        type: constants.EXPAND_ROW,
        rowIndex
    })
};

export const defaultState = {
    photos: [],
    selectedCategory: constants.CATEGORY_HOME,
    expandedRow: 0,
    currentIndex: -1
};

/**
 * redux reducer function
 * @param   {object} state current redux state
 * @param   {object} action dispatched action
 * @returns {object} state
 **/
export default function reducer(state = defaultState, action = {}) {
    switch (action.type) {
    case constants.SELECT_CATEGORY: {
        const newPhotos = (action.category === constants.CATEGORY_HOME)
            ? photoDB.filter((photo) => photo.home)
            : photoDB.filter((photo) => photo.category === action.category);
        return { ...state, photos: newPhotos, selectedCategory: action.category, currentIndex: -1 };
    }
    case constants.SELECT_PHOTO:
        return (action.index >= 0 || action.index > state.photos.length)
            ? { ...state, currentIndex: action.index }
            : state;
    case constants.DESELECT_PHOTO:
        return { ...state, currentIndex: -1 };
    case constants.EXPAND_ROW:
        return { ...state, expandedRow: action.rowIndex };
    default:
        return state;
    }
}
