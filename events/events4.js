/**
 * http://usejsdoc.org/
 */
var EventEmitter = require('events').EventEmitter;

var event = new EventEmitter();
var listener1 = function listener1(){
	console.log('listener1执行');
};

var listener2 = function listener2(){
	console.log('listener2执行');
};

event.addListener('listener',listener1);

event.on('listener',listener2);

var eventsNum = EventEmitter.listenerCount(event,'listener');
console.log("event监听器的个数"+eventsNum);

event.emit('listener');

event.removeListener('listener',listener1);
console.log("listener1不再受监听！");
event.emit('listener');

eventsNum = EventEmitter.listenerCount(event,'listener');
console.log("event监听器的个数"+eventsNum);
