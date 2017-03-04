import path from 'path'
import express from 'express'
var app = express();
var bodyParser = require('body-parser');
var sass = require('node-sass');
var sassMiddleware = require('node-sass-middleware');
	

// Static files config setup
app.set('view engine', 'jade');
app.set('views', './public/views');

// Sass middleware for compiling to css
app.use(
   sassMiddleware({
       src: __dirname + '/public/assets/stylesheets', 
       dest: __dirname + '/public/assets/stylesheets',
       force: true,
       debug: true       
   })
), 
// [this line must come after sassMiddleware]
app.use(express.static( path.join( __dirname, 'public' ) ) );

// DB Setup
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/flatpage');

// POST request form data parser used in routes.js
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Routes/endpoint initialization
var routes = require("./routes");
routes(app);

// Start the server on port 3000
var server = app.listen(3000, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log('App listening at http://localhost:%s', port);
});