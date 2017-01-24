Node has a built in dependency injection system using the ‘require’ command. Here we are injecting the
http and url code modules in our program.
<pre><code>
var http = require('http');
var port = 3000;
var url = require('url');
</pre></code>

Http module listens for requests on a port, gives us an object to create Node.js server.
<pre><code>
var server = http.createServer(function (req, res) {
</pre></code>
Here, we are using the url module's parse method to get the path requested
<pre><code>
var segments = url.parse(req.url, true).pathname;
</pre></code>
This is done to get all the variables from the path. For example: http://localhost:3000/ayushi/jain
will give us segments = [ayushi, jain]
<pre><code>
segments = segments.split('/').splice(1);
</pre></code>
Here we are writing the header information
<pre><code>
res.writeHead(200, { 'Content-Type': 'text/plain' });
</pre></code>
Based on the path requested by user, we are showing different responses. If else handles this.
If anything is passed in the url path, it will go to if otherwise it will default to else and just
print 'Hello World'.
<pre><code>
  if (segments.length > 0 && segments[0] === 'greet') {
    var msg = 'Hey there, ';
    if (segments.length > 1) {
      msg += segments[1] + '! ';
    }
    res.write(msg + ' Welcome to your first Node.js project');
  } else {
    res.write('Hello World');
  }
</pre></code>
We use res.end() to end response. Otherwise the browser would keep waiting for more response.
Note:
If you try to write response (res.write(...)) after res.end(), it will give runtime error.
Also, if you try to write header after writing response, again it will give a runtime error.
<pre><code>
  res.end();
});
</pre></code>

Make your server listen on the port specified.
server.listen(port);

Run npm start and the server will be started.
<pre><code>
console.log('Server listening at http://localhost:' + port);
</pre></code>
