export * from './chat';
export * from './auth';
export * from './post';
export * from './socket';

export const INPUT_CHANGE = 'INPUT_CHANGE';
export const RESET_FIELDS = 'RESET_FIELDS';
export const SET_LOADING = 'SET_LOADING';
export const SET_ERROR = 'SET_ERROR';

export const inputChange = (name, value, reducerName) => ({
  type: INPUT_CHANGE,
  name,
  value,
  reducerName,
});
export const resetFields = (reducer) => ({ type: RESET_FIELDS, reducer });
export const setLoading = () => ({ type: SET_LOADING });
export const setError = () => ({ type: SET_ERROR });
