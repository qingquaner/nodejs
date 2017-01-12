/**
 * http://usejsdoc.org/
 */
var events = require('events');

var eventsEmitter = new events.EventEmitter();

var handers1 = function hander1(){
	console.log("连接成功！");
	eventsEmitter.emit('events2');
};
eventsEmitter.on('events1',handers1);

eventsEmitter.on('events2',function(){
	console.log('再次连接成功1！');
	eventsEmitter.emit('events3');
});

eventsEmitter.on('events3',function(){
	console.log('再次连接成功2！');
});


eventsEmitter.emit('events1');

console.log('断开连接！');
