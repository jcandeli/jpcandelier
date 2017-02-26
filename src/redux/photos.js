export const constants = {
    SELECT_PHOTO: 'SELECT_PHOTO',
    DESELECT_PHOTO: 'DESELECT_PHOTO',
    SELECT_CATEGORY: 'SELECT_CATEGORY',
    CATEGORY_ALL: 'CATEGORY_ALL',
    CATEGORY_TRAVEL: 'CATEGORY_TRAVEL',
    CATEGORY_BANDS: 'CATEGORY_BANDS',
    CATEGORY_LIFE: 'CATEGORY_LIFE'
};

export const actions = {
    selectCategory: (category) => ({
        type: constants.SELECT_CATEGORY,
        category
    }),

    selectPhoto: (photo) => ({
        type: constants.SELECT_PHOTO,
        photo
    }),

    deselectPhoto: () => ({
        type: constants.DESELECT_PHOTO
    })
};

export const defaultState = {
    selectedPhoto: {},
    selectedCategory: constants.CATEGORY_ALL
};

export default function reducer(state = defaultState, action = {}) {
    switch (action.type) {
    case constants.SELECT_CATEGORY:
    case constants.SELECT_PHOTO:
        return { ...state, selectedPhoto: action.photo }
    case constants.DESELECT_PHOTO:
    default:
    return state;
    }
}