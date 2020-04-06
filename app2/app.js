var express = require('express');
var routes = require('./routes/index');
var path = require('path')
var bodyParser = require('body-parser');

var app = express();

app.engine('pug', require('pug').__express)

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', routes);

module.exports = app;
