export const isAuthor = (pseudo, author) => pseudo === author;

export const getMessagesByTavernId = (state, tavernId) => state.tavern.list[tavernId].messages;