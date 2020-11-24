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
      },
      legend: {    
        position : 'right',
      },  
      responsive: true,
      maintainAspectRatio: false,
    }
});







