/**
 * Routes
 * Catches all GET/POST requests
 */
var express = require('express');
var Page = require('./site/model/page');
var Image = require('./site/model/imageObject');
var Quote = require('./site/model/quoteObject');

function genImage(Images, ImageCaptions, ImageType)
{
	var ImagesArray = Images.split(",");
	var ImageCaptionsArray = ImageCaptions.split(",");
	if (ImagesArray.length != ImageCaptionsArray.length)
	{
		console.log('Length of Image is different from length of Image Captions, type: ');
		console.log(ImageType)
	}
	
	var ImageVector = [];
	for (var i = 0; i < ImagesArray.length; i++)
	{
		var image = new Image();
		image.url = ImagesArray[i];
		image.caption = ImageCaptionsArray[i];
		ImageVector.push(image);
	}
	return ImageVector;
}

function genPage(reqBody)
{
	var page = new Page();
	// console.log(reqBody);
	page.authors = reqBody.authors.split(',');;
	page.title = reqBody.title;
	page.subheading = reqBody.subheading;
	
	page.text = reqBody.text.split("\n");

	
	//read quotes in to struct
	var quotesArray = reqBody.quotes.split(",");
	var quoteMakersArray = reqBody.quoteMakers.split(",");

	if (quotesArray.length != quoteMakersArray.length)
		console.log('Length of Quotes is different from length of Quote Makers');

	var quotes = [];
	for (var i = 0; i < quotesArray.length; i++)
	{
		var quoteEntry = new Quote();
		quoteEntry.quote= quotesArray[i];
		quoteEntry.quoteMaker = quoteMakersArray[i];
		quotes.push(quoteEntry);
	}
	page.quotes = quotes;

	page.sideImages = genImage(reqBody.sideImages, 
							   reqBody.sideImageCaptions,
							   'Side images');

	page.mainImages = genImage(reqBody.mainImages, 
							   reqBody.mainImageCaptions,
							   'Main images');

	page.coverPhoto = genImage([reqBody.cover], 
							   [reqBody.coverCaption],
							    'Cover image')[0];

	return page;
}

module.exports = function (app) {
    app.get('/', function (req, res) {
        res.render('index', { title: 'Home' });
    });

    /* GET saved pages */
    app.get('/all', function(req, res) {
        var pages;
        Page.find(function (err, pages) {
          if (err) return console.error(err);
          res.render('all', { pages: pages } );
        });
    });

    /* GET create page form. */
    app.get('/create', function(req, res, next) {
		res.render('dashboard');
    });

    app.post('/store_page', function (req, res, next) {
		var page = genPage(req.body);

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