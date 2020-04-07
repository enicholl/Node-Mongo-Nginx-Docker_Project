// importing the required modules for the application and saving them as variables
var express = require('express');
var routes = require('./routes/index');
var path = require('path')
var bodyParser = require('body-parser');

// create new express app and saving it as variable 'app'
var app = express();

// tells app to use pug as layout engine
app.engine('pug', require('pug').__express)

// looks inside the views folder for templates
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// uses bodyparser to format and handle data posted
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', routes);

// exports app variable so that it can be imported and used in other files
module.exports = app;
