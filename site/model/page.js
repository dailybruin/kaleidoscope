var mongoose = require('mongoose');

module.exports = mongoose.model('Page', {
	authors: Array,
	sideImages: Array,
	mainImages: Array,
	title: String,
	coverPhoto: String,
	coverPhotoCaption: String,
	subheading: String,
	mainImageCaptions: Array,
	sideImageCaptions: Array,
	quotes: Array,
	quoteMakers: Array,
	paragraphs: Array
});