var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('informacionIngresantes', {
		titleInformationEntering: "Información para ingresantes",
		informationEntering: "Completar con informacion para los ingresantes..."
	});
});

module.exports = router;