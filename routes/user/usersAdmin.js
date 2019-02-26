var express = require('express');
var router = express.Router();

router.get('/', (req, res, next) => {
	res.render('user/usersAdmin');
});

module.exports = router;