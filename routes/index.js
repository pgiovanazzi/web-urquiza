'use strict'

const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
   const Posts = require('../models/posts');

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

router.get('/aspirante/preinscripcion', function (req, res, next) {
   res.render('aspirant-register/preinscripcion', {});
});

router.post('/', (req, res, next) => {
   const contactUs = require('../controllers/contactUS')

	let user = req.body
   contactUs(user, (info) => {
      if (info) {
         console.log(` The email has been send and the id is ${info.messageId}, 
         ${JSON.stringify(info.envelope)}`);
		res.status(200).json({ status: true, message: "Consulta enviada." });
      } else
      res.status(500).json({ status: false, message: 'Ocurrió un error inesperado al enviar el mensaje, vuelva a intentarlo mas tarde.'})
	});
});

module.exports = router;
