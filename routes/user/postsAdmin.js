'use strict'
var express = require('express');
var router = express.Router();

let mongose = require('../../config/connection');
let Posts = require('../../models/posts');

router.get('/', function(req, res, next){
		res.render('user/postsAdmin', {});
});

router.post('/', (req, res, next) => {
	let newPost = new Posts({
		title: req.body.title,
		content: req.body.content,
		published: req.body.published,
		metaLabel: req.body.metaLabel,
		metaDescription: req.body.metaDescription,
		date: Date()
	});
	newPost.save();

	res.redirect('/user/postsAdmin');
});

module.exports = router;