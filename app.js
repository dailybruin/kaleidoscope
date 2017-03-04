import path from 'path'
import express from 'express'
var app 	   = express();
var bodyParser = require('body-parser'),
	sass       = require('node-sass'),
	sassMiddleware = require('node-sass-middleware');
	

// POST form data parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


// Static files
app.set('view engine', 'jade');
app.set('views', './public/views');
// adding the sass middleware
app.use(
   sassMiddleware({
       src: __dirname + '/public/assets/stylesheets', 
       dest: __dirname + '/public/assets/stylesheets',
       force: true,
       debug: true       
   })
), 
// The static middleware must come after the sass middleware
app.use(express.static( path.join( __dirname, 'public' ) ) );

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