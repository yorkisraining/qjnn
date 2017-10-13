var iTop = 50,
	iLeft = -280;
var wrap = document.getElementsByClassName('qi-bigpic')[0],
	people = document.getElementsByClassName('qi-bigpic-people')[0];

var swidth = document.documentElement.clientWidth,
	sheight = document.documentElement.clientHeight;

var perx = (1920 - swidth) / (swidth * 5),
	pery = sheight / (766 * 40);

var vx, vy, nowX, nowY, shouldx, shouldy;

wrap.addEventListener('mousemove', function(e) {


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
