google.load('visualization', '1.0', {'packages' : ['controls']});

function drawCarPartsDashboard(){
	var data = new google.visualization.DataTable();
	data.addColumn('string', 'Part');
	data.addColumn('number', 'Quantity');
	data.addRow(['Brake Pads', 10]);
	data.addRow(['Brake Calipers', 6]);
	data.addRow(['Windshield Wipers', 25]);
	data.addRow(['Struts', 29]);
	data.addRow(['Springs', 43]);
	data.addRow(['Spark Plugs', 50]);
	data.addRow(['Spark Plug Wires', 35]);
	data.addRow(['Antifreeze', 4]);

	var options = {
		'title' : 'Car Parts',
		'width' : 600,
		'height' : 300,
		'fontSize' : 12
	};

	var partPieChart = new google.visualization.ChartWrapper({
		'chartType' : 'PieChart',
		'containerId' : 'partPieChart',
		'options' : options
	});

	var partColumnChart = new google.visualization.ChartWrapper({
		'chartType' : 'ColumnChart',
		'containerId' : 'partColumnChart',
		'options' : options
	});

	var filter = new google.visualization.ControlWrapper({
		'controlType' : 'StringFilter',
		'containerId' : 'stringFilter',
		'options' : {
			'filterColumnLabel' : 'Part'
		}
	});

	var dashboard = new google.visualization.Dashboard(document.getElementById('dashboard'));

	dashboard.bind(filter, [partPieChart, partColumnChart]);

	dashboard.draw(data);
}

google.setOnLoadCallback(drawCarPartsDashboard);
