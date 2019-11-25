const { Schema, Model } = require("mongoose");

const videoHeaderSchema = new Schema({
  description: {
    type: String,
    default:
      "En esta sección podrá editar el texto del video del home del sitio."
  },
  titleMask: {
    type: String,
    default: "DS | AF | ITI"
  },
  descriptionMask: {
    type: String,
    default:
      "Las nuevas carreras que dicta la institución, con alta demanda laboral y altamente cualificadas."
  }
});

module.exports = Model("VideoHeaders", videoHeaderSchema);
