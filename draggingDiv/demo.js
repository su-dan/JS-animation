add.addEvent(window,"load",function() {
	var box = document.getElementById("box");
	var mask = document.getElementById("mask");
	var close = document.getElementById("close");
	var show = document.getElementById("show");

	var disX = 0;//鼠标相对于box左边框的距离
	var disY = 0;
	var viewWidth = document.documentElement.clientWidth || document.body.clientHeight;//可视窗口的宽度
	var viewHeight = document.documentElement.clientHeight || document.body.clientHeight;
	var pull = false;//判断是否可拖拽的标记

	function center(element) {//居中		
		var eleWidth = element.offsetWidth;//弹出框的宽度
		var eleHeight = element.offsetHeight;
		element.style.left = (viewWidth - eleWidth) / 2 + "px";
		element.style.top = (viewHeight - eleHeight) / 2 + "px";
	};
	//覆盖全屏
	function cover (element) {
		element.style.width = viewWidth + "px";
		element.style.height = viewHeight + "px";
	};

	//鼠标按下去的时候
	add.addEvent(box,"mousedown",function(event) {
		event = event || window.event;
		add.preventDefault(event);
		//用鼠标坐标减去拖拽元素的left
		//得到鼠标相对于弹出框左边的距离
		disY = event.clientY - box.offsetTop;
		disX = event.clientX - box.offsetLeft;
		box.style.cursor = "move";
		pull = true;//将可移动设为true
	});

	//鼠标放开就不准移动了，鼠标也恢复默认状态
	add.addEvent(document,"mouseup",function() {
		pull = false;
		box.style.cursor = "";
	});

	//移动鼠标
	add.addEvent(document,"mousemove",function(event) {
		event = event || window.event;
		add.preventDefault(event);

		//如果可以拖动的话
		if(pull === true) {
			//弹出框的横坐标等于鼠标的当前横坐标减去鼠标与box左边框的距离
			var boxX = event.clientX - disX;
			var boxY = event.clientY - disY;
			
			//当弹出框移动到页面最右边的时候弹出框距离页面最左边的距离
			var maxX = viewWidth - box.offsetWidth;
			var maxY = viewHeight - box.offsetHeight;
			//当弹出框移动到最左边的时候，如果超出了范围就取0， Math.max(0,boxX)；
			//当弹出框移动到最右边的时候，如果超出了范围就取相对小的那一个
			boxX = Math.min(maxX,Math.max(0,boxX));
			boxY = Math.min(maxY,Math.max(0,boxY));
			//设置弹出框的定位
			box.style.left = boxX + "px";
			box.style.top = boxY + "px";			
		}
	});
	
	//显示弹出窗口
	add.addEvent(show,"click",function() {
		showBox();
	});	
	//关闭弹出窗口
	add.addEvent(close,"click",function() {
		closeBox();
	});
	
	function showBox() {
		box.style.display = "block";
		mask.style.display = "block";
		center(box);
		cover(mask);
	}
	function closeBox() {
		box.style.display = "none";
		mask.style.display = "none";
	}
	//当改变浏览器窗口大小的时候始终保持弹出框居中
	add.addEvent(window,"resize",function() {
		center(box);
	});
});

