function onKeyDown(event,num){
    var e = event || window.event || arguments.callee.caller.arguments[0];
    if(e && e.keyCode==27){ // 按 Esc
     	//要做的事情
     	if(num==1)
     		$("#input_baidu").val("");
     	if (num==2) 
     		$("#input_google").val("");
    }if(e && e.keyCode==113){ // 按 F2 
             //要做的事情                
    }if(e && e.keyCode==13){ // enter 键
    	search(num);
    }
}
function search(num)
{
	 if (num==1) {
        	var keywords = $("#input_baidu").val();
        	if (keywords=="") {
        		$("#contip").show();
                $("#baiduSearch").addClass("has-warning");
        	}else{
				window.location.href = "https://www.baidu.com/s?wd="+keywords;
			}
        }
        if (num==2) {
        	var keywords = $("#input_google").val();
        	if (keywords=="") {
        		$("#contip").show();
                $("#googleSearch").addClass("has-warning");
        	}else{
				window.location.href = "https://www.google.com/#q="+keywords;
			}
        }
}
function showtip(){
	$("#searchtip").tooltip();
}
function hidecontip(){
	$("#contip").hide();
     $("#baiduSearch").removeClass("has-warning");
    $("#googleSearch").removeClass("has-warning");
}