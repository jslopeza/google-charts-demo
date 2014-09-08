google.load('visualization', '1.0', {'packages': ['corechart']});

function drawFriendsChart(){
	var data = new google.visualization.DataTable();
	data.addColumn('string','Friend');
	data.addColumn('date','Date of Birth');
	data.addRow(['James', new Date(1997, 0, 31)]);
	data.addRow(['Brenda', new Date(1993, 11, 9)]);
	data.addRow(['Tim', new Date(1976, 1, 4)]);
	data.addRow(['Vanessa', new Date(2002, 4, 20)]);

	var options = {
		title : "My Friends Birthdays!" 
	};

	var chart = new google.visualization.LineChart(document.getElementById('friendsChart'));

	chart.draw(data, options);
}

google.setOnLoadCallback(drawFriendsChart);