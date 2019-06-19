'use strict'

var express = require('express');
var router = express.Router();

router.post('/preinscripcion/aspirante-registrado', async (req, res) => {
   const { mongoose } = require('../config/connection');
   const User = require('../models/user');

   const { name, doc_type, dni, birth, gender, email,
      phone_number, year_ins, careers, place_career,
      address, floor, dpt, city, zip_code, estudios_sup,
      last_year_c, career_comp } = req.body

   let day = birth.split('/')[0]
   let month = birth.split('/')[1]
   let year = birth.split('/')[2]
   let birthConvertEnFormat = month + '/' + day + '/' + year

   try {
      const newAspirant = new User({
         name,
         doc_type,
         dni,
         birth: new Date(birthConvertEnFormat),
         gender,
         email,
         phone_number,
         year_ins,
         career: careers,
         place_career,
         address,
         floor,
         dpt,
         city,
         zip_code,
         estudios_sup,
         last_year_c,
         career_comp
      })

      await newAspirant.save()

      res.json({ 'status': 'success' })

   } catch (err) {
      res.status(500).send(err)
   }
})

module.exports = router;