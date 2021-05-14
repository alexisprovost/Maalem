

const http = require('http');
const express = require('express');
const socketio = require('socket.io');
const passport = require('passport');
const cookieSession = require('cookie-session');
const passportSocketIo = require("passport.socketio");
var cookieParser = require('cookie-parser');


//Req
require('./passport-setup.js');
require('dotenv').config();

const { addUser, removeUser, getUser, getUsersInRoom } = require('./users');

//Express init
const app = express();
const server = http.createServer(app);
const io = socketio(server, {
  cors: {
    origin: '*',
    methods: [],
    allowedHeaders: [],
    exposedHeaders: [],
    preflightContinue: true,
    credentials:true
  }
});

//Settings for cors
var whitelist = ['http://localhost:3000','http://localhost:3000/', 'http://localhost:9000','http://localhost:9000/', 'http://localhost:9000/socket.io', 'http://localhost:9000/auth', 'http://localhost:9000/socket.io/', 'http://localhost:9000/auth/']
var corsOptions = {
  origin: function (origin, callback) {
    callback(null, true)
  }
}

//Connection to DB
require('./initDB')();

app.use((req, res, next) => {
  res.append('Access-Control-Allow-Origin', ['*']);
  res.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.append('Access-Control-Allow-Headers', 'Content-Type');
  res.append('Access-Control-Allow-Credentials', 'true');
  next();
});

app.use(cookieParser())

//Cookie name and key
app.use(cookieSession({
  name: 'session',
  keys: ['19d8539b0d7942a5a6dfdeaf6803ca27']
}))

//Check if user id logged in for API access 
const isLoggedIn = (req, res, next) => {
  if (req.user) {
    next();
  } else {
    res.sendStatus(401);
  }
}

// Auth passport
app.use(passport.initialize());
app.use(passport.session());

//Google auth
app.get('/auth/failed', function (req, res) {
  res.json({
    status: 'error',
    message: `Login with google failed`
  });
});
app.get('/auth/success', isLoggedIn, function (req, res) {
  res.json(req.user);
});

app.get('/auth/google',
  passport.authenticate('google', {
    scope: ['profile', 'email']
  }));

app.get('/auth/google/callback',
  passport.authenticate('google', {
    failureRedirect: '/auth/failed'
  }),
  function (req, res) {
    res.redirect('http://localhost:3000/app');
  });

app.get('/auth/logout', (req, res) => {
  req.session = null;
  req.logout();
  res.redirect("http://localhost:3000/home");
})

app.get('/auth', function (req, res) {
  res.json(req.user);
});

app.get('/', function (req, res) {
  res.json({
    status: 'success',
    message: 'REST API for Maalem'
  });
});

app.use(express.static('public'));

app.use(express.json());

//Init routes for api
app.use('/1/', require('./routes/api'));

// error handling middleware
app.use(function (err, req, res, next) {
  console.log(err);
  res.status(422).send({
    error: err.message
  });
});

//Socket IO

/*//Start of socket io for chat
io.use(passportSocketIo.authorize({
  cookieParser: cookieParser, // the same middleware you registrer in express
  key: 'session', // the name of the cookie where express/connect stores its session_id
  secret: '19d8539b0d7942a5a6dfdeaf6803ca27', // the session_secret to parse the cookie
  store: cookieSession
}));*/

io.on('connect', (socket) => {
  console.log("socket io");

  socket.on('join', ({ name, room }, callback) => {
    const { error, user } = addUser({ id: socket.id, name, room });

    console.log("new join:" + name);

    if(error) return callback(error);

    socket.join(user.room);

    socket.emit('message', { user: 'admin', text: `${user.name}, bienvenu dans le salon ${user.room}.`});
    socket.broadcast.to(user.room).emit('message', { user: 'admin', text: `${user.name} a rejoint!` });

    io.to(user.room).emit('roomData', { room: user.room, users: getUsersInRoom(user.room) });

    callback();
  });

  socket.on('sendMessage', (message, callback) => {
    const user = getUser(socket.id);

    io.to(user.room).emit('message', { user: user.name, text: message });
    console.log(user.room+' ))))))))))))))))))))))))))))');
    callback();
  });

  socket.on('disconnect', () => {
    const user = removeUser(socket.id);

    if(user) {
      io.to(user.room).emit('message', { user: 'Admin', text: `${user.name} has left.` });
      io.to(user.room).emit('roomData', { room: user.room, users: getUsersInRoom(user.room)});
    }
  })
});

//Setup server
server.listen(process.env.PORT || 9000, () => console.log(`API has started.`));