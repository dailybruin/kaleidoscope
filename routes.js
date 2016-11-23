/**
 * Routes
 * Catches all GET/POST requests
 */
var express = require('express');
var Page = require('./site/model/page');
var Image = require('./site/model/image');
var Quote = require('./site/model/quote');
var TextSection = require('./site/model/textSection');
var Header = require('./site/model/header');
var Subhead = require('./site/model/subhead');

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
    	switch(req.body.type) {
    		case "header":
                var data = new Header();
                data.text = req.body.title;
                data.imageUrl = req.body.imageUrl;
                data.imageCredit = req.body.imageCredit;
                data.imageCaption = req.body.imageCaption;
                data.author = req.body.author;
                data.description = req.body.description;

                data.save(function (err, inserted_obj) {
                    if (err) {
                        console.log(err);
                    } else {
                        console.log('Successfully stored ' + req.body.type);
                        var component = new Component();
                        component.component_id = inserted_obj._id;
                        component.type = "header";
                        GenPage.components.push(component);
                    }
                });
    		case "subhead":
    			storeSubHeading(req);
    			break;
    		case "quote":
    			storeQuotes(req);
    			break;
    		case "text_section":
    			var data = new TextSection();
    			data.text = req.body.text;
    			data.save(function (err) {
    				if (err) {
    					console.log(err);
    				} else {
                        console.log('Successfully stored ' + req.body.type);
                    }
    			});
    			break;
    		case "image":
    			storeImage(req);
    			break;
    	}
    });

};