var mongoose = require('mongoose');

module.exports = mongoose.model('Page', {
	authors: Array,
	images: Array,
	title: String,
	coverPhoto: {type : mongoose.Schema.ObjectId, ref : 'Image'},
	subheading: String,
	quotes: Array,
	text: Array
	// TODO page join table to replace above
	// componentType: String,
	// componentId: String
});