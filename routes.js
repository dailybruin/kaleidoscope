/**
 * Routes
 * Catches all GET/POST requests
 */
var express = require('express');
var Page = require('./site/model/page');

var GenPage = null;

module.exports = function (app) {
    app.get('/', function (req, res) {
        res.render('index', { title: 'New Page', components: [], database_id: "" });
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
    app.get('/update', function(req, res, next) {
        Page.findOne({'_id': req.query.pageID}, function(err, page) {
            // console.log(page.components);
            res.render('index', { title: 'Editting Page', components: page.components, database_id: req.query.pageID } );
        });
    });

    app.post('/gen', function(req, res, next) {
        if (GenPage == null) {
            GenPage = new Page();
        }

        var data = JSON.parse(req.body.data);
        var current_id =JSON.parse(req.body.current_id);

        GenPage.components = data;

        GenPage.save(function(err, room) {
            if (err) {
                console.log(err);
            } else {
                console.log('Successfully stored Page in Page table.');
                console.log('DATA SAVED IN MONGODB:');
                console.log(data);
                GenPage = null;
            }
        });
    });

};