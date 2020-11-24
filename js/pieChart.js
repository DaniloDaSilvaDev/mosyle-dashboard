
var ctx = document.getElementById("pie-chart");

var data = {
    datasets: [{
        data: [10, 20, 30],
        backgroundColor: [
          '#8BC34A',
          '#FF5721',
          '#01BDD4',
      ],
    }],

    // These labels appear in the legend and in the tooltips when hovering different arcs
    labels: [
        'Student',
        'Teacher',
        'Primary Leader'
    ]
};
var myPieChart = new Chart(ctx,{
    type: 'pie',
    data: data,
    options: {
      layout: {
        // padding: 30,
        // position: 'absolute',
      },
      legend: {    
        position : 'right',
        // reverse: false,    
      },  
      responsive: true,
      maintainAspectRatio: false,
      // aspectRatio: 2,
    }
    
});







