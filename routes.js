/**
 * Routes
 * Catches all GET/POST requests
 */
var express = require('express');
var Page = require('./site/model/page');

var GenPage = null;

module.exports = function (app) {
    app.get('/', function (req, res) {
        res.render('index', { title: 'Dashboard' });
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

    app.post('/gen', function(req, res, next) {
        if (GenPage == null) {
            GenPage = new Page();
        }

        var data = JSON.parse(req.body.data);

        GenPage.components = data;
        GenPage.save(function(err, room) {
            if (err) {
                console.log(err);
            } else {
                console.log('Successfully stored Page in Page table.');
                console.log('DATA SAVED IN MONGODB:');
                console.log(data);
            }
        });
    });

};