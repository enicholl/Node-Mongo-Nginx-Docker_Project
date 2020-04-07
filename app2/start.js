// use dotenv to load connection details
require('dotenv').config();

// variable for use of mongoose for db connection
var mongoose = require('mongoose');

// connect to mongodb
mongoose.connect(process.env.DATABASE, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// inform if connection to db was successful or not
mongoose.connection
  .on('open', () => {
    console.log('Mongoose connection open');
  })
  .on('error', (err) => {
    console.log(`Connection error: ${err.message}`);
  });

// importing express app from app.js
require('./models/Registration');
var app = require('./app');

// telling the app to listen on port 3000 and indicate it is running
var server = app.listen(3000, () => {
  console.log('Express is running on port 3000');
});
