/**
 * http://usejsdoc.org/
 */
var EventEmitter = require('events').EventEmitter;

var event = new EventEmitter();

event.on('some_event',function(){
	console.log('事件被触发');
});

var delay = 1000;
setTimeout(function(){
	event.emit('some_event');
}, delay);