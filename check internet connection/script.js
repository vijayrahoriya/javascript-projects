let isOnline = true, intervalId,timer=10;
const popup = document.querySelector('.popup'),
icon = popup.querySelector('i'),
title = popup.querySelector('.connection'),
desc = popup.querySelector('p')
const checkConnection = async()=>{
    try{
        const response =await fetch('https://jsonplaceholder.typicode.com/posts');
        isOnline = response.status >= 200 && response.status < 300
    }catch(err){
        isOnline = false
    }
    timer = 10;
    clearInterval(intervalId)
    // console.log(isOnline)
    hadlepopup(isOnline);
}

const hadlepopup = (status)=>{
    if(status){
        icon.className = 'uil uil-wifi';
        title.innerText = 'Restored Connection';
        desc.innerText = 'Your device is now succesfully connected to the internet'
        popup.classList.add('online')
        return setTimeout(()=> popup.classList.remove('show'),200)
    }
    icon.className = 'uil uil-wifi-slash';
    title.innerText = 'Lost Connection';
    desc.innerHTML = 'Your network is unavailable. We will attempt to reconnect you in <b>10</b> seconds.'
    popup.className = ('popup show')
    intervalId = setInterval(()=>{
        timer--;
        if(timer === 0) checkConnection();
        popup.querySelector('p b').innerText = timer
    },1000)
}

popup.querySelector('button').addEventListener('click',checkConnection);

setInterval(()=> isOnline && checkConnection() , 3000)