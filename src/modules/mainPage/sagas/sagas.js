import { call, put, takeLatest } from 'redux-saga/effects';
import { API } from 'api/rest/API';
import { setMainPageContentSuccessAction } from 'modules/mainPage';

function* setMainPageContent() {
    const routesList = yield call(API.homeAPI.getRoutesList);
    const workersList = yield call(API.homeAPI.getWorkersList);
    const aboutHomePage = yield call(API.homeAPI.getAboutHomePage);
    yield put(setMainPageContentSuccessAction({
        routesList: [...routesList.data],
        workersList: [...workersList.data],
        aboutHomePage: [...aboutHomePage.data]
    }));
}

export function* sagaMainPage() {
    yield takeLatest('SET_MAIN_PAGE_CONTENT_REQUEST', setMainPageContent)
}
