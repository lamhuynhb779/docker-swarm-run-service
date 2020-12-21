// Libraries
var http = require("http");
var sleep = require("system-sleep");
var os = require("os");

// Get hostname
var hostname = os.hostname();

// Server
http.createServer(function(req, res) {

    sleep(1); // pause 1s

    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end("Swarm service (Node app), Host: " + hostname);

}).listen(8085);

console.log("Node app, port 8085, Host: " + hostname);