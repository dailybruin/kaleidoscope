/**
 * Routes
 * Catches all GET/POST requests
 */
var express = require('express');
var Page = require('./site/model/page');
var Image = require('./site/model/imageObject');
var Quote = require('./site/model/quoteObject');
var GenPage = new Page();

function storeAuthors(reqBody)
{
	GenPage.authors.push(reqBody.authors);
}

function storeTitle(reqBody)
{
	GenPage.title = reqBody.title;
}

function storeText(reqBody)
{
	GenPage.text = reqBody.text.split("\n");
}

function storeQuotes(reqBody)
{
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
	GenPage.quotes = quotes
}

function storeCoverImage(reqBody)
{
	GenPage.coverPhoto = genImage([reqBody.cover], 
							   [reqBody.coverCaption],
							    'Cover image')[0];
}

function storeImage(reqBody)
{
	var image = new Image();
	image.url = reqBody.url;
	image.caption = reqBody.caption;
	image.credit = reqBody.credit;
	GenPage.images.push(image);
}

function storeSubHeading(reqBody)
{
	GenPage.subheading = reqBody.subheading;
}

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


    app.post('/store', function(req, res, next) {
    	console.log(req.body);
    	switch(req){
    		case "title":
    			storeTitle(req);
    			break;
    		case "author":
    			storeAuthors(req);
    			break;
    		case "subheading":
    			storeSubHeading(req);
    			break;
    		case "quotes":
    			storeQuotes(req);
    			break;
    		case "text":
    			storeText(req);
    			break;
    		case "cover_image":
    			storeCoverImage(req);
    			break;
    		case "image":
    			storeImage(req);
    			break;
    		case "text_section":
    			console.log("TODO text section in routes.js");
    			break;
    	}
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