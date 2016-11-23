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
var Component = require('./site/model/components');

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

function storeObject(data, type)
{
    var component = Component();
    component.type = type;
    data.save(function (err, room) {
        if (err) {
            console.log(err);
        } else {
            console.log('Successfully stored ' + type);
        }
        component.component_id = room.id;
    });
    GenPage.components.append(component);
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

    //  components
    //  
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
                storeObject(data, req.body.type);
                break;
    		case "subhead":
                var subhead = var Subhead();
                subhead.text = req.body.subheading;
                storeObject(subhead, req.body.type);
    			break;
    		case "quote":
                var quoteEntry = new Quote();
                quoteEntry.quote= req.body.quotes;
                quoteEntry.quoteMaker = req.body.quoteMakers;
                storeObject(quoteEntry, req.body.type);
    			break;
    		case "text_section":
    			var data = new TextSection();
    			data.text = req.body.text;
                storeObject(data, req.body.type);
    			break;
    		case "image":
                var image = new Image();
                image.url = req.body.url;
                image.caption = req.body.caption;
                image.credit = req.body.credit;
                storeObject(image, req.body.type);
    			break;
    	}
    });

};