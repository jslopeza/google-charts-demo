google.load('visualization', '1.0', {'packages' : ['corechart']});

function drawCarReapirsChart(){
	var data = new google.visualization.DataTable();
	data.addColumn('string', 'Repair');
	data.addColumn('number', 'Repair Expenses');
	data.addRow(['Alignment', 69.99]);
	data.addRow(['Coolant', 10.99]);
	data.addRow(['Brakes', 80.49]);
	data.addRow(['Spark Plugs', 27.96]);

	var options = {
		title : 'Car Repairs',
		width : 1200,
		height : 600,
		fontSize : 28,
		backgroundColor : '#ff4633',
		titleTextStyle : {
			color : 'white',
			fontSize : 60
		},
		legend : {
			textStyle : {
				color : 'white'
			},
			position : 'left',
		},
		is3D : true

	};

	var chart = new google.visualization.PieChart(document.getElementById('carRepairsChart'));

	chart.draw(data, options);
}

google.setOnLoadCallback(drawCarReapirsChart);


