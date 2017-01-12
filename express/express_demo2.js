/**
 * http://usejsdoc.org/
 */
var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('get 请求！');
});

app.post('/',function(req,res){
	res.send('post 请求');
});

app.get('/del_user',function(req,res){
	res.send('del_user 请求');
});

app.get('/ab*',function(req,res){
	res.send('/ab* 正则表达式请求');
});
var server = app.listen(8080,function(){
	var host = server.address().address;
	var port = server.address().port;
	console.log("访问地址http://%s:%s",host,port);
	
});