google.load('visualization', '1.0');

function drawInventoryChart(){

	var data = google.visualization.arrayToDataTable([
		/*['','Pants', 'Dresses', 'Shirts', 'Shoes', 'Socks'], 
		['', 22, 8, 14, 6, 33]*/
		['Item', 'Count'],
		['Pants', 22],
		['Dresses', 8],
		['Shirts', 14],
		['Shoes', 6],
		['Socks', 33],

	]);

	var wrapper = new google.visualization.ChartWrapper({
		chartType : 'BarChart',
		dataTable : data,
		options : { title : 'Inventory'}
	});

	wrapper.draw('inventoryChart');
}

google.setOnLoadCallback(drawInventoryChart);