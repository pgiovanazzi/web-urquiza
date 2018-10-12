var express = require('express');
var router = express.Router();
//var csrf = require('csurf');
let mongoose = require('../config/connection');
let User = require('../models/user');

// var csrfProtection = csrf();
// router.use(csrfProtection);

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('signup');
});

// router.get('/', function(req, res, next) {
//   res.render('signup', { 	csrfToken: req.csrfToken() });
// });

router.post('/', function(req, res, next) {
	res.redirect('/');
});

module.exports = router;
