const dayEl = document.getElementById('day')
const hourEl = document.getElementById('hour')
const minuteEl = document.getElementById('minute')
const secondEl = document.getElementById('second')

const newYearDate = new Date("jan 1, 2023 00:00:00").getTime();


const updateCountdown = () =>{
    const now = new Date().getTime();
    const gap = newYearDate - now;
    // console.log(gap)
    let second = 1000;
    let minute = second * 60;
    let hour = minute * 60;
    let day = hour * 24;

    let d = Math.floor(gap / day);
    // console.log(d);
    let h = Math.floor((gap % day) / hour);
    // console.log(h)
    let m = Math.floor((gap % hour) / minute)
    let s = Math.floor((gap % minute) / second);

    dayEl.innerHTML = d;
    hourEl.innerHTML = h;
    minuteEl.innerHTML = m
    secondEl.innerHTML = s;
    setTimeout(updateCountdown,1000)
}

updateCountdown();