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

function storeObject(data, type, savePage)
{
    data.save(function(err, room) {
        if (err) {
            console.log(err);
        } else {
            console.log('Successfully stored ' + type + ' in ' + type + ' table.');

            // Store in Components table
            var component = new Component();
            var id = room._id;
            component.type = type;
            component.component_id = id;

            component.save(function (err, room) {
                if (err) {
                    console.log(err);
                } else {
                    console.log('Successfully stored ' + type + ' in ' + 'components table.');
                    
                    //  Add components to the Page
                    GenPage.components.push(component);

                    if (savePage)  //  last component
                    {
                        GenPage.save(function(err, room) {
                            if (err) {
                                console.log(err);
                            } else {
                                console.log('Successfully stored Page in Page table.');
                            }
                        });
                    }

                    // res.contentType('json');
                    // res.send({ data: 'randomid'/*JSON.stringify(id)*/});
                }
            });
        }
    });
}

function storeToDB(componentsTable)
{
    if (GenPage == null) {
        GenPage = new Page();
    }

    for (var i = 0; i < componentsTable.length; i++)
    {
        var object = componentsTable[i].object;
        var type = componentsTable[i].type;
        var data = null;
        switch(type) {
            case "header":
                data = new Header();
                data.text = object.title;
                data.imageUrl = object.coverImageUrl;
                data.author = object.author;
                break;

            case "subhead":
                data = new Subhead();
                data.text = object.subhead;
                break;
            case "quote":
                data = new Quote();
                data.quoteText = object.quoteText;
                data.quoteSource = object.quoteSource;
                break;
            case "text_section":
                data = new TextSection();
                data.text = object.text;
                break;
            case "image":
                data = new Image();
                data.url = object.imageUrl;
                data.caption = object.caption;
                data.credit = object.credit;
                break;
        }
        storeObject(data, type, i == componentsTable.length - 1);
    }
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

    app.post('/gen', function(req, res, next) {
        if (GenPage == null) {
            console.log('Nothing has been submitted');
        }
        storeToDB(JSON.parse(req.body.data));
    });

};