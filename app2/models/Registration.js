var mongoose = require('mongoose');

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

module.exports = mongoose.model('Registration', registrationSchema);
