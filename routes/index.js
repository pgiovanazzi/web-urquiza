'use strict'

const express = require('express');
const router = express.Router();
const Posts = require('../models/posts');
const { contactUs } = require('../controllers/contactUS')


/* GET home page. */
router.get('/', function (req, res, next) {
	Posts.find((err, posts) => {
		if (err) throw err;
		res.render('index', { posts: posts });
	})
});

router.post('/', (req, res, next) => {
	let user = req.body;
	contactUs(user, info => {
		console.log(` The email has been send and the id is ${info.messageId}, ${JSON.stringify(info.envelope)}`);
	})
	res.redirect('/')
})

module.exports = router;
