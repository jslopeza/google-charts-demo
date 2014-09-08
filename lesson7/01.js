google.load('visualization', '1.0', {'packages' : ['corechart']});

var data;
var options;
var chart;

function drawCarReapirsChart(){
	data = new google.visualization.DataTable();
	data.addColumn('string', 'Repair');
	data.addColumn('number', 'Repair Expenses');
	data.addRow(['Alignment', 69.99]);
	data.addRow(['Coolant', 10.99]);
	data.addRow(['Brakes', 80.49]);
	data.addRow(['Spark Plugs', 27.96]);

	options = {
		title : 'Car Repairs',
		width : 1200,
		height : 600,
		fontSize : 18
	};

	chart = new google.visualization.ColumnChart(document.getElementById('carRepairsChart'));

	google.visualization.events.addListener(chart, 'ready', readyCallback);

	chart.draw(data, options);
}

function readyCallback(){
	google.visualization.events.addListener(chart, 'select', changeExpense);
}

function changeExpense(){
	var selection = chart.getSelection();
	for (var i = 0; i < selection.length; i++) {
		if(selection[i].row != null && selection[i].column != null){
			var value = prompt('Enter a new expense for this column..');
			data.setValue(selection[i].row, selection[i].column, parseFloat(value));
		}
	}

	chart.draw(data, options);
}

google.setOnLoadCallback(drawCarReapirsChart);

