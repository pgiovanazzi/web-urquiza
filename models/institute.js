const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const AcademicSecretarie = require("./academicSecretary"),
  Contact = require("./contact"),
  VideoHeader = require("./videoHeader");

const homeInfoSchema = new Schema({
  description: {
    type: String,
    default:
      "Configuración de los datos del establecimiento y otros parametros, como el home del sitio, pregutas frecuentes, etc."
  },
  header: VideoHeader,
  contact: Contact,
  academicSecretary: AcademicSecretarie
});

module.exports = mongoose.model("HomeInfos", homeInfoSchema);
