const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcrypt-nodejs");

const userSchema = new Schema({
  name: {
    type: String,
    required: [true, 'El nombre y el apellido es requerido.']
  },
  doc_type: {
    type: String,
    required: [true, 'El tipo de documento es requerido.']
  },
  dni: {
    type: String,
    unique: true,
    required: [true, 'El numero de documento es requerido.']
  },
  birth: {
    type: Date,
    required: true
  },
  gender: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: [true, 'El email es requerido.'],
    validate: {
      validator: (em) => {
        return /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(em)
      },
      message: props => `${props.value} no es un email valido.`
    }
  },
  phone_number: {
    type: String,
    required: [true, 'El numero de telefono es requerido.'],
    validate: {
      validator: (tel) => {
        return /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/.test(tel)
      },
      message: props => `${props.value} no es un numero de teléfono valido.`
    }
  },
  year_ins: {
    type: String,
    required: [true, 'El año de inscripción es requerido.'],
    validate: {
      validator: (year) => {
        let y = new Date()
        y = y.getFullYear()
        if (year < y || year >= y + 2)
          return false
        return true
      },
      message: props => `El año ${props.value} es menor al año actual.`
    }
  },
  career: {
    type: String,
    required: [true, 'La carrera es requerida.']
  },
  place_career: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  floor: {
    type: String
  },
  dpt: {
    type: String
  },
  city: {
    type: String,
    required: true
  },
  zip_code: {
    type: String,
    required: true
  },
  estudios_sup: {
    type: String
  },
  last_year_c: {
    type: String
  },
  career_comp: {
    type: String
  },
  signupDate: {
    type: Date,
    default: Date.now()
  }
});

//function random psswrd
function make_pwd() {
  let text = "";
  const possible = "abcdefghijklmnopqrstuvwxyz0123456789";

  for (var i = 0; i < 6; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));

  return text;
}

//method for encrypt password
// userSchema.methods.encryptPassword = function (pwd) {
// 	return bcrypt.hashSync(pwd, bcrypt.genSaltSync(5), null);
// }

// userSchema.methods.validPassword = function (pwd) {
// 	return bcrypt.compareSync(pwd, this.pwd);
// }

module.exports = mongoose.model("User", userSchema);
