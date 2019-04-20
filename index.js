'use strict';

// include libraries
var express = require('express');

// setup app
var app = express();

// start server
var server = app.listen(4000, function() {
  console.log("Listening to requests on port 4000");
});

// middleware to serve static/public files
app.use(express.static('client'));
