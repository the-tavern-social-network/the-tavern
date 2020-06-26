
import * as types from '../actions/error';
  
const initialState = {};
  
export default (state = initialState, action) => {
  if (action.type === types.RESPONSE_ERROR) {
    return { ...state, ...action.error };
  }
  
  if (action.type === types.CLEAR_ERROR) {
    return initialState;
  }
  
  return state;
};