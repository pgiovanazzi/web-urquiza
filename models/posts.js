const mongoose = require('mongoose');
var Schema = mongoose.Schema;

var postsSchema = new Schema({
	title: { type: String, required: true },
	content: {type: String, required: true},
	published: {type: String, required: true},
	metaLabel: { type: String, required: false },
	metaDescription: {type: String, required: false},
	date: { type: Date, required: true },
});

let Posts = mongoose.model('Posts', postsSchema);

module.exports = Posts;