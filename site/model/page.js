var mongoose = require('mongoose');

module.exports = mongoose.model('Page', {
	components: Array
	// TODO page join table to replace above
	// componentType: String,
	// componentId: String
});