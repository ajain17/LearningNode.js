var express = require('express');
//path module figures out the OS and adds / or \ accordingly in the path.
var path = require('path');

//import all the routes from the routes directory
var index = require('./routes/index');
var users = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//import our module for tracking the server stats
var tracker = require('./utilities/tracker');

//import our route handlers
app.use('/', index);
app.use('/users', users);

app.use(function (req, res, next) {
  tracker.trackStart();
  //calling next() here without a parameter will send the request to next handler function
  //if anything is passed inside next, like next(err), it goes to the error handler
  next();
  //next(new Error('error message')) --> This will invoke the error handler
  tracker.trackEnd();
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

//Express takes note of the first function where you’re using 4 parameters in the function(err, req, res, next)
//and that becomes our error handling mechanism. When we pass in a parameter in next(..anything..) it jumps to
//this error handling function.
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
