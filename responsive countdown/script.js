const daysEl = document.querySelector('.days header'),
    hoursEl = document.querySelector('.hours header'),
    minutesEl = document.querySelector('.minutes header'),
    secondsEl = document.querySelector('.seconds header');

const countDown = () => {
    // format: Date(year,month,day,hour,minute)
    let endDate = new Date(2023, 1, 20, 8, 20)
    let endTime = endDate.getTime();
    let todayTime = new Date().getTime();

    let remainTime = endTime - todayTime;
    let oneSec = 1000;
    let oneMin = oneSec * 60;
    let oneHr = oneMin * 60;
    let oneDay = oneHr * 24;

    if(todayTime > endTime){
        document.querySelector('.wrapper').innerHTML = '<h1>Countdown has expired</h1>'
    }else{
    let daysLeft = Math.floor(remainTime / oneDay)
    let hrsLeft = Math.floor((remainTime % oneDay) / oneHr)
    let minsLeft = Math.floor((remainTime % oneHr) / oneMin)
    let secsLeft = Math.floor((remainTime % oneMin) / oneSec)
    // console.log(daysLeft,hrsLeft,minsLeft,secsLeft)
    daysLeft = daysLeft < 10 ? `0${daysLeft}` : daysLeft
    hrsLeft = hrsLeft < 10 ? `0${hrsLeft}` : hrsLeft
    minsLeft = minsLeft < 10 ? `0${minsLeft}` : minsLeft
    secsLeft = secsLeft < 10 ? `0${secsLeft}` : secsLeft
    daysEl.innerHTML = daysLeft
    hoursEl.innerHTML = hrsLeft
    minutesEl.innerHTML = minsLeft
    secondsEl.innerHTML = secsLeft
    }
}

let timer = setInterval(countDown,1000)

countDown();

