// 新闻模块轮播
var rollPic = document.getElementsByClassName('roll-pic')[0];

rollPic.style.left = -525 + 'px';


function a() {
	var dot = document.getElementsByClassName('roll-btn')[0],
		btn = dot.getElementsByTagName('a');

	var offset = 525;
	var index = 0;
	var picNum = 3;

	var atimer;

	var isMove = false;
	
	itself(atimer, rollPic, dot, btn, offset, index, picNum, isMove, 5000);	
}

a();