/**
 * Routes
 * Catches all GET request and puts index.jade that inits React
 */
var express = require('express');
var Page = require('./site/model/page');
var Image = require('./site/model/imageObject');

module.exports = function (app) {
    app.get('/', function (req, res) {
        res.render('index', { title: 'Home' });
    });

    // // /* GET saved pages */
    // router.get('/all', function(req, res) {
    //     var pages;
    //     Page.find(function (err, pages) {
    //       if (err) return console.error(err);
    //       res.render('pages', { pages: pages } );
    //     });
    // });

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
		page.subheading = req.body.subheading;
		page.quotes = req.body.quotes.split(",");
		page.quoteMakers = req.body.quoteMakers.split(",");
		page.paragraphs = req.body.paragraphs.split("\n");


		var sideImagesArray = req.body.sideImages.split(",");
		var sideImageCaptionsArray = req.body.sideImageCaptions.split(",");
		if (sideImagesArray.length != sideImageCaptionsArray.length)
			console.log('Length of Side Image is different from length of Side Image Captions');
		var sideImages = [];
		for (var i = 0; i < sideImagesArray.length; i++)
		{
			var image = new Image();
			image.url = sideImagesArray[i];
			image.caption = sideImageCaptionsArray[i];
			sideImages.push(image);
		}
		page.sideImages = sideImages;

		var mainImagesArray = req.body.mainImages.split(",");
		var mainImageCaptionsArray = req.body.mainImageCaptions.split(",");
		if (mainImagesArray.length != mainImageCaptionsArray.length)
			console.log('Length of Main Image is different from length of Main Image Captions');
		var mainImages = [];
		for (var i = 0; i < mainImagesArray.length; i++)
		{
			var image = new Image();
			image.url = mainImagesArray[i];
			image.caption = mainImageCaptionsArray[i];
			mainImages.push(image);
		}
		page.mainImages = mainImages;

		var coverPhoto = req.body.cover;
		var coverPhotoCaption = req.body.coverCaption;
		var image = new Image();
		image.url = coverPhoto;
		image.caption = coverPhotoCaption;
		// var coverPhotoArray = [image];
		page.coverPhoto = image;//coverPhotoArray;

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