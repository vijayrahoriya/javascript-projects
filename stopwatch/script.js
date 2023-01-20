let startBtn = document.querySelector('.start'),
pauseBtn = document.querySelector('.pause'),
restartBtn = document.querySelector('.restart'),
time = document.querySelector('header')

let [milliseconds, secondsTime, minutesTime , hoursTime] = [0,0,0,0]
let timer;
startBtn.addEventListener('click',()=>{
    timer = setInterval(() => {
        displayTime();
    }, 10);
})

function displayTime(){
    milliseconds += 10;
    if(milliseconds == 1000){
        milliseconds = 0;
        secondsTime++;
        if(secondsTime == 60){
            secondsTime = 0;
            minutesTime++
            if(minutesTime == 60){
                minutesTime = 0;
                hoursTime++;
            }
        }
    }
    let h = hoursTime < 10 ? `0${hoursTime}` : hoursTime
    let m = minutesTime < 10 ? `0${minutesTime}` : minutesTime
    let s = secondsTime < 10 ? `0${secondsTime}` : secondsTime
    let mili = milliseconds < 10 ? `00${milliseconds}` : milliseconds < 100 ? `0${milliseconds}` : milliseconds;
    time.innerHTML = `${h} : ${m} : ${s} : ${mili}`
}

pauseBtn.addEventListener('click',()=>{
    clearInterval(timer)
})

restartBtn.addEventListener('click',()=>{
    [milliseconds, secondsTime, minutesTime , hoursTime] = [0,0,0,0]
    time.innerHTML = `00 : 00 : 00 : 000`
    clearInterval(timer)
})