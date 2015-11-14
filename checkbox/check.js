window.onload = function () {
	function checkForms() {		
		var form2 = document.getElementById("form2");		
		var check_all = document.getElementById("check_all");//全选框
		var check_others = document.getElementById("check_others");//反选框
		var boxs = document.getElementsByName("boxs"); //要被选的那些框 						

		//全选
		check_all.onclick = function() {
			for(var i=0;i<boxs.length;i++) {		
				if(check_all.checked) {
					boxs[i].checked = true;						
				} else {				
					boxs[i].checked = false;				
				}						
			}				
		}
		
		//反选
		check_others.onclick = function() {
			for(var i=0;i<boxs.length;i++) {
				if(boxs[i].checked) {
					boxs[i].checked = false;
				} else {
					boxs[i].checked = true;					
				}
			}
			check_all.checked = false;
			checkBoxs();
		}

		//当有一个没有选中的时候全选框自动不选
			for(var i=0;i<boxs.length;i++) {
				boxs[i].onclick = function() {
					if(! this.checked) {
					 	check_all.checked = false;			 				
					} else {
						checkBoxs();
					}											
				}
			}
			
			//若选框都选中，则全选框也选中
			function checkBoxs() {
				var box_all = 1;	
				for(var i=0;i<boxs.length;i++) {											
					box_all =box_all * Number(boxs[i].checked);
				}	
				if(box_all) {	//如果为true，则表明所有复选框都选中了					
					check_all.checked = true;
				} 								 
			}
	}
	checkForms();	
		
}