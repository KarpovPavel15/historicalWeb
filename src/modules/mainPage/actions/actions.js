import { actionCreator, requestCreator, successCreator } from '../../../utils';

export const setMainPageContent = 'SET_MAIN_PAGE_CONTENT';
export const setMainPageContentRequestAction = actionCreator(requestCreator(setMainPageContent));
export const setMainPageContentSuccessAction = actionCreator(successCreator(setMainPageContent));
