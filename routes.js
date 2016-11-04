/**
 * Routes
 * Catches all GET request and puts index.jade that inits React
 */
var express = require('express');
var Page = require('./site/model/page');

module.exports = function (app) {
    app.get('/', function (req, res) {
        res.render('index', { title: 'Home' });
    });

    // /* GET saved pages */
    app.get('/all', function(req, res) {
        var pages;
        Page.find(function (err, pages) {
          if (err) return console.error(err);
          res.render('all' , { pages: pages } );
        });
    });

    /* GET create page form. */
    app.get('/create', function(req, res, next) {
    	console.log('Logging');
		res.render('dashboard');
    });

    app.post('/store_page', function (req, res, next) {
    	console.log("store logging");
		var page = new Page();
		console.log(req);
		//  Split authors with comma
		page.authors = req.body.authors.split(',');

		page.title = req.body.title;
		page.coverPhoto = req.body.cover;
		page.coverPhotoCaption = req.body.coverCaption;
		page.subheading = req.body.subheading;
<<<<<<< HEAD
	
		page.sideImageCaptions = req.body.sideImageCaptions.split(",");
		page.mainImageCaptions = req.body.mainImageCaptions.split(",");
		page.quotes = req.body.quotes.split(",");
		page.quoteMakers = req.body.quoteMakers.split(",");
		page.paragraphs = req.body.paragraphs.split("\n");
		page.sideImages = req.body.sideImages.split(",");
		page.mainImages = req.body.mainImages.split(",");
=======
		page.sideImageCaptions = req.body.sideImageCaptions;
		page.mainImageCaptions = req.body.mainImageCaptions;
		page.quotes = req.body.quotes;
		page.quoteMakers = req.body.quoteMakers;
		page.paragraphs = req.body.paragraphs;

		//  Split side images with comma
		page.sideImages = req.body.sideImages.split(',');
		page.mainImages = req.body.mainImages.split(',');
>>>>>>> 4ac38fbb6bf0d7df41010ea1b2d4cc042abf56d4

		page.save(function (err) {
			if (err) {
				res.render('dashboard');
			} else {
				res.render('index');
			}
		});
    });
};

// module.exports = router;