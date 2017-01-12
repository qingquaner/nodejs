/**
 * http://usejsdoc.org/
 */
var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Hello World');
});

var server = app.listen(3000,function(){
	var host = server.address().address;
	var port = server.address().port;
	console.log("访问地址http://%s:%s",host,port);
	
});