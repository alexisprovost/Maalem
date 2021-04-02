const express = require('express');

//Setup express app + https + port
require('dotenv').config();
const app = express();
const port = 9000;

//Connection to DB
require('./initDB')();

app.use(express.static('public'));

app.use(express.json());

//Init routes
app.use('/',require('./routes/api'));

// error handling middleware
app.use(function(err,req,res,next){
  console.log(err);
  res.status(422).send({error: err.message});
});

// listen for requests
app.listen(port || 9000, function(){
  console.log('API server running at ' + port);
});
