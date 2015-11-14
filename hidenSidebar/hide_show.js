window.onload = function() {
	var boxRight = document.getElementById("boxRight");	
	var view = document.body.clientWidth || document.documentElement.clientWidth;
	var boxRightL = view - boxRight.offsetWidth;
	boxRight.style.left = view + "px";

	var timer = null;

	boxRight.onmouseover = function() {
		show(-10,boxRightL,boxRight);
	}
	boxRight.onmouseout = function() {
		show(10,view,boxRight);
	}

	//左侧
	var boxLeft = document.getElementById("boxLeft");
	var boxLeftL = boxLeft.offsetWidth;
	boxLeft.style.left = -boxLeftL + "px";
	boxLeft.onmouseover = function() {
		show(10,0,boxLeft);
	}
	boxLeft.onmouseout = function() {
		show(-10,-boxLeftL,boxLeft);
	}
	function show(speed,aim,ele) {
		clearInterval(timer);		
		timer = setInterval(function() {
			if(parseInt(ele.style.left) == aim) {
				clearInterval(timer);
			} else {
				ele.style.left = parseInt(ele.style.left) + speed + "px";
			}
		},30);
	}
}