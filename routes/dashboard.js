'use strict'

var express = require('express');
var router = express.Router();

const {
   mongose
} = require('../config/connection');

const Users = require('../models/user')
const Posts = require('../models/posts')
const Pages = require('../models/pages')
const Careers = require('../models/careers')

router.get('/registros/aspirantes', async (req, res, next) => {
   try {
      const aspirantes = await Users.find()
      res.status(200).send(aspirantes);
   } catch (error) {
      res.status(500).send(error)
   }
});

// API Posts
router.get('/publicaciones', async (req, res, next) => {
   try {
      const publicaciones = await Posts.find()
      res.status(200).send(publicaciones)
   } catch (error) {
      res.status(500).send(error)
   }
});

router.post('/nueva-publicacion', async (req, res, next) => {
   try {
      req.body.alias = req.body.description.toLowerCase().replace(/ /g, '-').replace(/[¿?¡!*%$#@()_+=<>~]/g, "").replace(/á/g, 'a').replace(/é/g, 'e').replace(/í/g, 'i').replace(/ó/g, 'o').replace(/ú/g, 'u')

      // If exist alias
      const posts = await Posts.find()

      for (let index = 0; index < posts.length; index++) {
         if (posts[index].alias === req.body.alias || posts[index]._id == req.body._id) {
            return res.status(200).json({
               success: false,
               message: 'El nombre de la descripción ya existe, cambie el nombre.'
            })
         }
      }

      // if not exist, next
      const newPost = new Posts(req.body);

      await newPost.save();

      res.status(200).json({
         success: true,
         message: "Publicacion creada."
      })
   } catch (error) {
      res.status(500).json({
         success: false,
         message: error
      })
   }
});

router.put('/publicaciones/editar/:id', async (req, res) => {
   try {
      // format alias
      req.body.alias = req.body.description.toLowerCase().replace(/ /g, '-').replace(/[¿?¡!*%$#@()_+=<>~]/g, "").replace(/á/g, 'a').replace(/é/g, 'e').replace(/í/g, 'i').replace(/ó/g, 'o').replace(/ú/g, 'u')

      // If exist alias
      const posts = await Posts.find()

      for (let index = 0; index < posts.length; index++) {
         if (posts[index].alias === req.body.alias && posts[index]._id != req.body._id) {
            return res.status(200).json({
               success: false,
               message: 'El nombre de la descripción ya existe, cambie el nombre.'
            })
         }
      }

      // if not exist alias, next
      await Posts.findByIdAndUpdate(req.params.id, req.body)

      res.status(200).json({
         success: true,
         message: 'Novedad actualizada correctamente.'
      })
   } catch (error) {
      res.status(500).json({
         success: false,
         message: 'Ha ocurrido un error, no se pudo editar.'
      })
   }
})

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

// API Pages
router.get('/paginas', async (req, res) => {
   try {
      const pages = await Pages.find()
      res.status(200).send(pages)
   } catch (error) {
      res.status(500).json({
         success: false,
         message: "Ocurrió un error inesperado al cargar páginas."
      })
   }
})

router.post('/nueva-pagina', async (req, res) => {
   try {
      req.body.alias = req.body.description.toLowerCase().replace(/ /g, '-').replace(/[¿?¡!*%$#@()_+=<>~]/g, "").replace(/á/g, 'a').replace(/é/g, 'e').replace(/í/g, 'i').replace(/ó/g, 'o').replace(/ú/g, 'u')
      req.body.url = req.body.alias

      const newPage = new Pages(req.body)
      await newPage.save()
      res.status(201).json({
         success: true,
         message: 'Página creada correctamente.'
      })
   } catch (error) {
      res.status(500).json({
         success: false,
         message: 'Ocurrió un error al crear la página.'
      })
   }
})

router.put('/pagina/editar/:id', async (req, res) => {
   try {
      await Pages.findByIdAndUpdate(req.params.id, req.body)
      res.status(200).json({
         success: true,
         message: 'Página actualizada correctamente.'
      })
   } catch (error) {
      res.status(500).json({
         success: false,
         message: 'Ocurrió un error al editar la página.'
      })
   }
})

router.delete('/pagina/eliminar/:id', async (req, res) => {
   try {
      await Pages.findByIdAndRemove(req.params.id)
      res.status(200).json({
         success: true,
         message: 'Página eliminada correctamente.'
      })
   } catch (error) {
      res.status(500).json({
         success: false,
         message: 'Ocurrió un error al eliminar la página.'
      })
   }
})

// API Careers
router.post('/carrera/nueva', async (req, res) => {
   try {
      // path files added
      req.body.studyPlanFile = req.files.studyPlanFile[0].path
      req.body.logotype = req.files.logotype[0].path

      // create alias
      req.body.alias = req.body.description.toLowerCase().replace(/ /g, '-').replace(/[¿?¡!*%$#@()_+=<>~]/g, "").replace(/á/g, 'a').replace(/é/g, 'e').replace(/í/g, 'i').replace(/ó/g, 'o').replace(/ú/g, 'u')

      // create url
      req.body.url = req.body.alias

      const newCarrer = new Careers(req.body)
      await newCarrer.save()
      
      res.status(201).json({
         success: true,
         message: "Nueva carrera creada."
      })
   } catch (error) {
      res.status(500).json({
         success: false,
         message: "Ocurrió un error inesperado."
      })
   }
})

router.get('/carreras', async (req, res) => {
   try {
      const careers = await Careers.find()
      res.status(200).send(careers)
   } catch (error) {
      res.status(500).json({
         success: false,
         message: "Ocurrió un error inesperado."
      })
   }
})

router.put('/carrera/editar/:id', async (req, res) => {
   try {
      await Careers.findByIdAndUpdate(req.params.id, req.body)
      res.status(200).json({
         success: true,
         message: "La carrera ha sido actualizada."
      })
   } catch (error) {
      res.status(500).json({
         success: false,
         message: "Ocurrió un error inesperado."
      })
   }
})

router.delete('/carrera/eliminar/:id', async (req, res) => {
   try {
      await Careers.findByIdAndRemove(req.params.id)
      res.status(200).json({
         success: true,
         message: "Carrera eliminada correctametne."
      })
   } catch (error) {
      res.status(500).json({
         success: false,
         message: "Ha ocurrido un error al eliminar la carrera."
      })
   }
})

module.exports = router;