let countdown;
const timerDisplay = document.querySelector('.display_time_left'),
endTime = document.querySelector('.display_end_time'),
buttons = document.querySelectorAll('[data-time]')

function timer(seconds){
    clearInterval(countdown)
    const now = Date.now() //give current time
    const then = now + seconds * 1000;
    displayTimeLeft(seconds)
    displayEndTime(then)

    countdown = setInterval(() => {
        const secondsLeft = Math.round((then - Date.now())/ 1000)
        if(secondsLeft <= 0){
            clearInterval(countdown);
            return;
        }
        displayTimeLeft(secondsLeft)
    }, 1000);
}

function displayTimeLeft(seconds){
    // console.log(seconds)
    let minutes = Math.floor(seconds / 60)
    let remainSeconds = seconds % 60;
    // console.log(remainSeconds, minutes)
    let display = `${minutes}:${remainSeconds < 10 ? "0" : ""}${remainSeconds}`
    timerDisplay.textContent = display;
}

function displayEndTime(timestamp){
    const end = new Date(timestamp)//it will give us a proper date
    const hour = end.getHours();
    const minutes = end.getMinutes();
    const seconds = end.getSeconds();
    
    endTime.textContent = `Be Back at ${hour > 12 ? hour - 12 : hour}:${minutes < 10 ? "0" : ""}${minutes}`
}

function startTimer(){
    const seconds = parseInt(this.dataset.time)
    timer(seconds)
}

buttons.forEach(button=> button.addEventListener('click',startTimer))

document.customForm.addEventListener('submit',function(e){
    e.preventDefault();
    const minutes = parseInt(this.minutes.value);
    timer(minutes * 60)
    this.reset();
})
