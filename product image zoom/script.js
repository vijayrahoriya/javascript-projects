const imageContainer = document.querySelector('.image-container'),
productImage = document.querySelector('#product-image'),
overlay = document.querySelector('#overlay'),
mouseOverlay = document.querySelector('#mouse-overlay');

//events object
let events = {
    mouse:{
        move:"mousemove"
    },
    touch:{
        move:"touchmove"
    }

}

let deviceType = "";
//check device type
const isTouchDevice = () => {
    try {
        deviceType = "touch";
        document.createEvent("TouchEvent")
        return true;
    } catch (e) {
        deviceType = "mouse";
        return false;
    }
}

//hides overlay
const hideElement = () =>{
    overlay.style.display = 'none'
    mouseOverlay.style.display = 'none'
}

isTouchDevice();

imageContainer.addEventListener(events[deviceType].move,(e)=>{
    try {
        var x = !isTouchDevice() ? e.pageX : e.touches[0].pageX
        var y = !isTouchDevice() ? e.pageX : e.touches[0].pageY;
    } catch (error) {}
    let imageWidth = imageContainer.offsetWidth;
    let imageHeight = imageContainer.offsetHeight;
    //check mouse out of image container

    if(
        imageWidth - (x-imageContainer.offsetLeft) < 15 || x - imageContainer.offsetLeft < 15 || imageHeight - (y - imageContainer.offsetTop) < 15 || y - imageContainer.offsetTop < 15
    ){
        hideElement();
    }
    else{
        overlay.style.display = 'block'
        mouseOverlay.style.display = 'inline-block'
    }

    var posX = ((x - imageContainer.offsetLeft) / imageWidth).toFixed(4) * 100;
    var posY = ((y - imageContainer.offsetTop) / imageHeight).toFixed(4) * 100;
    overlay.style.backgroundPosition = posX + "%" + posY + "%"

    //move the overlay with cursor
    mouseOverlay.style.top = y + "px";
    mouseOverlay.style.left = x + "px"
    
})

