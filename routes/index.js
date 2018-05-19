var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
	res.render('index', {
		title: 'Esc. Urquiza',
		news: 'Noticias',
		newSummary: 'Resumen de las noticias',
		textNews: 'Texto de la noticia',
		text1: 'texto1 texto1 texto1 texto1 texto1 texto1 texto1 texto1 texto1 texto1 texto1 texto1 texto1 texto1 texto1 texto1 texto1 texto1 texto1 texto1 texto1 texto1 texto1 texto1 texto1 ',
		text2: 'texto2 texto2 texto2 texto2 texto2 texto2 texto2 texto2 texto2 texto2 texto2 texto2 texto2 texto2 texto2 texto2 texto2 texto2 texto2 texto2 texto2 texto2 texto2 texto2 texto2 ',
		text3: 'texto3 texto3 texto3 texto3 texto3 texto3 texto3 texto3 texto3 texto3 texto3 texto3 texto3 texto3 texto3 texto3 texto3 texto3 texto3 texto3 texto3 texto3 texto3 texto3 texto3 ',
		text4: 'texto4 texto4 texto4 texto4 texto4 texto4 texto4 texto4 texto4 texto4 texto4 texto4 texto4 texto4 texto4 texto4 texto4 texto4 texto4 texto4 texto4 texto4 texto4 texto4 texto4 ',
		text5: 'texto5 texto5 texto5 texto5 texto5 texto5 texto5 texto5 texto5 texto5 texto5 texto5 texto5 texto5 texto5 texto5 texto5 texto5 texto5 texto5 texto5 texto5 texto5 texto5 texto5 '
	});
});

module.exports = router;
