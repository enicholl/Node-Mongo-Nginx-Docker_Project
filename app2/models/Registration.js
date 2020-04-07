// require module mongoose
var mongoose = require('mongoose');

// creates db schema which maps to mongo collection
var registrationSchema = new mongoose.Schema({
  firstname: {
    type: String,
    trim: true,
  },
  surname: {
    type: String,
    trim: true,
  },
  location: {
    type: String,
    trim: true,
  },
});

// compiles model from schema and exports for use in app
module.exports = mongoose.model('Registration', registrationSchema);
