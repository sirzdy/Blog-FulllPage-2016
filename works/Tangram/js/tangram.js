var shape=[
	{p:[{x:0,y:0},{x:400,y:0},{x:200,y:200}],color:"#caff67"},
	{p:[{x:0,y:0},{x:200,y:200},{x:0,y:400}],color:"#67becf"},
	{p:[{x:400,y:0},{x:400,y:200},{x:300,y:300},{x:300,y:100}],color:"#ef3d61"},
	{p:[{x:300,y:100},{x:300,y:300},{x:200,y:200}],color:"#f9f51a"},
	{p:[{x:200,y:200},{x:300,y:300},{x:200,y:400},{x:100,y:300}],color:"#d1c1d1"},
	{p:[{x:100,y:300},{x:200,y:400},{x:0,y:400}],color:"#fa8ccc"},
	{p:[{x:400,y:200},{x:400,y:400},{x:200,y:400}],color:"#f6ca29"}
]

window.onload = function(){
	var tangram = document.getElementById('tangram');
	var cxt = tangram.getContext('2d');
	tangram.width = 800;
	tangram.height = 800;
	draw(cxt,tangram);
}
function draw(cxt,tangram){
	for(i = 0;i<=shape.length;i++){
		cxt.beginPath();
		cxt.moveTo(shape[i].p[0].x+200,shape[i].p[0].y+200);
		for(j=1;j<shape[i].p.length;j++)
			cxt.lineTo(shape[i].p[j].x+200,shape[i].p[j].y+200);
		cxt.closePath();
		cxt.strokeStyle="#333";
		cxt.stroke();
		cxt.fillStyle=shape[i].color;
		cxt.fill();
	}
}
function r(n){
	for (k=0;k<shape[n].p.length;k++) {
		shape[n].p[k].x+=10;
	}
}
function l(n){
	for (k=0;k<shape[n].p.length;k++) {
		shape[n].p[k].x-=10;
	}
}
function u(n){
	for (k=0;k<shape[n].p.length;k++) {
		shape[n].p[k].y-=10;
	}
}
function d(n){
	for (k=0;k<shape[n].p.length;k++) {
		shape[n].p[k].y+=10;
	}
}

