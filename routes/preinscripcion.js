'use strict'

const express = require('express');
const router = express.Router();
const csrf = require('csurf');
const passport = require('passport');

var { mongoose } = require('../config/connection');
require('../config/passport');
let User = require('../models/user');

var csrfProtection = csrf({ cookie: true });
router.use(csrfProtection);

/* GET users listing. */

/*router.get('/', function(req, res, next) {
  res.render('signup');
});*/

router.get('/', function (req, res, next) {
  var messages = req.flash('error');
  res.render('preinscripcion', {csrfToken: req.csrfToken(), messages: messages, hasErrors: messages.length > 0});
});

router.post('/', passport.authenticate('local.signup', {
  successRedirect: '/',
  failureRedirect: '/preinscripcion',
  failureFlash: true
}));

module.exports = router;