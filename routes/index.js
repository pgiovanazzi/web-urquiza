'use strict'

const express = require('express');
const router = express.Router();
const Posts = require('../models/posts');
const { contactUs } = require('../controllers/contactUS')


/* GET home page. */
router.get('/', function (req, res, next) {
	Posts.find((err, posts) => {
		if (err) throw err;
	   res.render('main/index', { posts: posts });
	})
});

router.get('/nuestra-historia', function (req, res, next) {
   res.render('main/nuestraHistoria', {})
});

router.get('/sedes', function (req, res, next) {
   res.render('main/sedes', {});
});

router.get('/autoridades', function (req, res, next) {
   res.render('main/autoridades', {});
});

router.get('/biblioteca', function (req, res, next) {
   res.render('main/biblioteca', {});
});

router.get('/asociacion-cooperadora', function (req, res, next) {
   res.render('main/asociacionCooperadora', {});
});

router.get('/informacion-ingresantes', function (req, res, next) {
   res.render('main/informacionIngresantes', {});
});

router.get('/cursos-ingreso', function (req, res, next) {
   res.render('main/cursosIngreso', {});
});

router.get('/analisis-funcional', function (req, res, next) {
   res.render('main/analisisFuncional', {});
});

router.get('/infraestructura-de-tecnologia-de-la-informacion', function (req, res, next) {
   res.render('main/iti', {});
});

router.get('/desarrollo-de-software', function (req, res, next) {
   res.render('main/desarrolloSoftware', {});
});

router.get('/preinscripcion', function (req, res, next) {
   res.render('main/preinscripcion', {});
});

router.post('/', (req, res, next) => {
	let user = req.body;
	contactUs(user, info => {
		console.log(` The email has been send and the id is ${info.messageId}, ${JSON.stringify(info.envelope)}`);
		res.redirect('/');
	});
	// res.status(200).send();
});

module.exports = router;
