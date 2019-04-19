'use strict'

var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('autoridades', {
		titleAuthorities: "Autoridades",
		authoritiesNames: "Completar con nombres de las autoridades..."
	});
});

module.exports = router;