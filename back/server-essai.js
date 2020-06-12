const app = require('express')();
const http = require('http').createServer(app);
const io = require ( 'socket.io' )(http);

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {
  socket.on('chat message', (msg) => {
    io.emit('chat message', msg);
  });
});

http.listen(3000, () => {
  console.log('listening on *:3000');
});



var socket = io.connect();
data = {name: userName, userId: socket.id};
socket.emit('setSocketId', data);


var userNames = {};
socket.on('setSocketId' function(data) {
    var userName = data.name;
    var userId = data.userId;
    userNames[userName] = userId;
});