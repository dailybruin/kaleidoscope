var mongoose = require('mongoose');
//var imageObject = require('./imageObject.js');

module.exports = mongoose.model('Page', {
	authors: Array,
	images: Array,
	title: String,
	coverPhoto: {type : mongoose.Schema.ObjectId, ref : 'Image'},
	subheading: String,
	quotes: Array,
	text: Array
});