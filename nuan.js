var iTop = 50,
	iLeft = -280;

var people = document.getElementsByClassName('qi-bigpic-people')[0];

var swidth = document.documentElement.clientWidth,
	sheight = document.documentElement.clientHeight;

var perx = (1920 - swidth) / (swidth * 5),
	pery = sheight / (766 * 20);

var vx, vy, nowX, nowY, shouldx, shouldy;

window.addEventListener('mousemove', function(e) {


	nowX = e.clientX;
	nowY = e.clientY;

	shouldx = -nowX * perx - 200;
	shouldy = -nowY * pery + 50;

	if ( Math.abs(shouldx - iLeft) > 5) {
		setInterval(function() {
			vx = shouldx - iLeft;
			iLeft += (vx / 10);
		}, 50);
	}

	if ( Math.abs(shouldy - iTop) > 5) {
		setInterval(function() {
			vy = shouldy - iTop;
			iTop += (vy / 10);
		}, 50);
	}

	people.style.top = iTop + 'px';
	people.style.left = iLeft + 'px';

});



// 新闻模块轮播
var pic = document.getElementsByClassName('roll-pic')[0];
var picCount = 0;
var picNum = 3
var picWidth = 525;
setInterval(function() {
	pic.style.left = picCount * -picWidth + 'px';
	if (picCount < (picNum-1)) {
		picCount++;
	} else {
		picCount = 0;
	}
}, 5000);

// 游戏特色轮播
var feature = document.getElementsByClassName('feature-swiper-wrap')[0];
var featureCount = 0;
var featureNum = 5;
var featureWidth = 1200;
setInterval(function() {
	feature.style.left = featureCount * -featureWidth + 'px';
	if (featureCount < (featureNum-1)) {
		featureCount++;
	} else {
		featureCount = 0;
	}
}, 5000);




