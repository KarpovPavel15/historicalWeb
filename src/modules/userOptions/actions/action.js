import { actionCreator, requestCreator, successCreator } from 'utils';

export const setWorkersActionType = 'SET_WORKERS';
export const setWorkersRequestAction = actionCreator(requestCreator(setWorkersActionType));
export const setWorkersSuccessAction = actionCreator(successCreator(setWorkersActionType));
