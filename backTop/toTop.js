add.addEvent(window,"load",function() {
	var back = document.getElementById("back");
	backTop(back);
});

function backTop(eleBack) {
	//获取当前页面可视高度
	var height = document.documentElement.clientHeight || document.body.clientHeight;
	var timer = null;
	var isScroll = true;//判断用户是否滚动滚轮

	//点击返回顶部的元素
	add.addEvent(back,"click",function() {
		clearTimeout(timer); //每次点击都清除一下定时器，就不会发生多次点击网页不能下拉的情况啦啦！
		scroll();	
	});
	function scroll() {
		//滚动条到顶部的距离，兼容浏览器
		var toTop = document.documentElement.scrollTop || document.body.scrollTop;
		var speed = Math.floor(-toTop/5);//这里加负号是为了回到顶部时距离为0，向下取整
		document.documentElement.scrollTop = document.body.scrollTop = toTop + speed;
		
		isScroll = true;		
		if(toTop == 0) {
			clearTimeout(timer); 
		} else {
			timer = setTimeout(scroll,30);
		}
	}
	//滚动条滚动时触发
	add.addEvent(window,"scroll",function() {
		var back = document.getElementById("back");
		var toTop = document.documentElement.scrollTop || document.body.scrollTop;
		if(toTop >= height) {
			back.style.display = "block";
		} else {
			back.style.display = "none";
		}
		if(! isScroll) {//在返回顶部的中途滚动滚轮，页面下拉
			clearTimeout(timer);
		}
		isScroll = false;
	});
};	
