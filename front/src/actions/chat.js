export const ADD_CHAT_MESSAGE = 'ADD_CHAT_MESSAGE';
export const RESET_CHAT = 'RESET_CHAT';

export const addChatMessage = (message) => ({ type: ADD_CHAT_MESSAGE, message });
export const resetChat = () => ({ type: RESET_CHAT });
