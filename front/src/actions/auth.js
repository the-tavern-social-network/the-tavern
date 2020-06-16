export const SIGNUP = 'SIGNUP';
export const LOGIN = 'LOGIN';
export const CONNECT = 'CONNECT';
export const IS_LOGGED_IN = 'IS_LOGGED_IN';
export const LOGOUT = 'LOGOUT';
export const DISCONNECT = 'DISCONNECT';

export const signup = () => ({ type: SIGNUP });
export const login = () => ({ type: LOGIN });
export const connect = (response) => ({ type: CONNECT, response });
export const isLoggedIn = () => ({ type: IS_LOGGED_IN });
export const logout = () => ({ type: LOGOUT });
export const disconnect = (response) => ({ type: DISCONNECT, response });
