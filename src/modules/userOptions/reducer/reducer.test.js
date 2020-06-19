import { setLanguageListSuccessAction } from '../actions';
import { reducerLanguage } from './reducer';

it('Language is loaded', () => {
    let action = setLanguageListSuccessAction({array:[
        {
            id: 1,
            content: 'BLR'
        },
        {
            id: 2,
            content: 'ENG'
        },
        {
            id: 3,
            content: 'RUS'
        }]});
    let state = [ ];
    let newState = reducerLanguage(state, action);
    expect(newState.length).toBe(3);
});
