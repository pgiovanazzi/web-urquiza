var express = require('express');
var router = express.Router();

var mongose = require('../config/connection');
var Posts = require('../models/posts');

router.get('/principal', function (req, res, next) {
   res.render('dashboard/mainAdmin');
});

router.get('/paginas', function (req, res, next) {
   res.render('dashboard/pagesAdmin');
});

router.get('/publicaciones', function (req, res, next) {
   res.render('dashboard/postsAdmin');
});

router.get('/registros', function (req, res, next) {
   res.render('dashboard/usersAdmin');
});

router.post('/nueva-publicacion', (req, res, next) => {
   let newPost = new Posts({
      title: req.body.title,
      content: req.body.content,
      published: req.body.published,
      metaLabel: req.body.metaLabel,
      metaDescription: req.body.metaDescription
   });
   newPost.save();

   res.redirect('/su/panel/principal');
});

module.exports = router;