/**
 * http://usejsdoc.org/
 */
var express = require('express');
var app = express();

app.use(express.static('public'));

app.get('/', function (req, res) {
  res.send('get 请求！');
});
var server = app.listen(8080,function(){
	var host = server.address().address;
	var port = server.address().port;
	console.log("访问地址http://%s:%s",host,port);
	
});