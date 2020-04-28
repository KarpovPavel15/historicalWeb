export const reducerLanguage = (state = [], action) => {
    switch (action.type) {
        case 'SET_WORKERS_SUCCESS' :
            return [
                ...action.data
            ];
        default:
            return state;
    }
};
