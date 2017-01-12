/**
 * http://usejsdoc.org/
 */
var buf = new Buffer(256);
var len = buf.write('Hello Buffer');
console.log("写入字节数"+len);