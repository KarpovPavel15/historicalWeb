const initialState = {
    workersList: [],
    routesList: [],
    aboutHomePage: [],

};
export const reducerMainPage = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_MAIN_PAGE_CONTENT_SUCCESS':
            return {
                ...state,
                routesList: [...action.routesList],
                workersList: [...action.workersList],
                aboutHomePage: [...action.aboutHomePage]
            };
        default:
            return state;
    }
};
