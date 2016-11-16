var mongoose = require('mongoose');

module.exports = mongoose.model('Quote', {
	// quote and quotemaker
	text: String,
	source: String
});