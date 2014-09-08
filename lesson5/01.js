google.load('visualization', '1.0', {'packages' : ['corechart', 'table', 'geochart']});

function drawCarReapirsChart(){
	var data = new google.visualization.DataTable();
	data.addColumn('string', 'Repair');
	data.addColumn('number', 'Budget');
	data.addColumn('number', 'Repair Expenses');
	data.addRow(['Alignment', 80, 69.99]);
	data.addRow(['Coolant', 15, 10.99]);
	data.addRow(['Brakes', 50, 80.49]);
	data.addRow(['Spark Plugs', 45, 27.96]);

	var options = {
		title : 'Car Repairs'
	};

	var chart = new google.visualization.Table(document.getElementById('carRepairsChart'));

	chart.draw(data, options);
}

function drawGeoChart(){
	var data = new google.visualization.DataTable();
	data.addColumn('string', 'Country');
	data.addColumn('number', 'Popularity');
	data.addRow(['India', 15]);
	data.addRow(['United States', 10]);
	data.addRow(['Russia', 7]);
	data.addRow(['Brazil', 2]);
	data.addRow(['Australia', 5]);

	var options = {
		title : 'Popularity'
	};

	var chart = new google.visualization.GeoChart(document.getElementById('geoChart'));

	chart.draw(data, options);
}

google.setOnLoadCallback(drawCarReapirsChart);
google.setOnLoadCallback(drawGeoChart);

