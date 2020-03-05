
document.getElementsByClassName("toggleMenu")[0].onclick = function(){
	document.getElementById("myNav").style.height = "100%";
}

document.getElementsByClassName("closebtn")[0].onclick = function(){
	document.getElementById("myNav").style.height = "0%";
}

// ---------------------------column chart----------------------
 google.charts.load("current", {packages:["corechart"]});
        google.charts.setOnLoadCallback(drawChart2);
        function drawChart2() {
          var data = google.visualization.arrayToDataTable([
             ['Foodtypes', 'Quantity', { role: 'style' }],
             ['Vegetables', 849, '#ff7f00'],  
             ['Fruit', 1294, '#ffe000'],        
             ['Condiments', 230, '#ce0000'],
             ['Disposable packages', 1735, '#10d800'],
        ]);

        var options = {
            title: '',
            legend: 'none'

        };

          var chart = new google.visualization.ColumnChart(document.getElementById('columnchart'));
          chart.draw(data, options);
 }

// ---------------------------donut chart----------------------
 google.charts.load("current", {packages:["corechart"]});
        google.charts.setOnLoadCallback(drawChart1);
        function drawChart1() {
          var data = google.visualization.arrayToDataTable([
            ['Supply', 'Percentage'],
            ['Water',    83],
            ['Empty',    17]
          ]);

          var options = {
            title: '',
            pieHole: 0.4,
            pieSliceTextStyle: {
             color: 'white',
            },
            legend: 'none'
          };

          var chart = new google.visualization.PieChart(document.getElementById('donutchart'));
          chart.draw(data, options);
        }

// ---------------------------gauge chart----------------------

google.charts.load('current', {'packages':['gauge']});
      google.charts.setOnLoadCallback(drawChart3);

      function drawChart3() {

        var data = google.visualization.arrayToDataTable([
          ['Label', 'Value'],
          ['Oxygen %', 100]
        ]);

        var options = {
          redFrom: 0, redTo: 10,
          yellowFrom: 10, yellowTo: 25,
          greenFrom: 90, greenTo: 100,
          minorTicks: 5
        };

        var chart = new google.visualization.Gauge(document.getElementById('gauge'));

        chart.draw(data, options);

        setInterval(function() {
          data.setValue(0, 1, 85 + Math.round(10 * Math.random()));
          chart.draw(data, options);
        }, 3000);
      }