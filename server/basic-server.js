var http = require("http");
var main = require("./main");
var token = '518326831951.apps.googleusercontent.com'; // this is just for dev and must be changed for production in to an ENV variable on Heroku...

var port = 8080;
var ip = "127.0.0.1";
var server = http.createServer(main(token));
console.log("Listening on http://" + ip + ":" + port);
server.listen(port, ip);