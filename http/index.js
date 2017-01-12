var http = require('http');
var querystring = require('querystring');
var fs = require('fs');
var url = require('url');
var util = require('util');
http.createServer(function(req,res){
  var path = url.parse(req.url).pathname;
  var filename = path.substr(1);
  fs.readFile(filename, function(err,data){
	  if(err){
	      console.log(err);
	      res.writeHead(404,{'Content-Type':'text/html'});
	    }else{
	      res.writeHead(200,{'Content-Type':'text/html'});
	      res.write(data.toString());
	    }
	    res.end();
  });
}).listen(8080);
