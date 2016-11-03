/**
 * Routes
 * Catches all GET request and puts index.jade that inits React
 */
var Page = require('./site/model/page');

module.exports = function (app) {
    app.get('/', function (req, res) {
        res.render('index', { title: 'React+Node Boilerplate' });
    });

    // /* GET saved pages */
    app.get('/all', function(req, res) {
        var pages;
        Page.find(function (err, pages) {
          if (err) return console.error(err);
          res.render('pages', { pages: pages } );
        });
    });

    /* GET create page form. */
    app.get('/create', function(req, res) {
		res.render('dashboard');
    });

    app.post('/create', function (req, res) {
		var page = new Page();
		console.log(req);
		page.authors = req.body.authors;
		page.title = req.body.title;
		page.coverPhoto = req.body.cover;
		page.coverPhotoCaption = req.body.coverCaption;
		page.subheading = req.body.subheading;
		page.sideImageCaptions = req.body.sideImageCaptions;
		page.mainImageCaptions = req.body.mainImageCaptions;
		page.quotes = req.body.quotes;
		page.quoteMakers = req.body.quoteMakers;
		page.paragraphs = req.body.paragraphs;
		page.sideImages = req.body.sideImages;
		page.mainImages = req.body.mainImages;

		page.save(function (err) {
			if (err) {
				res.render('error', {error: err});
			}
		});
    });
};