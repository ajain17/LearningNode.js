/* A simple program demonstrating how http can be used to create a server
*   and url can be used to parse url
*/

var http = require('http');
var port = 3000;
var url = require('url');

var server = http.createServer(function (req, res) {
  var segments = url.parse(req.url, true).pathname;
  segments = segments.split('/').splice(1);
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  if (segments.length > 0 && segments[0] === 'greet') {
    var msg = 'Hey there, ';
    if (segments.length > 1) {
      msg += segments[1] + '! ';
    }
    res.write(msg + 'Welcome to your first Node.js project');
  } else {
    res.write('Hello World');
  }
  res.end();
});

server.listen(port);
console.log('Server listening at http://localhost:' + port);
