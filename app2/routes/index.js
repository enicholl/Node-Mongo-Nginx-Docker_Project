// required modules saved as variables to be used in this file
var express = require('express');
var mongoose = require('mongoose');
var router = express.Router();
var { check, validationResult } = require('express-validator');
var Registration = mongoose.model('Registration');

// defines the route to form and renders the response to the client
router.get('/', (req,res) => {
  res.render('form', { title: 'Registration form' });
});

// use express validator to ensure form is filled out correctly
router.post('/',
  [
    check('firstname')
      .isLength({ min: 1 })
      .withMessage('Please enter a firstname'),
    check('surname')
      .isLength({ min: 1 })
      .withMessage('Please enter a surname'),
    check('location')
      .isLength({ min:1})
      .withMessage('Please enter your location'),
  ],

// stores result of validation as variable errors
  (req,res) => {
    var errors = validationResult(req);

// no errors creates thank you message, if errors present then logged and sorry message
    if (errors.isEmpty()) {
     var registration = new Registration(req.body);
     registration.save()
      .then(() => { res.send('Thank you for your registration!'); })
      .catch((err) => {
        console.log(err);
        res.send('Sorry! Something went wrong.');
      });

// if no errors, when refreshed the form will render again as normal
    } else {
      res.render('form', {
         title: 'Registration form',
         errors: errors.array(),
         data: req.body,
      });
    }
  }
);

// on page /registrations, stored registrations of the db displayed (layout from index.pug)
router.get('/registrations', (req, res) => {
 Registration.find()
   .then((registrations) => {
     res.render('index', { title: 'Listing registrations', registrations });
   })
   .catch(() => { res.send('Sorry! Something went wrong.'); });
});

// exports router to be used in other files
module.exports = router;


