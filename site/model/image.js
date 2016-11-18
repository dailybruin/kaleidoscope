var mongoose = require('mongoose');

module.exports = mongoose.model('Image', {
	//  url, credit, caption
	url: String,
	credit: String,
	caption: String
});