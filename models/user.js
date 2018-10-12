const mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
	name: {type: String, required: true},
	pwd: {type: String, required: true},
	dni: {type: Number, required: true},
	birth: {type: Date, required: true},
	gender: {type: String, required: true},
	email: {type: String, required: true},
	phone: {type: Number, required: true},
	career: {type: String, required: true},
	address: {type: String, required: true},
	city: {type: String, required: true},
	zipCode: {type: Number, required: true}
});

module.exports = mongoose.model('User', userSchema);