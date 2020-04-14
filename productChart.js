const createChart = (allProducts) => {

// render chart on page
let target = document.getElementById('canvasContainer');
let canvas = document.createElement('canvas');
canvas.setAttribute('height', '400');
canvas.setAttribute('width', '400');
target.appendChild(canvas);

// create chart
var ctx = canvas.getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: allProducts.map((product) => product.name),
        datasets: [{
            label: '# of Clicks',
            data: allProducts.map((product) => product.clickCount),
            backgroundColor: [
                'rgba(0, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(43, 222, 197, 0.2)',
                'rgba(222, 108, 115, 0.2)',
                'rgba(18, 228, 114, 0.2)',
                'rgba(198, 201, 241, 0.2)',
                'rgba(59, 149, 135, 0.2)',
                'rgba(203, 237, 89, 0.2)',
                'rgba(133, 98, 122, 0.2)',
                'rgba(61, 18, 48, 0.2)',
                'rgba(6, 0, 97, 0.2)',
                'rgba(181, 223, 180, 0.2)',
                'rgba(231, 254, 38, 0.2)',
                'rgba(181, 35, 145, 0.2)',
                'rgba(233, 56, 102, 0.2)',
                'rgba(228, 151, 150, 0.2)',
                'rgba(182, 35, 90, 0.2)',
                'rgba(161, 33, 50, 0.2)',
                'rgba(15, 86, 112, 0.2)',
                'rgba(54, 117, 251, 0.2)',
            ],
            borderColor: [
                'rgba(0, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
                'rgba(43, 222, 197, 1)',
                'rgba(222, 108, 115, 1)',
                'rgba(18, 228, 114, 1)',
                'rgba(198, 201, 241, 1)',
                'rgba(59, 149, 135, 1)',
                'rgba(203, 237, 89, 1)',
                'rgba(133, 98, 122, 1)',
                'rgba(61, 18, 48, 1)',
                'rgba(6, 0, 97, 1)',
                'rgba(181, 223, 180, 1)',
                'rgba(231, 254, 38, 1)',
                'rgba(181, 35, 145, 1)',
                'rgba(233, 56, 102, 1)',
                'rgba(228, 151, 150, 1)',
                'rgba(182, 35, 90, 1)',
                'rgba(161, 33, 50, 1)',
                'rgba(15, 86, 112, 1)',
                'rgba(54, 117, 251, 1)',
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});


}

export default createChart
