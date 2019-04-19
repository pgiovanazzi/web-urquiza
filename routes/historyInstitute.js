var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('nuestraHistoria', {
		titleHistoryInstitute: "Nuestra historia",
		historyInstitute: "Completar historia..."
	});
});

module.exports = router;