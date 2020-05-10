//封装tap,解决click 300ms 问题；
function tap(obj,callbak){
	var isMove = false;
	var startTime = 0; // 记录触摸的时间变量；
	obj.addEventListener('touchstart',function(e){
		startTime = Date.now();
	})
	obj.addEventListener('touchmove',function(e){
		isMove = True;  //判断是否滑动，
	});
	obj.addEventListener('touchend',function(e){
		if (!isMove && (Date.now() - startTime) < 150) {
			callbak && callbak();  // 执行回调函数；
		}
		isMove = false;  //去反，重置；
		startTime = 0;
	})；
}
// 调用
// tap(div,function(){
// 	// 回调
// })