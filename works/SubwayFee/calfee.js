var horDis = 30;//水平距离
var verDis = 50;//垂直距离，一个像素间距为￥1
var Days = 31;//月份天数
var width = Days*horDis+2*horDis;//图表宽度
var consume = 400;//消费金额最大值
var height = consume+2*verDis;//图表高度

window.onload = function(){
	var feeChart = document.getElementById('feeChart');
	var feeChartContext = feeChart.getContext('2d');
	feeChart.width = width;
	feeChart.height = height;
	drawFrame(feeChartContext);
}
function drawFrame(feeChartContext){
	feeChartContext.font =18+ 'px Arial';
	//月份数字与竖线
	feeChartContext.textAlign = 'center';
	feeChartContext.textBaseline = 'top';
	for (var i = 1; i <= Days; i++) {
		feeChartContext.fillText(i,horDis*(i+1),height-verDis/1.5);
		feeChartContext.beginPath();
		//横坐标 horDis*(i+1)，纵坐标height-verDis到verDis，从上往下画线
		feeChartContext.moveTo(horDis*(i+1),height-verDis);
		feeChartContext.lineTo(horDis*(i+1),verDis);
		feeChartContext.strokeStyle = "#ccc";
		feeChartContext.stroke();
	}
	feeChartContext.textAlign = 'center';
	feeChartContext.textBaseline = 'middle';
	//金额数字与横线
	for (var i = 0; i <= consume/verDis; i++) {
		feeChartContext.fillText(verDis*i,horDis,height-verDis*(i+1));
		feeChartContext.beginPath();
		//横坐标 2*horDis到width-horDis，纵坐标verDis*(i+1)，总左往右画线
		feeChartContext.moveTo(2*horDis,height-verDis*(i+1));
		feeChartContext.lineTo(width-horDis,height-verDis*(i+1));
		feeChartContext.strokeStyle = "#ccc";
		feeChartContext.stroke();
	}
}
function drawChart(){
	var feeChart = document.getElementById('feeChart');
	var feeChartContext = feeChart.getContext('2d');
	var perFee = document.getElementById('perFee').value;
	var dayCounts = document.getElementById('dayCounts').value;
	console.log(perFee+" "+dayCounts);
	//描点
	feeChartContext.fillStyle ='#000';
	feeChartContext.font =5+ 'px Arial';
	feeChartContext.textAlign = 'left';
	feeChartContext.textBaseline = 'top';
	for(var i = 1;i<=Days;i++)
	{
		var daysFee = calFee(perFee,dayCounts,i);//i为第几天
		console.log(i,daysFee);
		feeChartContext.fillText(Math.ceil(daysFee),horDis*(i+1),height-verDis-daysFee);//结果向上取整
		feeChartContext.beginPath();
		feeChartContext.arc(horDis*(i+1),height-verDis-daysFee,2,0,2*Math.PI,false);//描点，(月份，金额)，（horDis*(i+1)，height-verDis+calFee()）
		feeChartContext.closePath();
		feeChartContext.fill();
	}
	//连线
	feeChartContext.beginPath();
	feeChartContext.strokeStyle ='#000';
	for(var i = 1;i<=Days;i++)
	{
		var daysFee = calFee(perFee,dayCounts,i);//i为第几天
		//线点，(月份，金额)，（horDis*(i+1)，height-verDis+calFee()）
		if(i==1)
			feeChartContext.moveTo(horDis*(i+1),height-verDis-daysFee);
		else {
			feeChartContext.lineTo(horDis*(i+1),height-verDis-daysFee);
			if(i==31)
				feeChartContext.stroke();
		}
	}
}
function calFee(perFee,dayCounts,days) {
	var sum = 0;
	for(var i=1;i<= days * dayCounts;i++){
		if(sum>=0 && sum < 100)
		{
			sum += Number(perFee);
		}
		else if(sum >=100 && sum < 150)
		{
			sum += Number(perFee)*0.8;
		}
		else if(sum >=150 && sum <=400)
		{
			sum += Number(perFee)*0.5;
		}
		else if(sum>400)
		{
			sum += Number(perFee);
		}
	}
	return sum;
}
function clearChart() {
	var feeChart = document.getElementById('feeChart');
	var feeChartContext = feeChart.getContext('2d');
	alert(feeChart.width);
	feeChartContext.clearRect(0,0,feeChart.width,feeChart.height);
	drawFrame(feeChartContext);
}