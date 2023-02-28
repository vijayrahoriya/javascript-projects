const dragableElem = document.querySelector('.dragable-elem')
let initialX = 0,
initialY = 0;
let moveElement  = false;

const events = {
    mouse:{
        down: "mousedown",
        move:"mousemove",
        up:"mouseup"
    },
    touch:{
        down:"touchstart",
        move:"touchmove",
        up:'touchend'
    }
};

let deviceType = ""

const isTouchDevice = () =>{
    try {
        document.createEvent('TouchEvent')
        deviceType = 'touch'
        return true;
    } catch (error) {
        deviceType = 'mouse'
        return false;
    }
}

isTouchDevice();

// mousedown 
dragableElem.addEventListener(events[deviceType].down,(e)=>{
    e.preventDefault();
    initialX = !isTouchDevice() ? e.clientX : e.touches[0].clientX
    initialY = !isTouchDevice() ? e.clientY : e.touches[0].clientY

    moveElement  = true;
})

// move 
dragableElem.addEventListener(events[deviceType].move,(e)=>{
    //if movement == true then set top and left
    if(moveElement){
        e.preventDefault();
        let newX = !isTouchDevice() ? e.clientX : e.touches[0].clientX
        let newY = !isTouchDevice() ? e.clientY : e.touches[0].clientY

        dragableElem.style.top = dragableElem.offsetTop - (initialY - newY) + "px";
        dragableElem.style.left = dragableElem.offsetLeft - (initialX - newX) + "px";

        initialX = newX
        initialY = newY
    }
})

dragableElem.addEventListener(events[deviceType].up,(stopMovement = (e) =>{
    moveElement = false;
}))

dragableElem.addEventListener('mouseleave',stopMovement)
dragableElem.addEventListener(events[deviceType].up,(e)=>{
    moveElement = false;
})