var express = require('express');
var router = express.Router();

var mongoose = require('../config/connection');
var Posts = require('../models/posts');

/* GET home page. */
router.get('/', function (req, res, next) {
	Posts.find((err, posts) => {
		if (err) throw err;
		res.render('index', { posts: posts });
	})
	// res.render('index', {
	// 	news: 'Noticias',
	// 	newSummary: 'Resumen de las noticias',
	// 	textNews: 'Texto de la noticia',
	// 	text1: 'texto1 texto1 texto1 texto1 texto1 texto1 texto1 texto1 texto1 texto1 texto1 texto1 texto1 texto1 texto1 texto1 texto1 texto1 texto1 texto1 texto1 texto1 texto1 texto1 texto1 ',
	// 	text2: 'texto2 texto2 texto2 texto2 texto2 texto2 texto2 texto2 texto2 texto2 texto2 texto2 texto2 texto2 texto2 texto2 texto2 texto2 texto2 texto2 texto2 texto2 texto2 texto2 texto2 ',
	// 	text3: 'texto3 texto3 texto3 texto3 texto3 texto3 texto3 texto3 texto3 texto3 texto3 texto3 texto3 texto3 texto3 texto3 texto3 texto3 texto3 texto3 texto3 texto3 texto3 texto3 texto3 ',
	// 	text4: 'texto4 texto4 texto4 texto4 texto4 texto4 texto4 texto4 texto4 texto4 texto4 texto4 texto4 texto4 texto4 texto4 texto4 texto4 texto4 texto4 texto4 texto4 texto4 texto4 texto4 ',
	// 	text5: 'texto5 texto5 texto5 texto5 texto5 texto5 texto5 texto5 texto5 texto5 texto5 texto5 texto5 texto5 texto5 texto5 texto5 texto5 texto5 texto5 texto5 texto5 texto5 texto5 texto5 '
	// });
});

module.exports = router;
