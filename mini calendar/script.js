const months = ["Januaray","Februray","March","April","May","June","July","August","September","October","November","December"];
const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Satuarday'];

const date = new Date();
let month = months[date.getMonth()];
let day = days[date.getDay()];
let tdate = date.getDate();
let year = date.getFullYear();
// console.log(month,day,tdate,year)

document.querySelector('.month').innerHTML = month
document.querySelector('.day').innerHTML = day
document.querySelector('.date').innerHTML = tdate
document.querySelector('.year').innerHTML = year