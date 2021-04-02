const express = require('express');
const mongoose = require('mongoose');

//Setup express app + https + port
require('dotenv').config();
const app = express();
const https = require('https');
const fs = require('fs');
const port = 443;

//Connection to DB
require('./initDB')();

app.use(express.static('public'));

app.use(express.json());

//Init routes
app.use('/api',require('./routes/api'));

// error handling middleware
app.use(function(err,req,res,next){
  console.log(err);
  res.status(422).send({error: err.message});
});

const httpsOptions = {
  key: fs.readFileSync('./cert.key'),
  cert: fs.readFileSync('./cert.pem')
}

const server = https.createServer(httpsOptions, app).listen(port, () => {
  console.log('API server running at ' + port);
})
