export * from './chat';

export const INPUT_CHANGE = 'INPUT_CHANGE';
export const RESET_FIELD = 'RESET_FIELD';

export const inputChange = (name, value, reducerName) => ({
  type: INPUT_CHANGE,
  name,
  value,
  reducerName,
});
export const resetField = (reducer) => ({ type: RESET_FIELD, reducer });
