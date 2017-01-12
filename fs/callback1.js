var fs = require('fs');

var path = 'input_ba.txt';
var encoding = 'UTF-8';
fs.readFile(path, encoding,function(err,data){
	//如果读出正常 err null
	//否则 Error
	console.log('message1'+err);
	if(err){
		console.log('message2'+err);
	}
	console.log(data.toString());
});
console.log('程序执行结束啦！');