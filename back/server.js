require('dotenv').config();
const path = require('path');
const express = require('express');
const app = express();
const multer = require('multer');
const session = require('express-session');
const server = require('http').createServer(app);
const io = require('socket.io')(server);
const RTCMultiConnectionServer = require('rtcmulticonnection-server');
const morgan = require('morgan');
const sequelize = require('./api/db/database');
const authRoutes = require('./api/routes/auth');
const mainRoutes = require('./api/routes');

const PORT = process.env.PORT || 8080;

app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(multer().none());
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: true,
    saveUninitialized: true,
  }),
);

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.header('Access-Control-Allow-Credentials', true);
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  next();
});

const baseUrl = '/api/v1';
app.use(`${baseUrl}/auth`, authRoutes);
app.use(baseUrl, mainRoutes);

io.on('connection', (socket) => {
  RTCMultiConnectionServer.addSocket(socket);
  console.log('User is connected');
  // const params = socket.handshake.query;

  console.log(socket);

  socket.on('send_message', (message) => {
    io.emit('send_message', message);
  });

  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
});

sequelize
  .authenticate()
  .then(() => server.listen(PORT, () => console.log(`Server started on port ${PORT}`)))
  .catch((err) => console.trace(err));
