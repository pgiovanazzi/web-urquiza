var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('cursosIngresos', {
		titleCoursesEntrants: "Cursos para ingresantes",
		CoursesEntrants: "Completar con curos para los ingresantes..."
	});
});

module.exports = router;