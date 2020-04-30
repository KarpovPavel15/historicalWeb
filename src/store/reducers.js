import { combineReducers } from 'redux';
import { reducerLanguage } from 'modules/userOptions';


export default combineReducers({
    languages:reducerLanguage
});
