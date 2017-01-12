var mongoose = require('mongoose');

module.exports = mongoose.model('Component', {
	type: String,
	component_id: String
});
