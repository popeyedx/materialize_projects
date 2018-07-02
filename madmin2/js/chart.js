window.onload = function () {

var chart = new CanvasJS.Chart("chartContainer", {
	animationEnabled: true,
  animationDuration: 200,
	theme: "light2",
	title:{
		text: "内閣支持率の推移"
	},
	axisY:{
		includeZero: false
	},
	data: [{        
		type: "line",       
		dataPoints: [
			{ y: 53 },
			{ y: 61, indexLabel: "最高",markerColor: "red", markerType: "triangle" },
			{ y: 51 },
			{ y: 55 },
			{ y: 47 },
			{ y: 42 },
			{ y: 39 },
			{ y: 48 },
			{ y: 30, indexLabel: "最低",markerColor: "DarkSlateGrey", markerType: "cross" },
			{ y: 40 },
			{ y: 49 },
			{ y: 38 }
		]
	}]
});

setTimeout(function() {
  chart.render();
}, 500);


}