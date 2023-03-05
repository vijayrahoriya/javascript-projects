const canvas = document.querySelector('#scratch')
let context = canvas.getContext('2d')

const init = () =>{
    let gradientColor = context.createLinearGradient(0,0,135,135);
    gradientColor.addColorStop(0,"#c3a3f1")
    gradientColor.addColorStop(1,"#6414e9")
    context.fillStyle = gradientColor;
    context.fillRect(0,0,200,200)
}

let mouseX = 0,
mouseY = 0,
isDragged = false;

let events = {
    mouse:{
        move:"mousemove",
        down:"mousedown",
        up:"mouseup"
    },
    touch:{
        move:"touchmove",
        down:"touchstart",
        up:"touchend"
    }
}

let deviceType = "";

const isTouchDevice = () =>{
    try {
        document.createEvent('TouchEvent')
        deviceType = "touch"
        return true
    } catch (error) {
        deviceType = "mouse"
        return false;
    }
}

let rectLeft = canvas.getBoundingClientRect().left
let rectTop = canvas.getBoundingClientRect().top

const getXY = (e) =>{
    mouseX = (!isTouchDevice() ? e.pageX : e.touches[0].pageX) - rectLeft
    mouseY = (!isTouchDevice() ? e.pageY : e.touches[0].pageY) - rectTop
}

isTouchDevice();
canvas.addEventListener(events[deviceType].down,(event)=>{
    isDragged = true;
    getXY(event)
    scratch(mouseX,mouseY)
})

canvas.addEventListener(events[deviceType].move,(event)=>{
    if(!isTouchDevice()){
        event.preventDefault();
    }
    if(isDragged){
        getXY(event);
        scratch(mouseX,mouseY)
    }
})

canvas.addEventListener(events[deviceType].up,(event)=>{
    isDragged = false
})

canvas.addEventListener('mouseleave',()=>{
    isDragged = false
})

const scratch = (x,y) =>{
    //destination-out draws new shapes behind the existing canvas content
    context.globalCompositeOperation = "destination-out";
    context.beginPath();
    context.arc(x,y,12,0,2 * Math.PI);
    context.fill();

}

window.onload = init