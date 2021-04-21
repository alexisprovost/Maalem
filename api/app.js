const express = require('express');
const app = express();
const passport = require('passport');
const cookieSession = require('cookie-session');
require('./passport-setup.js');
require('dotenv').config();

//Use cors to block unwanted domains to use our API
const cors = require('cors')

//Connection to DB
require('./initDB')();

//Cookie name and key
app.use(cookieSession({
  name: 'session',
  keys: ['keyyy', 'keyyy2']
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
    res.redirect('/auth/success');
  });

app.get('/auth/logout', (req, res) => {
  req.session = null;
  req.logout();
  res.redirect("/");
})

app.get('/auth', function (req, res) {
  res.json({
    message: 'user /google to use google oauth2'
  });
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

// listen for requests
app.listen(process.env.PORT || 9000, function () {
  console.log('API server running at ' + process.env.PORT);
});