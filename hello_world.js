var http = require('http');
var dt = require('./myfirstmodule');

http.createServer(function (req, res) {
  //res.writeHead(200, {'Content-Type': 'text/html'});
  res.write("The date and time are currently: " + dt.myDateTime());
  res.end('Hello World!');
}).listen(8080);

console.log("Deliberately making some changes, Yeahhh ha ha ha");

console.log("Changes made in Dev branch")

console.log("New changes madde in Dev branch")