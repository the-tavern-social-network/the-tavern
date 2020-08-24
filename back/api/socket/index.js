// Variable wich is going to contain the connected socket
let io;

module.exports = {
  /**
   * @param {Server} server is the server to pass to the socket
   * @returns the server with the connected socket
   */
  init: server => (io = require('socket.io')(server)),

  /**
   * @returns the connected socket or an error
   */
  getIo: () => (!io ? new Error('Socket was not initialized !') : io),
};
