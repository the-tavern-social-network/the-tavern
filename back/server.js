require('dotenv').config();
const path = require('path');
const express = require('express');
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server);
const RTCMultiConnectionServer = require('rtcmulticonnection-server');

const PORT = process.env.PORT || 8080;

app.use(express.static(path.join(__dirname, 'public')));

io.on('connection', (socket) => {
  RTCMultiConnectionServer.addSocket(socket);
  // const params = socket.handshake.query;

  console.log('User is connected');

  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
});

server.listen(PORT, () => console.log(`Server started on port ${PORT}`));
