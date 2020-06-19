import { initialState, reducerMainPage } from './reducer';
import { setMainPageContentSuccessAction } from '../actions';

it('set main page info is success', () => {
    let action = setMainPageContentSuccessAction({
        personsList: [1,2,3,4,5],
        routesList: [1,2,3,4,5],
        workersList: [1,2,3,4,5],
        aboutHomePage: [1,2,3,4,5]
    });
    let newState = reducerMainPage(initialState, action);
    expect(newState.aboutHomePage.length).toBeGreaterThan(0);
});
