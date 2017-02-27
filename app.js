import path from 'path'
import express from 'express'
var app      = express();
var bodyParser = require('body-parser'),
	sass       = require('node-sass'),
	sassMiddleware = require('node-sass-middleware');
var fs = require('fs');
var sassport = require('sassport');

// POST form data parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


// Static files
app.set('view engine', 'jade');
app.set('views', './site/views');

sassport().render({
	file: 'site/assets/stylesheets/style.scss'
}, function(err, result) {
	if (err) {
		return console.log(err);
	}
	fs.writeFile("site/assets/stylesheets/style.css", result.css, function(err) {
	    if (err) {
	        return console.log("Could not save .css file -- " + err);
	    }
	}); 
});

// adding the sass middleware
// app.use(
//    sassMiddleware({
// 	   src: __dirname + '/site/assets/stylesheets', 
// 	   dest: __dirname + '/site/assets/stylesheets',
// 	   // force: true,
// 	   debug: true       
//    })
// ), 
// The static middleware must come after the sass middleware
app.use(express.static( path.join( __dirname, 'site' ) ) );


// DB Setup
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/flatpage');

// Routes
require("./routes")(app);

/**
 * Start server
 */
var server = app.listen(3000, function () {
	var host = server.address().address;
	var port = server.address().port;

	console.log('App listening at http://localhost:%s', port);
});