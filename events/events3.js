var EventEmitter = require('events').EventEmitter;
var event = new EventEmitter();

//绑定事件
event.on('some_event',function(arg1,arg2){
	console.log('事件被触发1'+arg1+' '+arg2);
});
//绑定事件
event.on('some_event',function(arg1,arg2){
	console.log('事件被触发2'+arg1+' '+arg2);
});

function callback (){
	console.log("Hello EventsEmitter");
}
event.on('some_event1',callback);
//移出指定事件的所用监听器
//event.removeAllListeners('some_event');
//主动触发事件
event.emit('some_event','参数1','参数2');
//移出指定事件的监听器
//event.removeListener('some_event1',callback);
event.emit('some_event1','参数1','参数2');

console.log(event.listeners('some_event'));