const { FQAs } = require("../models");

module.exports = {
  async index(req, res) {
    try {
      const fqas = await FQAs.find();

      res.status(200).send(fqas);
    } catch (error) {
      res.status(500).send(error);
    }
  },

  async store(req, res) {
    try {
      const newFQA = new FQAs(req.body);

      await newFQA.save();

      res.status(200).json({
        success: true,
        message: "Nueva pregunta frecuente agregada"
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: "Error al agregar una pregunta frecuente nueva."
      });
    }
  },

  async partialUpdate(req, res) {
    try {
      await FQAs.findByIdAndUpdate(req.params.id, req.body);

      res.status(200).json({
        success: true,
        message: "Pregunta frecuente actualizada correctamente."
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: "Error al actualizar la pregunta frecunete."
      });
    }
  },

  async destroy(req, res) {
    try {
      const question = req.body.question;

      await FQAs.findOneAndRemove(req.params.id);

      res.status(200).json({
        success: true,
        message: `La pregunta frecuente "${question}" se eliminó correctamente.`
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: "Error al eliminar la pregunta frecuente."
      });
    }
  }
};
