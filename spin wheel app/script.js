const wheel = document.querySelector('#wheel'),
spinBtn = document.querySelector('#spin-btn'),
finalValue = document.querySelector('.final-value');

const rotationValues = [
    {minDegree: 0, maxDegree: 30,value: 2},
    {minDegree: 31, maxDegree: 90,value: 1},
    {minDegree: 91, maxDegree: 150,value: 6},
    {minDegree: 151, maxDegree: 210,value: 5},
    {minDegree: 211, maxDegree: 270,value: 4},
    {minDegree: 271, maxDegree: 330,value: 3},
    {minDegree: 331, maxDegree: 360,value: 2},
];

//size of every piece
const data = [16,16,16,16,16,16];

const pieColors = ["#8b35bc","#b163da","#8b35bc","#b163da","#8b35bc","#b163da"];

let myChart = new Chart(wheel,{
    //plugins for displaying text on pie chart
    Plugins:[ChartDataLabels],
    type: "pie",
    data:{
        //labels to be displayed on chart
        labels:[1,2,3,4,5,6],
        dataset
    }
})