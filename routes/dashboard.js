'use strict'

var express = require('express');
var router = express.Router();
const {
   mongose
} = require('../config/connection');

const Users = require('../models/user')
const Posts = require('../models/posts')
const Careers = require('../models/careers')

router.get('/principal', (req, res, next) => {
   res.render('dashboard/mainAdmin');
});

router.get('/paginas', (req, res, next) => {
   res.render('dashboard/pagesAdmin');
});

router.get('/registros', (req, res, next) => {
   res.render('dashboard/usersAdmin');
});

router.get('/registros', (req, res, next) => {
   res.render('dashboard/usersAdmin');
});

router.get('/registros/aspirantes', async (req, res, next) => {
   try {
      const aspirantes = await Users.find()
      res.send(aspirantes);
   } catch (error) {
      res.status(500).send(error)
   }
});

router.get('/publicaciones', async (req, res, next) => {
   try {
      const publicaciones = await Posts.find()
      res.send(publicaciones)
   } catch (error) {
      res.status(500).send(error)
   }
});

router.post('/nueva-publicacion', async (req, res, next) => {
   try {
      let newPost = new Posts({
         title: req.body.title,
         content: req.body.content,
         published: req.body.published,
         metaLabel: req.body.metaLabel,
         metaDescription: req.body.metaDescription
      });

      await newPost.save();

      res.status(200).json({
         message: "Publicacion creada."
      })
   } catch (error) {
      res.status(500).send(error)
   }
});

router.delete('/publicaciones/eliminar/:id', async (req, res) => {
   try {
      await Posts.findByIdAndRemove(req.params.id)
      res.status(200).json({
         success: true,
         message: 'Se ha eliminado correctamente.'
      })
   } catch (error) {
      res.status(500).json({
         success: false,
         message: 'No se pudo eliminar, ha ocurrido un error.'
      })
   }
});

router.post('/carrera/nueva', async (req, res) => {
   try {
      const newCarrer = new Careers(req.body)
      await newCarrer.save()
      res.status(201).json({
         message: "Nueva carrera creada."
      })
   } catch (error) {
      res.status(500).json({
         message: "Ocurrio un error inesperado."
      })
   }
})

router.get('/carreras', async (req, res) => {
   try {
      const careers = await Careers.find()
      res.status(200).send(careers)
   } catch (error) {
      res.status(500).json({
         message: "Ocurrio un error inesperado."
      })
   }
})

router.put('/carrera/editar/:id', async (req, res) => {
   try {
      await Careers.findByIdAndUpdate(req.params.id, req.body)
      res.status(200).json({
         message: "La carrera ha sido actualizada."
      })
   } catch (error) {
      res.status(500).json({
         message: "Ocurrio un error inesperado."
      })
   }
})

module.exports = router;