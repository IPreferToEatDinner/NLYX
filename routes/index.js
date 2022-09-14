module.exports = function (app) {
	app.get('/', function (req, res) {
		res.render('index');
	});

	app.get('/index.html', function (req, res) {
		res.render('index');
	});

	app.get('/about.html', function (req, res) {
		res.render('about');
	});

	app.get('/service.html', function (req, res) {
		res.render('service');
	});

	app.get('/contact.html', function (req, res) {
		res.render('contact');
	});
};
