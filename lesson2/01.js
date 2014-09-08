google.load('visualization', '1.0');

function drawInventoryChart(){
	var wrapper = new google.visualization.ChartWrapper({
		chartType : 'BarChart',
		dataTable : [['','Pants', 'Dresses', 'Shirts', 'Shoes', 'Socks'], ['', 22, 8, 14, 6, 33]],
		options : { title : 'Inventory'}
	});

	wrapper.draw('inventoryChart');
}

google.setOnLoadCallback(drawInventoryChart);