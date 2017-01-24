var serverStartTime = Date.now();
var starTime;
var numRequests = 0;
var longestProcess = 0;
var shortestProcess = 0;
var avgProcess = 0;
var tracker = {
  trackStart: function () {
    startTime = Date.now();
  },
  trackEnd: function () {
    var duration = Date.now() - startTime;
    if (shortestProcess === 0 || duration < shortestProcess) {
      shortestProcess = duration;
    }
    if (duration > longestProcess) {
      longestProcess = duration;
    }
    avgProcess = ((avgProcess * numRequests) + duration) / (++numRequests);
  },
  getUptime: function () {
    return ((Date.now() - serverStartTime) / 60000);
  },
  getNumRequests: function () {
    return numRequests;
  },
  getAverageProcess: function () {
    return avgProcess;
  },
  getShortestProcess: function () {
    return shortestProcess;
  },
  getLongestProcess: function () {
    return longestProcess;
  },
};

module.exports = tracker;
