/**
 * Routes
 * Catches all GET/POST requests
 */
var express = require('express');
var Page = require('./site/model/page');
var Image = require('./site/model/imageObject');
var Quote = require('./site/model/quoteObject');
var GenPage = new Page();

module.exports = function (app) {
    app.get('/', function (req, res) {
        res.render('index', { title: 'Dashboard' });
    });

    /* GET saved pages */
    app.get('/all', function(req, res) {
        var pages;
        GenPage.find(function (err, pages) {
          if (err) return console.error(err);
          res.render('all', { pages: pages } );
        });
    });

    /* GET create page form. */
    app.get('/create', function(req, res, next) {
		res.render('dashboard');
    });

    app.post('/store_authors', function(req, res, next)
    {
    	GenPage.authors.push(req.body.authors);
    });

    app.post('/store_title', function(req, res, next)
    {
    	GenPage.title = req.body.title;
    });

    app.post('/store_subheading', function(req, res, next)
    {
		GenPage.subheading = req.body.subheading;
    });

    app.post('/store_text', function(req, res, next)
    {
		GenPage.text = req.body.text.split("\n");
    });

    app.post('/store_quotes', function(req, res, next)
    {
		var quoteEntry = new Quote();
		quoteEntry.quote= quotesArray[i];
		quoteEntry.quoteMaker = quoteMakersArray[i];
		GenPage.quotes.push(quoteEntry);
    });

    app.post('/store_side_images', function(req, res, next)
    {
		var image = new Image();
		image.url = reqBody.sideImages;
		image.caption = reqBody.sideImageCaptions;
		GenPage.sideImages.push(image);
    });

    app.post('/store_main_images', function(req, res, next)
    {
		var image = new Image();
		image.url = reqBody.mainImages;
		image.caption = reqBody.mainImageCaptions;
		GenPage.mainImages.push(image);
    });

    app.post('/store_cover_image', function(req, res, next)
    {
		var image = new Image();
		image.url = reqBody.cover;
		image.caption = reqBody.coverCaption;
		GenPage.coverPhoto = image;
    });

    app.post('/store', function(req, res, next) {
    	console.log("react form was submitted");
    });

    app.post('/store_page', function (req, res, next)
    {
		var page = GenPage;

		page.save(function (err) {
			if (err) {
				console.log(err);
				res.render('dashboard');
			} else {
				res.render('index');
			}
		});
    });
};