require('dotenv').config();
const path = require('path');
const express = require('express');
const app = express();
const multer = require('multer');
const session = require('express-session');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const RTCMultiConnectionServer = require('rtcmulticonnection-server');
const morgan = require('morgan');
const sequelize = require('./api/db/database');
const associationsRoutes = require('./api/routes/associations');
const tavernRoutes = require('./api/routes/tavern');
const authRoutes = require('./api/routes/auth');
const mainRoutes = require('./api/routes');

const PORT = process.env.PORT || 8080;

const store = new SequelizeStore({
  db: sequelize,
  checkExpirationInterval: 15 * 60 * 1000, // The interval at which to cleanup expired sessions in milliseconds.
  expiration: 3600000 * 24 * 7, // The maximum age (in milliseconds) of a valid session.
});

app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
// Tells expres to parse json
app.use(express.json());
app.use(multer().none());
// Initializes the session
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    maxAge: 3600000 * 24 * 7, // The maximum age (in milliseconds) of a valid session.
    store,
  }),
);

// Allowing localhost:3000 to access the api
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.header('Access-Control-Allow-Credentials', true);
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  next();
});

const baseUrl = '/api/v1';
app.use(`${baseUrl}/auth`, authRoutes);
app.use(baseUrl, tavernRoutes);
app.use(baseUrl, associationsRoutes);
app.use(baseUrl, mainRoutes);

// Catch all route
// Sends the index.html located in the public folder each time a route is not found
app.use('*', (req, res, next) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

sequelize
  .authenticate()
  .then(() => {
    // Stores the server in a constant
    const server = app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
    // Initializes the socket
    const io = require('./api/socket').init(server);
    io.on('connection', socket => {
      // Adds the socket to the webRTC multiconnection server for the screensharing feature
      RTCMultiConnectionServer.addSocket(socket);
    });
  })
  .catch(err => console.trace(err));
