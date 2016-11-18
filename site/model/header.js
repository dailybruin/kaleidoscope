var mongoose = require('mongoose');

module.exports = mongoose.model('Header', {
	text: String,
	imageUrl: String,
	imageCredit: String,
	imageCaption: String,
	author: String,
	description: String
});