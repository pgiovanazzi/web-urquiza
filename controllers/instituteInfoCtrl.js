const { HomeInfos } = require("../models");

module.exports = {
  async index(req, res) {
    try {
      const datosInstituto = await HomeInfos.find();

      res.status(200).send(datosInstituto);
    } catch (error) {
      res.status(500).send(error);
    }
  },

  async store(req, res) {
    try {
      const newInstituteDate = new HomeInfos(req.body);

      await newInstituteDate.save();

      res.status(201).send({
        success: true,
        message: "Nuevos datos del instituto se agregó correctamente."
      });
    } catch (error) {
      res.status(500).send({
        success: false,
        message: "Error al agregar nuevos datos del instituto."
      });
    }
  },

  async partialUpdate(req, res) {
    try {
      await HomeInfos.findByIdAndUpdate(req.params.id, req.body);

      res.status(200).json({
        success: true,
        message: "Los datos fueron actualizados correctamete."
      });
    } catch (error) {
      res.status(500).json({
        success: true,
        message: "Error al actualizar los datos."
      });
    }
  },

  async destroy(req, res) {
    try {
      await HomeInfos.findByIdAndRemove(req.params.id);

      res.status(200).json({
        success: true,
        message: "Datos eliminados correctamente."
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: "Ha ocurrido un error al eliminar los datos."
      });
    }
  }
};
