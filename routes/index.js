'use strict'

const express = require('express');
const router = express.Router();

/* GET home page. */

router.get('/aspirante/preinscripcion', function (req, res, next) {
   res.render('aspirant-register/preinscripcion', {});
});

router.post('/mensaje/enviado', (req, res) => {
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
