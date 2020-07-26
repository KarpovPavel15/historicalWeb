import { sagaMainPage, setMainPageContent } from './sagas'
import { takeLatest } from 'redux-saga/effects';
import { Person1 } from '../../../assets/persones';
import { API } from '../../../api/rest/API';
import { setMainPageContentSuccessAction } from '../actions';
import { runSaga } from 'redux-saga';

it('request found', () => {
    const generator = sagaMainPage();
    expect(generator.next().value)
        .toEqual(takeLatest('SET_MAIN_PAGE_CONTENT_REQUEST', setMainPageContent));
    expect(generator.next().done).toBeTruthy();
});

it('setMainPageContent', async () => {
    const personsList = [{
        id: 1,
        img: `../${Person1}`,
        name: 'Элаіза Ажэшка',
        description: 'Яны былі людзьмі адной эпохі. Абое прайшлі праз выпрабаванні Студзеньскага паўстання 1863-64 гадоў. Абое прысвяцілі сябе пісьменніцтву.'
    }];
    const requestPersonsList = jest.spyOn(API.homeAPI, 'getPersonsList')
        .mockImplementation(() => Promise.resolve(personsList));

    const dispatched = [];
    const result = await runSaga({
        dispatch: (action) => dispatched.push(action)
    }, setMainPageContent);

    expect(requestPersonsList).toHaveBeenCalledTimes(1);
    expect(dispatched).toEqual([setMainPageContentSuccessAction({
        personsList: personsList,
        routesList: personsList,
        workersList: personsList,
        aboutHomePage: personsList
    })]);
    requestPersonsList.mockClear();
});
