console.log('hello')
setInterval(()=>{
    let date = new Date();
    let seconds = date.getSeconds();
    let minutes = date.getMinutes();
    let hours = date.getHours();
    
    let srotate = 6*seconds
    let mrotate = 6*minutes
    let hrotate = 30*hours + minutes/2

    let hourEl = document.querySelector('.hour')
    let minutesEl = document.querySelector('.minute')
    let secondsEl = document.querySelector('.second')

    hourEl.style.transform = `rotate(${hrotate}deg)`
    minutesEl.style.transform = `rotate(${mrotate}deg)`
    secondsEl.style.transform = `rotate(${srotate}deg)`

},1000)