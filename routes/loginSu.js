var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
   res.render('SU/LSU');
   
   // Cuando loguea tiene que redireccionar al dashboard principal
});

module.exports = router;