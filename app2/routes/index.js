var express = require('express');
var mongoose = require('mongoose');
var router = express.Router();
var { check, validationResult } = require('express-validator');
var Registration = mongoose.model('Registration');

router.get('/', (req,res) => {
  res.render('form', { title: 'Registration form' });
});

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
  (req,res) => {
    var errors = validationResult(req);

    if (errors.isEmpty()) {
     var registration = new Registration(req.body);
     registration.save()
      .then(() => { res.send('Thank you for your registration!'); })
      .catch((err) => {
        console.log(err);
        res.send('Sorry! Something went wrong.');
      });
    } else {
      res.render('form', {
         title: 'Registration form',
         errors: errors.array(),
         data: req.body,
      });
    }
  }
);

router.get('/registrations', (req, res) => {
 Registration.find()
   .then((registrations) => {
     res.render('index', { title: 'Listing registrations', registrations });
   })
   .catch(() => { res.send('Sorry! Something went wrong.'); });
});

module.exports = router;
