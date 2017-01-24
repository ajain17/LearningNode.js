var express = require('express');
var router = express.Router();
var tracker = require('../utilities/tracker');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

//get server stats page - calculates values from the tracker object
router.get('/serverStats', function (req, res) {
  var model = {
    uptime: tracker.getUptime(),
    numRequests: tracker.getNumRequests(),
    avgProcess: tracker.getAverageProcess().toFixed(2),
    shortestProcess: tracker.getShortestProcess().toFixed(2),
    longestProcess: tracker.getLongestProcess().toFixed(2)
  };
  res.render('serverStats', model);
});

module.exports = router;
