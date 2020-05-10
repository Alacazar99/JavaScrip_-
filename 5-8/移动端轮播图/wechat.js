window.addEventListener('load',function(){
	// 1、获取元素；
	var focus = document.querySelector('.focus');
	var img = document.querySelector('.img');
	var ul = focus.children[0];
	var ol = focus.children[1];
	// 获取focus 的宽度；
	var w = img.offsetWidth;
	// 2、定时器自动化播放图片；
	var index = 0;
	var moveX = 0; // 定义全局变量；

	var timer = setInterval(function(){
		index++;
		var translateX = -index * w;
		ul.style.transition = 'all .3s';
		ul.style.transform = 'translateX('+translateX+'px)';
		// console.log(index);
		moved('all .8s');
	},2000);

	function moved(sty){  // sty :参数，图片轮播的 过度效果
		console.log("moved_index：",index);
		// 无缝滚动；
		if(index >= 3){
			index = 0;
			ul.style.transition = sty;
			var translateX = -index * w;
			ul.style.transform = 'translateX('+translateX+'px)';
		}else if(index < 0){
			index = 3;
			ul.style.transition = sty;
			var translateX = -index * w;
			ul.style.transform = 'translateX('+translateX+'px)';
		}
		// 小圆点跟随变化；
		ol.querySelector('.current').classList.remove('current');
		// 当前索引的小li 加上current ;
		ol.children[index].classList.add('current');
	};
	// 点击取消轮播图广告；
	var mask = document.querySelector('.mask');
	mask.addEventListener('click',function(){
		ul.style.display = 'none';
		mask.style.display = 'none';
	})

	// 手指滑动轮播图；
	var startX = 0;
	ul.addEventListener('touchstart',function(e){
		startX = e.targetTouches[0].pageX;
		// console.log("sdfsdfdg");
		// 鼠标（手指）触屏，取消轮播图计时器；
		clearInterval(timer);
	});

	// 移动手指； touchmove : 计算手指移动距离，并移动盒子；
	ul.addEventListener('touchmove',function(e){
		// 移动距离
		moveX = e.targetTouches[0].pageX - startX;
		// 移动盒子;
		var translateX = -index * w + moveX;
		ul.style.transition = 'none';  // 取消过度效果；
		ul.style.transform = 'translateX('+translateX+'px)';
	})
	// 手指松开，图片移动；（移动>50,播放下一张）
	ul.addEventListener('touchend',function(e){
		if(Math.abs(moveX) > 50){
			if(moveX > 0){
				index--;
				// moved('none');
			}else{
				index++;
				// moved('none');
			}
			var translateX = -index * w;
			ul.style.transition = 'all .2s';  // 过度效果；
			ul.style.transform = 'translateX('+translateX+'px)';
		}else if(moveX < 0){
			var translateX = -index * w ;
			ul.style.transition = 'all .3s';  // 过度效果；
			ul.style.transform = 'translateX('+translateX+'px)';
		}

		// 手指离开，重启定时器；
		// clearInterval(timer);
		// var timer = setInterval(function(){
		// 	console.log("重启定时器");
		// 	index++;
		// 	var tsranslateX = -index * w;
		// 	ul.style.transiton = 'all .3s';
		// 	ul.style.transform = 'translateX('+translateX+'px)';
		// 	moved('all .3s');
		// 	// 小圆点跟随变化；
		// 	ol.querySelector('.current').classList.remove('current');
		// 	// 当前索引的小li 加上current ;
		// 	ol.children[index].classList.add('current');
		// },2000);
	})
	// 返回顶部模块；
	var goBack = document.querySelector('.goBack');
	var footer = document.querySelector('.footer');
	// 显示；
	window.addEventListener('scroll',function(){
		if(window.pageYOffset >= footer.offsetTop){
			goBack.style.display = 'block';
		}else{
			goBack.style.display = 'none';
		}
	});
	goBack.addEventListener('click',function(){
		window.scroll(0,0);
	})
})