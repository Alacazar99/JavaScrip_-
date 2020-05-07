var banner=document.getElementById('banner');
var imglist=document.querySelector('#img-list');
var list=document.querySelector('list');
var index=0;
var timer=null;
//设置自动播放函数
function autoPlay () {
   if (++index >= imglist.length) {index = 0};
   changeImg(index);
}
// 鼠标划过整个容器时停止自动播放
banner.onmouseover = function () {
   clearInterval(timer);
}
  // banner.addEventListener('mouseover',function () {
  //    clearInterval(timer);
  // })
// 鼠标离开整个容器时继续播放至下一张
banner.onmouseout=function(){
   timer=setInterval(autoPlay,2000);
}
// 定义并调用自动播放函数
timer = setInterval(autoPlay, 2000);
// 接着定义图片的切换函数
// 定义图片切换函数
function changeImg (curIndex) {
   for (var i = 0; i < imglist.length; i++) {
     imglist[i].style.display = "none";
     list[i].className = "";
   }
   imglist[curIndex].style.display = "block";
   list[curIndex].className = "on";
}
