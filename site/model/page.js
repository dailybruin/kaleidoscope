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

// var pageSchema = new mongoose.Schema({
// 	authors: Array,
// 	sideImages: Array,
// 	mainImages: Array,
// 	title: String,
// 	coverPhoto: String,
// 	coverPhotoCaption: String,
// 	subheading: String,
// 	mainImageCaptions: Array,
// 	sideImageCaptions: Array,
// 	quotes: Array,
// 	quoteMakers: Array,
// 	paragraphs: Array
// });

// // Compile a 'Movie' model using the movieSchema as the structure.
// // Mongoose also creates a MongoDB collection called 'Movies' for these documents.
// var Page = mongoose.model('Page', pageSchema);