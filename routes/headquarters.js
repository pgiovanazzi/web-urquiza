var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('headquarters', {
		titleHeadquarters: "Sedes",
		headquartersList: "Listar las sedes..."
	});
});

module.exports = router;