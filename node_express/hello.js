var http = require('http');  // add the node http module

var myServer = http.createServer(function(request, response) {    // create a server with anonymous callback function
  // response.writeHead(200, {"Content-Type" : "text/plain"});    // send header information and status to web client
  // response.write("Hello");                                     // send message to web client
  response.writeHead(200, {"Content-Type" : "text/html"});
  response.write("<b>Hello</b> World!");
  response.end();                                            // end response to web client
});

myServer.listen(3000);

console.log("Listening on port 3000");
console.log("Go to http://localhost:3000 in your browser");