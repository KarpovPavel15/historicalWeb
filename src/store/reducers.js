import { combineReducers } from 'redux';
import { reducerLanguage,reducerMainPage } from 'modules';

export default combineReducers({
    languages: reducerLanguage,
    homePageContent: reducerMainPage
});
