var featureWrap = document.getElementsByClassName('feature-swiper-wrap')[0];

featureWrap.style.left = -1200 + 'px';



// 游戏特色轮播
function b() {
	var dot = document.getElementsByClassName('feature-btn')[0],
		btn = dot.getElementsByTagName('a');

	var offset = 1200;
	var index = 0;
	var picNum = 5;

	var btimer;

	var isMove = false;

	
	itself(btimer, featureWrap, dot, btn, offset, index, picNum, isMove, 4000);	
}

b();
