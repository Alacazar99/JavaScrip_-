// 匀速动画；
function animate(obj,target){
	clearInterval(obj.timer);
	obj.timer = setInterval(function(){
	if(obj.offsetLeft == target){
		clearInterval(obj.timer);
		// obj.style.display = 'none'; // 消失；
	}
	// sleep(10); // 延时函数，单位ms
	obj.style.left = obj.offsetLeft + 1 + 'px';

	// obj.style.top = obj.offsetTop + 1 + 'px';
},15);
}
var sleep = function(time) {   // 延时函数
    var startTime = new Date().getTime() + parseInt(time, 10);
    while(new Date().getTime() < startTime) {}
};

// 缓速动画；
// 缓速动画；
function lowAnimate(obj,target,callback){
	clearInterval(obj.time);

	obj.time = setInterval(function(){
		var step = (target - obj.offsetLeft)/10;

		step = step > 0 ? Math.ceil(step):Math.floor(step);  // 正值，大取整，负值，小取整；
		if(obj.offsetLeft == target){
			clearInterval(obj.time);
			// obj.style.display = 'none'; // 消失；
			// 回调函数====；定时器结束之后；
			if(callback){
				callback();
			}
		}
		// 
		obj.style.left = obj.offsetLeft + step + 'px';
		// window.scroll(0,window.pageYOffset + step);
	},15);
}