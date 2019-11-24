"use strict";

var express = require("express");
var router = express.Router();
const { pre_insc_ctrl } = require('../controllers/preInsCtrl');

router.post('/preinscripcion/aspirante-registrado', pre_insc_ctrl);

/*router.post("/preinscripcion/aspirante-registrado", async (req, res) => {
  const { mongoose } = require("../config/connection");
  const User = require("../models/user");

  try {
    const newAspirant = new User(req.body);

    await newAspirant.save();

    res
      .status(200)
      .json({ success: true, message: "Aspirante registrado exitosamente." });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Ha ocurrido un error inesperado al registrar al aspirante."
    });
  }
});*/

module.exports = router;
