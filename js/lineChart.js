var ctx = document.getElementById("line-chart");

var chartGraph = new Chart(ctx, {
  type: 'line',
  data: {
    labels: ["Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct",],
    datasets: [{
      label: "SENT COMMANDS",
      data: [0, 200, 0, 400, 200, 300, 0],
      borderWidth: 3,
      borderColor: "#7BB6EC",
      backgroundColor: "transparent",
    }]
  },
  options: {
    legend: {    
      display: false,
    },  
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      yAxes: [{
        stacked: true,
        gridLines: {
          display: true,
          color: "rgb(219, 219, 219)"
        }
      }],
      xAxes: [{
        gridLines: {
          display: false
        }
      }]
    }
  }
})