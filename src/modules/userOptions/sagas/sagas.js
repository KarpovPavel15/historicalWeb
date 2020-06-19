import { all, call, put, takeLatest } from 'redux-saga/effects';
import { API } from 'api/rest/API';
import { setLanguageListSuccessAction } from '../actions';

function* setLanguageSaga() {
    const languages = yield call(API.homeAPI.getLanguages);
    yield put(setLanguageListSuccessAction({array: languages.handlers.get[0][4]}))
}

export function* sagasUserOptions() {
    yield all(
        [
            takeLatest('SET_LANGUAGE_LIST_REQUEST', setLanguageSaga)
        ]
    );
}
