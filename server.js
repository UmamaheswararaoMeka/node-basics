var http = require("http");

var server = http.createServer(function(request, response){
	response.writeHead(200,{'content-type' :'text'})
	response.end("Hello World")
});

server.listen(3000, function(){
	console.log("Server is listening at 3000")
})