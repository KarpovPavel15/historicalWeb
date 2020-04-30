import { all, call, put, takeLatest } from 'redux-saga/effects';
import { API } from 'api/rest/API';
import { setWorkersSuccessAction } from 'modules/userOptions';

function* setWorkerSaga() {
    const languages = yield call(API.homeAPI.getLanguages);
    yield put(setWorkersSuccessAction(languages))
}

export function* sagasUserOptions() {
    yield all(
        [
            takeLatest('SET_WORKERS_REQUEST', setWorkerSaga)
        ]
    );
}
