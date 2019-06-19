'use strict'

var express = require('express');
var router = express.Router();
const { mongose } = require('../config/connection');

const Users = require('../models/user')
var Posts = require('../models/posts');

router.get('/principal', (req, res, next) => {
   res.render('dashboard/mainAdmin');
});

router.get('/paginas', (req, res, next) => {
   res.render('dashboard/pagesAdmin');
});

router.get('/publicaciones', (req, res, next) => {
   res.render('dashboard/postsAdmin');
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
      res.json(aspirantes);
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

      res.redirect('/su/panel/principal');
   } catch (error) {
      res.status(500).send(error)
   }
});

module.exports = router;