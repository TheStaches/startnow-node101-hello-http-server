// write your code here
var http = require("http");

var server = http.createServer(function(req, res) {
    res.writeHead(200, {"Content-Type": "text/plain"});
    res.end("Hello World");
});

server.listen(8080, "127.0.0.1");
console.log("Server is running at 127.0.0.1:8080/");

