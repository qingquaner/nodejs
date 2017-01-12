var fs = require('fs');

var path = 'input.txt';
var encoding = 'UTF-8';
var data = fs.readFileSync(path, encoding);

console.log(data.toString());
console.log('程序执行结束啦！');