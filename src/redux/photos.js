import photoDB from '../photoDB';

export const constants = {
    SELECT_PHOTO: 'SELECT_PHOTO',
    DESELECT_PHOTO: 'DESELECT_PHOTO',
    SELECT_CATEGORY: 'SELECT_CATEGORY',
    CATEGORY_HOME: 'home',
    CATEGORY_TRAVEL: 'travel',
    CATEGORY_BANDS: 'bands',
    CATEGORY_LIFE: 'life',
    EXPAND_ROW: 'EXPAND_ROW'
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

export default function reducer(state = defaultState, action = {}) {
    switch (action.type) {
    case constants.SELECT_CATEGORY: {
        const newPhotos = (action.category === constants.CATEGORY_HOME)
            ? photoDB.filter((photo) => photo.home)
            : photoDB.filter((photo) => photo.category === action.category);
        return { ...state, photos: newPhotos, selectedCategory: action.category, currentIndex: -1 };
    }
    case constants.SELECT_PHOTO:
        return { ...state, currentIndex: action.index };
    case constants.DESELECT_PHOTO:
        return { ...state, currentIndex: -1 };
    case constants.EXPAND_ROW:
        return { ...state, expandedRow: action.rowIndex };
    default:
        return state;
    }
}
