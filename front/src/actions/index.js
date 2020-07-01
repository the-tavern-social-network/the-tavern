export * from './tavern';
export * from './auth';
export * from './post';
export * from './socket';
export * from './user';

export const INPUT_CHANGE = 'INPUT_CHANGE';
export const RESET_FIELDS = 'RESET_FIELDS';
export const SET_INITIAL_LOADING = 'SET_INITIAL_LOADING';
export const SET_LOADING = 'SET_LOADING';
export const SET_ERROR = 'SET_ERROR';
export const UNSET_ERROR = 'UNSET_ERROR';
export const ISRESOLVE = 'ISRESOLVE'
export const SET_TAVERN_ID = 'SET_TAVERN_ID';

export const inputChange = (name, value, reducerName) => ({
  type: INPUT_CHANGE,
  name,
  value,
  reducerName,
});
export const resetFields = (reducer) => ({ type: RESET_FIELDS, reducer });
export const setInitialLoading = () => ({ type: SET_INITIAL_LOADING });
export const setLoading = () => ({ type: SET_LOADING });
export const setError = (errorMessage, errorType, data) => ({ type: SET_ERROR, errorMessage, errorType, data });
export const unsetError = () => ({ type: UNSET_ERROR });
export const setTavernId = (tavernId) => ({ type: SET_TAVERN_ID, tavernId });
export const isResolve = () => ({ type: ISRESOLVE });
