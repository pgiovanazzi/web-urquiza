const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var postsSchema = new Schema({
	description: {
		type: String,
		required: true
	},
	alias: {
		type: String,
		required: true
	},
	content: {
		type: String,
		required: true
	},
	published: {
		type: Boolean,
		required: true
	},
	metaLabel: {
		type: String,
		required: false
	},
	metaDescription: {
		type: String,
		required: false
	},
	date: {
		type: Date,
		default: Date.now()
	}
});

var Posts = mongoose.model('Posts', postsSchema);

module.exports = Posts;