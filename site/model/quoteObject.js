var mongoose = require('mongoose');

module.exports = mongoose.model('Quote', {
	// quote and quotemaker
	quote: String,
	quoteMaker: String
});