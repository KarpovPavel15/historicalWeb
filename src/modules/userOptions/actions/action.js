import { actionCreator, requestCreator, successCreator } from 'utils';

export const setLanguageListActionType = 'SET_LANGUAGE_LIST';
export const setLanguageListRequestAction = actionCreator(requestCreator(setLanguageListActionType));
export const setLanguageListSuccessAction = actionCreator(successCreator(setLanguageListActionType));
