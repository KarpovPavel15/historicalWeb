export const reducerLanguage = (state = [], action) => {
    switch (action.type) {
        case 'SET_LANGUAGE_LIST_SUCCESS' :
            return [
                ...action[4]
            ];
        default:
            return state;
    }
};
