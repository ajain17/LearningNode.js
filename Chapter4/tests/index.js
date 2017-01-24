var boot = require('../bin/www').boot;
var shutdown = require('../bin/www').shutdown;
var port = require('../bin/www').port;
var superagent = require('superagent');
var expect = require('expect.js');

describe('server', function () {
  //called before any of the tests are run
  before(function () {
    //need to start the server so it can accept requests
    boot();
  });

  //called after all of the tests have run
  after(function () {
    shutdown();
  });

  describe('homepage', function () {
    it('should respond to GET', function (done) {
      var url = 'http://localhost:' + port;
      //pass in the url to the superagent and capture the response/error
      superagent.get(url).end(function (err, res) {
        expect(err).to.equal(null);
        expect(res).to.exist;
        expect(res.status).to.equal(200);
        done();
      });
    });
  });
});