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
var Component = require('./site/model/component');

var GenPage = null;

function storeObject(data, type)
{
    // Save object in their specific table (ie store new header in Header table)
    data.save(function(err, room) {
        if (err) {
            console.log(err);
        } else {
            console.log('Successfully stored ' + type + ' in ' + type + ' table.');

            // Store in Components table
            var component = new Component();
            component.type = type;
            component.component_id = room._id;

            component.save(function (err, room) {
                if (err) {
                    console.log(err);
                } else {
                    console.log('Successfully stored ' + type + ' in ' + 'components table.');
                    
                    //  Add components to the Page
                    GenPage.components.push(component);
                }
            });
        }
    });
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
        if (GenPage == null) {
            GenPage = new Page();
        }

    	console.log(req.body);
    	switch(req.body.type) {
    		case "header":
                var data = new Header();
                data.text = req.body.title;
                data.imageUrl = req.body.coverImageUrl;
                data.author = req.body.author;
                storeObject(data, req.body.type);
                break;

    		case "subhead":
                var subhead = new Subhead();
                subhead.text = req.body.subhead;
                storeObject(subhead, req.body.type);
    			break;
    		case "quote":
                var quoteEntry = new Quote();
                quoteEntry.quoteText = req.body.quoteText;
                quoteEntry.quoteSource = req.body.quoteSource;
                storeObject(quoteEntry, req.body.type);
    			break;
    		case "text_section":
    			var data = new TextSection();
    			data.text = req.body.text;
                storeObject(data, req.body.type);
    			break;
    		case "image":
                var image = new Image();
                image.url = req.body.imageUrl;
                image.caption = req.body.caption;
                image.credit = req.body.credit;
                storeObject(image, req.body.type);
    			break;
    	}
    });

    app.post('/gen', function(req, res, next) {
        if (GenPage == null) {
            console.log('Nothing has been submitted');
        }

        GenPage.save(function(err, room) {
            if (err) {
                console.log(err);
            } else {
                console.log('Successfully stored Page in Page table.');
            }
        });

        //  TODO: If there's an error, everything will be lost.
        //        Wanna improve this.
        GenPage = null;
    });

};