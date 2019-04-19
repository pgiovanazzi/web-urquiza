var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('biblioteca', {
		titleLibrary: "Biblioteca",
		libraries: "Completar con los libros y textos que hay..."
	});
});

module.exports = router;