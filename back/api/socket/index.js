let io;

module.exports = {
  init: (server) => (io = require("socket.io")(server)),
  getIo: () => (!io ? new Error("Socket was not initialized !") : io),
}