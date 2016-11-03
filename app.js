import path from 'path'
import express from 'express'
var app = express();
var bodyParser = require('body-parser');

// POST form data parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

/**
 * Static files
 */
app.use( express.static( path.join( __dirname, 'site') ) );
app.set('view engine', 'jade');
app.set('views', './site/views')

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

    console.log('App listening at http://%s:%s', host, port);
});