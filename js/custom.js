let polerData = {
  labels: [
    'January',
    'February',
    'March',
    'April',
    'May',
    //'June'
  ],
  datasets: [{
    label: 'My First dataset',
    backgroundColor: [
      '#fdc600',
      '#e60f59',
      '#11c9ff',
      '#cf2ace',
      '#31d000'
    ],
    //borderColor: 'white',
    borderWidth: 0,
    //borderAlign: 'inner',
    data: [
      10,
      20,
      30,
      40,
      50,
      //60
    ],
    bevelWidth: 3,
    bevelHighlightColor: 'rgba(255, 255, 255, 0.75)',
    bevelShadowColor: 'rgba(0, 0, 0, 0.5)',
    shadowOffsetX   : 3,
    shadowOffsetY: 3,
    shadowBlur: 10,
    shadowColor: 'rgba(0, 0, 0, 0.5)',
  }]
};
let polerOptions = {
  scale: {
    display: false
  },
  tooplips: {
    bevelWidth: 3,
    bevelHighlightColor: 'rgba(255, 255, 255, 0.75)',
    bevelShadowColor: 'rgba(0, 0, 0, 0.5)',
    shadowOffsetX   : 3,
    shadowOffsetY: 3,
    shadowBlur: 10,
    shadowColor: 'rgba(0, 0, 0, 0.5)'
  }
}

var polerChart = document.getElementById('polerChart').getContext('2d');
var chart1 = new Chart(polerChart, {
  type: 'polarArea',
  data: polerData,
  options: polerOptions
});

let pieData = {
  labels: [
    'January',
    'February',
    'March',
    'April',
    'May',
    //'June'
  ],
  datasets: [{
    label: 'My First dataset',
    backgroundColor: [
      '#fdc600',
      '#e60f59',
      '#11c9ff',
      '#cf2ace',
      '#31d000'
    ],
    //borderColor: 'white',
    borderWidth: 0,
    //borderAlign: 'inner',
    data: [
      10,
      20,
      30,
      40,
      50,
      //60
    ],
    bevelWidth: 3,
    bevelHighlightColor: 'rgba(255, 255, 255, 0.75)',
    bevelShadowColor: 'rgba(0, 0, 0, 0.5)',
    shadowOffsetX   : 3,
    shadowOffsetY: 3,
    shadowBlur: 10,
    shadowColor: 'rgba(0, 0, 0, 0.5)',
  }]
};
let pieOptions = {
  tooplips: {
    bevelWidth: 3,
    bevelHighlightColor: 'rgba(255, 255, 255, 0.75)',
    bevelShadowColor: 'rgba(0, 0, 0, 0.5)',
    shadowOffsetX   : 3,
    shadowOffsetY: 3,
    shadowBlur: 10,
    shadowColor: 'rgba(0, 0, 0, 0.5)'
  }
}
var pieChart = document.getElementById('pieChart').getContext('2d');
var chart1 = new Chart(pieChart, {
  type: 'pie',
  data: pieData,
  options: pieOptions
});


let doughnutData = {
  labels: [
    'January',
    'February',
    'March',
    'April',
    'May',
    //'June'
  ],
  datasets: [{
    label: 'My First dataset',
    backgroundColor: [
      '#fdc600',
      '#e60f59',
      '#11c9ff',
      '#cf2ace',
      '#31d000'
    ],
    weight: 20,
    borderWidth: 0,
    data: [
      10,
      20,
      30,
      40,
      50,
      //60
    ],
    bevelWidth: 3,
    bevelHighlightColor: 'rgba(255, 255, 255, 0.75)',
    bevelShadowColor: 'rgba(0, 0, 0, 0.5)',
    shadowOffsetX   : 3,
    shadowOffsetY: 3,
    shadowBlur: 10,
    shadowColor: 'rgba(0, 0, 0, 0.5)',
  }]
};
let doughnutOptions = {
  cutoutPercentage: 50,
  circumference: 2 * Math.PI,
  tooplips: {
    bevelWidth: 3,
    bevelHighlightColor: 'rgba(255, 255, 255, 0.75)',
    bevelShadowColor: 'rgba(0, 0, 0, 0.5)',
    shadowOffsetX   : 3,
    shadowOffsetY: 3,
    shadowBlur: 10,
    shadowColor: 'rgba(0, 0, 0, 0.5)'
  }
}
var doughnutChart = document.getElementById('doughnutChart').getContext('2d');
var chart1 = new Chart(doughnutChart, {
  type: 'doughnut',
  data: doughnutData,
  options: doughnutOptions
});