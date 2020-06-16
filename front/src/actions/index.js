export * from './chat';

export const CHANGE_VALUE = 'CHANGE_VALUE';
export const RESET_FIELD = 'RESET_FIELD';

export const changeValue = (value) => ({ type: CHANGE_VALUE, value });
export const resetField = (reducer) => ({ type: RESET_FIELD, reducer });
