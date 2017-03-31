// Routes
//    Catches all GET/POST requests

var Page = require('./public/model/page');
var mongodb = require('mongodb');
var GenPage = null;

module.exports = function (app) {
    // Renders index
    app.get('/', function (req, res) {
        res.render('index', { title: 'New Page', components: [], database_id: "" });
    });

    // Load specific pre-existing page obtained from /all into /
    app.get('/update', function(req, res, next) {
        Page.findOne({'_id': req.query.pageID}, function(err, page) {
            // console.log(page.components);
            res.render('index', { title: 'Editting Page', components: page.components, database_id: req.query.pageID } );
        });
    });

    // Show all previously stored pages
    app.get('/all', function(req, res) {
        var pages;
        Page.find(function (err, pages) {
          if (err) return console.error(err);
          res.render('all', { pages: pages, title: 'Past Pages' } );
        });
    });

    // Show how-to page
    app.get('/usage', function(req, res) {
        res.render('usage', {title: 'Usage'});
    });

    // Save a new or update a currently existing page
    //    - new page made if no 'current_id' passed in
    //    - otherwise updating the page with the id passed down
    app.post('/gen', function(req, res, next) {
        if (GenPage == null) {
            GenPage = new Page();
        }

        var data = JSON.parse(req.body.data);
        var current_id =JSON.parse(req.body.current_id);

        GenPage.components = data;

        // Save a new page
        if (current_id == '') {
            GenPage.save(function(err, room) {
                if (err) {
                    console.log(err);
                } else {
                    console.log('Successfully stored Page in Page table.');
                    console.log(data);
                    GenPage = null;        
                }
            });
        }
        // Update currently existing page with current_id
        else {
            Page.update(
                { '_id' : current_id }, 
                { $set: { 'components': data } },
                function (err, result) {
                    if (err) 
                        console.log(err);

                    console.log('Successfully updated Page in Page table.');
                    console.log(result);
                    GenPage = null;
                });
        }
    });

    // Deleting a page from the database selected in /all
    app.post('/page/:id', function (req, res, next) {
        Page.remove({_id: new mongodb.ObjectID(req.params.id)}, function(err, results) {
            if (err){
                console.log("failed to delete a page");
            } else {
                var pages;
                Page.find(function (err, pages) {
                    if (err) {
                        console.log(err);
                    } else {
                        res.redirect('/all');
                        res.render('all', { pages: pages });
                    }
                });
            }
        });
    });

};