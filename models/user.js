const mongoose = require('mongoose');
var Schema = mongoose.Schema;
var bcrypt = require('bcrypt-nodejs');

var userSchema = new Schema({
	name: { type: String, required: true },
	doc_type:{type: String, required: true},
	dni: { type: Number, required: true },
	pwd: { type: String },
	birth: {type: Date, required: true},
	gender: {type: String, required: true},
	email: {type: String, required: true},
	phone: { type: Number, required: true },
	year_ins:{type: Number, required: true},
	career: { type: String, required: true },
	place_career: {type: String, required: true},
	address: { type: String, required: true },
	floor: { type: Number },
	dpt: { type: String },
	city: {type: String, required: true},
	zipCode: { type: Number, required: true },
	estudios_sup: { type: String },
	last_year_c: { type: Number },
	career_comp: { type: String }
});

//method for encrypt password
userSchema.methods.encryptPassword = function (pwd) {
	return bcrypt.hashSync(pwd, bcrypt.genSaltSync(5), null);
}

userSchema.methods.validPassword = function (pwd) {
	return bcrypt.compareSync(pwd, this.pwd);
}

module.exports = mongoose.model('User', userSchema);