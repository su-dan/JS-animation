var add = {
	//添加事件
	addEvent:function(element,type,method) {
		if(element.addEventListener) {
			element.addEventListener(type,method,false);
		} else if(element.addAttach) {
			element.addAttach(type,method);
		} else {
			element["on" + type] = method;
		}
	},
	//兼容IE，获取事件对象
	getEvent:function(event) {
		return event ? event : window.event;
	},
	//获取当前元素
	getTarget:function(event) {
		return event.getTarget ? event.getTarget : event.srcElement;
	},
	//阻止默认事件
	preventDefault:function(event) {
		if(event.preventDefault) {
			return event.preventDefault();
		} else {
			return event.returnValue = false;
		}
	},
	//阻止冒泡
	stopPropagation:function(event) {
		if(event.stopPropagation) {
			event.stopPropagation();
		} else {
			event.cancelBubble = true;
		}
	},
	//跨浏览器取得字符编码
	getCode:function(event) {
		if(typeof event.charCode == "number") {//不支持这个属性的浏览器中返回的是undefined
			return event.charCode;
		} else {
			return event.keyCode;
		}
	}
};