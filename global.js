

function cl(timer, container, ioffset, isMove, firstPic, lastPic, index, btn) {
	

	var nowLeft = parseInt(container.style.left);

	var newLeft = parseInt(container.style.left) + ioffset;
	var spd = 0;
	isMove = true;

	timer = setInterval(function() {
		nowLeft = parseInt(container.style.left);
		spd = (newLeft - nowLeft) / 10;
		if (Math.abs(spd) < 10) {
			if (spd < 0) {
				spd = Math.floor( (newLeft - nowLeft) / 10);
			} else {
				spd = Math.ceil( (newLeft - nowLeft) / 10);
			}
			
		}
		container.style.left = nowLeft + spd + 'px';
		if (Math.abs(newLeft - nowLeft) <= 3) {
			container.style.left = newLeft + 'px';
			if (newLeft < lastPic) {
				container.style.left = firstPic + 'px';
			} else if (newLeft > firstPic) {
				container.style.left = lastPic + 'px';
			}
			clearInterval(timer);
			isMove = false;
		}
	}, 20);
	
	//debugger;
	showBtn(btn, index);


}

function showBtn(btn, index) {

	for (var i=0; i<btn.length; i++) {
		if (btn[i].className == 'on') {
			btn[i].className = '';
			break;
		}
	}
	btn[index].className = 'on';
}


function itself(timer, container, dot, btn, offset, index, picNum, isMove, time) {
	var index = 0;
	var lastPic = -offset * picNum,
	firstPic = -offset;
	dot.addEventListener('click', function(e) {
		if (!isMove) {
		clearInterval(timer);
		clearInterval(n);
		var aindex = e.target.getAttribute('index') - 1;
		var ioffset =  ( index - aindex ) * offset;
		if (index == aindex) {
			return;
		}
		index = aindex;
			cl(timer, container, ioffset, isMove, firstPic, lastPic, index, btn);
		}
	});

	var n = setInterval(function() {
		if (index == picNum-1) {
			index = 0;
		} else {
			index++;
		}
		cl(timer, container, -offset, isMove, firstPic, lastPic, index, btn);
	}, time);
}

