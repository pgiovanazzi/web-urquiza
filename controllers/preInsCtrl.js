'use strict'

const Aspirante = require('../models').Users
const mongoose = require('mongoose')

const pre_insc_ctrl = (req, res) => {
  const {
    name,
    doc_type,
    dni,
    birth,
    gender,
    email,
    phone_number,
    year_ins,
    career,
    place_career,
    address,
    city,
    zip_code
  } = req.body;

  if (
    name &&
    doc_type &&
    dni &&
    birth &&
    gender &&
    email &&
    phone_number &&
    year_ins &&
    career &&
    place_career &&
    address &&
    city &&
    zip_code
  ) {
    Aspirante.findOne({ dni: dni }, (err, aspiranteDNI) => {
      if (err) {
        console.error(err);
        return res.status(500).json({
          success: false,
          message:
            "Ah ocurrido un error al preinscribirte, intententalo de nuevo mas tarde."
        });
      }

      if (aspiranteDNI)
        return res.status(404).json({
          success: false,
          message: "El DNI está en uso..."
        });

      Aspirante.findOne({ email: email }, (err, aspiranteEmail) => {
        if (err) {
          console.error(err);
          return res.status(500).json({
            message:
              "Ah ocurrido un error al preinscribirte, intententalo de nuevo mas tarde."
          });
        }
        if (aspiranteEmail)
          return res
            .status(404)
            .json({ message: "El correo electrónico está en uso." });

        const aspirante = new Aspirante({
          _id: new mongoose.Types.ObjectId(),
          ...req.body
        });

        const error = aspirante.validateSync();

        if (error) {
          var obj = new Array();
          for (const err in error.errors)
            if (error.errors.hasOwnProperty(err)) obj = error.errors[err];
          return res.json({
            success: false,
            message: obj.message
          });
        }

        aspirante
          .save()
          .then(result => {
            res.status(201).json({
              success: true,
              message: `${result.name} te preinscribiste correctamente.`
            });
          })
          .catch(err => {
            console.error(err);
            res.status(500).json({
              success: false,
              message:
                "Ocurrió un error al preinscribirte, intentalo nuevamente mas tarde."
            });
          });
      });
    });
  } else
    res.status(404).json({
      success: false,
      message: (() => {
        var arr = new Array();
        var c = 0;
        // recorro y almaceno los campos que faltan rellenar.
        for (const ele in req.body) {
          if (!req.body[ele]) {
            arr[c] = ele;
            c++;
          }
        }
        let msg = "Complete el o los campo/s obligatorio/s:";
        arr.forEach(elem => {
          switch (elem) {
            case "name":
              msg += ", " + "Nombre completo";
              break;
            case "doc_type":
              msg += ", " + "Tipo de Documento";
              break;
            case "dni":
              msg += ", " + "Nro de Documento";
              break;
            case "birth":
              msg += ", " + "Fecha de Nacimiento";
              break;
            case "gender":
              msg += ", " + "Genero";
              break;
            case "email":
              msg += ", " + "Email";
              break;
            case "phone_number":
              msg += ", " + "Teléfono";
              break;
            case "year_ins":
              msg += ", " + "Año de Inscripción";
              break;
            case "career":
              msg += ", " + "Carrera";
              break;
            case "place_career":
              msg += ", " + "Lugar donde va a cursar la carrera";
              break;
            case "address":
              msg += ", " + "Domicilio";
              break;
            case "city":
              msg += ", " + "Localidad de Residencia";
              break;
            case "zip_code":
              msg += ", " + "Código Postal";
              break;
            default:
              msg = "Complete los campos obligatorios...";
              break;
          }
        });
        return msg;
      })()
    });
};

module.exports = { pre_insc_ctrl };
