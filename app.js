var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var ejs = require('ejs');

//拿到路由接口
var routes = require('./routes/index');

var app = express();

// 一系列设置
//设置视图文件夹和视图引擎
app.set('views', path.join(__dirname, 'views'));
// 设置视图引擎后缀，为.html
app.engine('.html', ejs.__express);
app.set('view engine', 'html');
app.set('port', process.env.PORT || 3000);

//加载日志中间件
app.use(logger('dev'));

//加载解析带有JSON有效负载的传入请求，使用body-parser
app.use(express.json());
//加载解析urlencoded请求体的中间件
app.use(express.urlencoded({ extended: false }));
//加载cookie解析中间件
app.use(cookieParser());

//静态文件放的位置
app.use(express.static(path.join(__dirname, 'public')));

routes(app);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
	next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
	// set locals, only providing error in development
	res.locals.message = err.message;
	res.locals.error = req.app.get('env') === 'development' ? err : {};

	// render the error page
	res.status(err.status || 500);
	res.render('error');
});

module.exports = app;
