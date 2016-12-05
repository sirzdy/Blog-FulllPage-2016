$(document).ready(function() {
	$('#fullpage').fullpage({
		sectionsColor: ['#009ACD','#7BAABE', '#4BBFC3', '#E0EEEE'],
		anchors: ['page1', 'page2', 'page3', 'page4'],
		menu: '#menu',
		//navigation: true,
		controlArrows:true,
		slidesNavigation:true,
		fixedElements:'#clock'
	});
	$('#input_baidu').focus();
	drawMyClock();
	setInterval(drawMyClock,1000);
});
function proAct(){
	for (var i = 0; i <=100; i++) {
		var width = $(".progress").width();
		//alert(width);
		$(".progress-bar").width(i/100*width);
		$(".progress-bar").html("Wow!能量爆满中!!!");
	}
	setTimeout("$('.progress-bar').width(0.2*$('.progress').width());$('.progress-bar').html('の，不小心虚了…')",2000);
}
/*function controlClock(){
	if($("#canvas").is(":hidden")){
		$("#myclock").show();
		$("#conClock").removeClass("fa fa-clock-o");
		$("#conClock").addClass("fa fa-close");
	}else{
		$("#myclock").hide();
		$("#conClock").removeClass("fa fa-close");
		$("#conClock").addClass("fa fa-clock-o");
	}
}*/
function building(){
	$('#building').popover('toggle');
}
