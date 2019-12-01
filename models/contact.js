const contacts = {
  description: {
    type: String,
    default:
      "La sección de contacto se encuentra en el inicio del sitio, la cual puede modificar la descripción, el lugar de la institución y el teléfono."
  },
  subTitle: {
    type: String,
    default:
      "¿Tiene alguna pregunta? No dude en ponerse en contacto con nosotros directamente. Nuestro equipo se pondrá en contacto con usted en cuestión de horas para ayudarle."
  },
  site: {
    type: Object,
    default: {
      address: "Bv. Oroño 690 - Rosario",
      floor: "Bedelía - 1º piso - Nivel Terciario"
    }
  },
  phone: {
    type: Object,
    default: { phone1: "(0341) 4721430", phone2: "(0341) 4721431" }
  },
  email: {
    type: String,
    default: "info@terciariourquiza.edu.ar"
  }
};

module.exports = contacts;
