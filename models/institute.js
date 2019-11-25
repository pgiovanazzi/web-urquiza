const { Schema, Model } = require("mongoose");
const { VideoHeaders, Contacts, FQAs, AcademicSecretaries } = require("./");

const homeInfoSchema = new Schema({
  description: {
    type: String,
    default:
      "Configuración de los datos del establecimiento y otros parametros, como el home del sitio, pregutas frecuentes, etc."
  },
  header: VideoHeaders,
  contact: Contacts,
  FQA: FQAs,
  AcademicSecretary: AcademicSecretaries
});

module.exports = Model("HomeInfos", homeInfoSchema);
