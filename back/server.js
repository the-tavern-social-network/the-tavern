require('dotenv').config();
const path = require('path');
const express = require('express');
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server);
const PORT = process.env.PORT || 8080;

// const { User, Post } = require('./api/models');

// const model = User;
// for (let assoc of Object.keys(model.associations)) {
//   for (let accessor of Object.keys(model.associations[assoc].accessors)) {
//     console.log(model.name + '.' + model.associations[assoc].accessors[accessor] + '()');
//   }
// }

app.use(express.static(path.join(__dirname, 'public')));

io.on('connection', (socket) => {
  console.log('User is connected');

  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
});

server.listen(PORT, () => console.log(`Server started on port ${PORT}`));
