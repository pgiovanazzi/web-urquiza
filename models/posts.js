const mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Hashids = require('hashids');

var postsSchema = new Schema({
	title: { type: String, required: true },
	content: {type: String, required: true},
	published: {type: String, required: true},
	metaLabel: { type: String, required: false },
	metaDescription: {type: String, required: false},
	date: { type: Date, required: true },
});

var hashids = new Hashids("q*_*p q*_*p", 9, "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890");

var id = hashids.encode(postsSchema._id);

// var numbers = hashids.decode(id);

let Posts = mongoose.model('Posts', postsSchema);

module.exports = Posts;