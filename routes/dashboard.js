"use strict";

const express = require("express");
const router = express.Router();
const fs = require("fs");
const path = require("path");

// DB conection
require("../config/connection");

const { Pages, Posts, Careers, Users, Students } = require("../models");
const { uploadCareerFiles, uploadContentFiles } = require("../multer.config");
const { searchPathFileByRegularExpr, createAlias } = require("./utils");
const { FILE_NAME_LEN, PREFIX_ROUTE_NAME_LEN } = require("./global-const");

// API Aspirants
router.get("/registros/aspirantes", async (req, res) => {
  try {
    const aspirantes = await Users.find();

    res.status(200).send(aspirantes);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.delete("/aspirante/elimiar/:id", async (req, res) => {
  try {
    // Remove post from database
    await Users.findByIdAndRemove(req.params.id);

    res.status(200).json({
      success: true,
      message: "Se ha eliminado correctamente."
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error al elimiar al aspirante."
    });
  }
});

router.put("/aspirante/actualizar/:id", async (req, res) => {
  try {
    await Users.findByIdAndUpdate(req.params.id, req.body);

    res.status(200).json({
      success: true,
      message: "El aspirante fue actualizado correctamente."
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Ocurrio un error al acualizar el aspirante."
    });
  }
});

// API Students
router.get("/alumnos", async (req, res) => {
  try {
    const students = await Students.find();

    res.status(200).send(students);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.post("/nuevo-alumno", async (req, res) => {
  try {
    const newStrudent = new Students(req.body);
    await newStrudent.save();

    res.status(200).json({
      success: true,
      message: `${req.body.name} fue agregado a la base de datos de alumnos.`
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Ha ocurrido un error al agregar al estudiante."
    });
  }
});

router.put("/alumnos/modificar/:id", async (req, res) => {
  try {
    await Students.findByIdAndUpdate(req.params.id, req.body);

    res.status(200).json({
      success: true,
      message: `El alumno: ${req.body.name} fue actualizado correctamente.`
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: `Ocurrio un error al acualizar los datos el alumno.`
    });
  }
});

router.delete("/alumnos/eliminar/:id", async (req, res) => {
  try {
    let alumno = req.body.name;
    await Students.findByIdAndRemove(req.params.id);

    res.status(200).json({
      success: true,
      message: `El alumno ${alumno} fue eliminado correctamente.`
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Ha ocurrido un error al elminiar al alumno."
    });
  }
});

// API CKEditor content files
router.post(
  "/api/ckeditor-content-files",
  uploadContentFiles,
  async (req, res) => {
    try {
      const FILE_NAME = req.files[0].filename;

      res.status(200).send({
        uploaded: true,
        url: `/publication-content-files/${FILE_NAME}`
      });
    } catch (error) {
      res.status(500).json({
        uploaded: false,
        error: {
          message: "No pudo subirse la imagen."
        }
      });
    }
  }
);

// API Posts
router.get("/publicaciones", async (req, res, next) => {
  try {
    const publicaciones = await Posts.find();
    res.status(200).send(publicaciones);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.post("/nueva-publicacion", async (req, res, next) => {
  try {
    req.body.alias = createAlias(req.body.description);

    // If exist alias
    const posts = await Posts.find();

    for (let index = 0; index < posts.length; index++) {
      if (
        posts[index].alias === req.body.alias ||
        posts[index]._id == req.body._id
      ) {
        return res.status(200).json({
          success: false,
          message: "El nombre de la descripción ya existe, cambie el nombre."
        });
      }
    }

    // if not exist, then
    const newPost = new Posts(req.body);

    await newPost.save();

    res.status(200).json({
      success: true,
      message: "Publicación creada."
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Ha corrido un error al crear la publicación."
    });
  }
});

router.put("/publicaciones/editar/:id", async (req, res) => {
  try {
    req.body.alias = createAlias(req.body.description);

    // If exist alias
    const posts = await Posts.find();

    for (let index = 0; index < posts.length; index++) {
      if (
        posts[index].alias === req.body.alias &&
        posts[index]._id != req.body._id
      ) {
        return res.status(200).json({
          success: false,
          message: "El nombre de la descripción ya existe, cambie el nombre."
        });
      }
    }

    // if not exist alias, next
    await Posts.findByIdAndUpdate(req.params.id, req.body);

    res.status(200).json({
      success: true,
      message: "Novedad actualizada correctamente."
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Ha ocurrido un error, no se pudo editar."
    });
  }
});

router.delete("/publicaciones/eliminar/:id", async (req, res) => {
  try {
    // Remove image file content from server
    const post = await Posts.findById(req.params.id);

    const setPathFiles = searchPathFileByRegularExpr(
      post.content,
      '<img src="',
      FILE_NAME_LEN,
      PREFIX_ROUTE_NAME_LEN
    );

    setPathFiles.forEach(pathFile => {
      fs.stat(path.join(__dirname, `..${pathFile}`), (err, stats) => {
        if (!err) fs.unlinkSync(path.join(__dirname, `..${pathFile}`));
      });
    });

    // Remove post from database
    await Posts.findByIdAndRemove(req.params.id);
    res.status(200).json({
      success: true,
      message: "Se ha eliminado correctamente."
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "No se pudo eliminar, ha ocurrido un error."
    });
  }
});

// API Pages
router.get("/paginas", async (req, res) => {
  try {
    const pages = await Pages.find();
    res.status(200).send(pages);
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Ocurrió un error inesperado al cargar páginas."
    });
  }
});

router.post("/nueva-pagina", async (req, res) => {
  try {
    req.body.alias = createAlias(req.body.description);

    // TODO verificar si ya existe el alias

    req.body.url = req.body.alias;

    const newPage = new Pages(req.body);
    await newPage.save();
    res.status(201).json({
      success: true,
      message: "Página creada correctamente."
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Ocurrió un error al crear la página."
    });
  }
});

router.put("/pagina/editar/:id", async (req, res) => {
  try {
    await Pages.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).json({
      success: true,
      message: "Página actualizada correctamente."
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Ocurrió un error al editar la página."
    });
  }
});

router.delete("/pagina/eliminar/:id", async (req, res) => {
  try {
    // Remove image file content from server
    const page = await Pages.findById(req.params.id);

    const setPathFiles = searchPathFileByRegularExpr(
      page.content,
      '<img src="',
      FILE_NAME_LEN,
      PREFIX_ROUTE_NAME_LEN
    );

    setPathFiles.forEach(pathFile => {
      fs.stat(path.join(__dirname, `..${pathFile}`), (err, stats) => {
        if (!err) fs.unlinkSync(path.join(__dirname, `..${pathFile}`));
      });
    });

    // Remove page from database
    await Pages.findByIdAndRemove(req.params.id);
    res.status(200).json({
      success: true,
      message: "Página eliminada correctamente."
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Ocurrió un error al eliminar la página."
    });
  }
});

// API Careers
router.post("/carrera/nueva", uploadCareerFiles, async (req, res) => {
  try {
    req.body.alias = createAlias(req.body.description);

    // If exist alias
    const careers = await Careers.find();

    for (const { _id, alias } of careers) {
      if (_id == req.body._id || alias === req.body.alias) {
        fs.unlinkSync(req.files.studyPlanFile[0].path);
        fs.unlinkSync(req.files.logotype[0].path);

        return res.status(200).json({
          success: false,
          message: "El nombre de la descripción ya existe, cambie el nombre."
        });
      }
    }

    // If not exist alias
    // add path files
    req.body.studyPlanFile = req.files.studyPlanFile[0].filename;
    req.body.logotype = req.files.logotype[0].filename;

    // create url
    req.body.url = req.body.alias;

    const newCarrer = new Careers(req.body);
    await newCarrer.save();

    res.status(201).json({
      success: true,
      message: "Nueva carrera creada."
    });
  } catch (error) {
    fs.unlinkSync(req.files.studyPlanFile[0].path);
    fs.unlinkSync(req.files.logotype[0].path);

    res.status(500).json({
      success: false,
      message: "Ocurrió un error inesperado."
    });
  }
});

router.get("/carreras", async (req, res) => {
  try {
    const careers = await Careers.find();
    res.status(200).send(careers);
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Ocurrió un error inesperado."
    });
  }
});

router.put("/carrera/editar/:id", async (req, res) => {
  try {
    await Careers.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).json({
      success: true,
      message: "La carrera ha sido actualizada."
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Ocurrió un error inesperado."
    });
  }
});

router.delete("/carrera/eliminar/:id", async (req, res) => {
  try {
    const career = await Careers.findById(req.params.id);

    // Remove Icon and Study plan fline from server
    fs.unlinkSync(
      path.join(__dirname, `../uploaded-files/${career.studyPlanFile}`)
    );
    fs.unlinkSync(path.join(__dirname, `../uploaded-files/${career.logotype}`));

    // Remove image file content from server
    const setPathFiles = searchPathFileByRegularExpr(
      career.content,
      '<img src="',
      FILE_NAME_LEN,
      PREFIX_ROUTE_NAME_LEN
    );

    setPathFiles.forEach(pathFile => {
      fs.stat(path.join(__dirname, `..${pathFile}`), (err, stats) => {
        if (!err) fs.unlinkSync(path.join(__dirname, `..${pathFile}`));
      });
    });

    // Remove career from database
    await Careers.findByIdAndRemove(req.params.id);
    res.status(200).json({
      success: true,
      message: "Carrera eliminada correctametne."
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Ha ocurrido un error al eliminar la carrera."
    });
  }
});

module.exports = router;
