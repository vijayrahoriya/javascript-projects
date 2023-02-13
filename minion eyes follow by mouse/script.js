const eye_ref = document.querySelectorAll('.eye');

// mousemove for devices with mouse and touchmouse for touchscreen devices 

let events = ['mousemove','touchmove']

function isTouchDevice(){
    try {
        document.createEvent('TouchEvent')
        return true;
    } catch (error) {
        return false;
    }
}

events.forEach((eventType)=>{
    document.body.addEventListener(eventType,(event)=>{
        eye_ref.forEach((eye)=>{
            // getBoundingClientRect() method gives the position relative to the viewport 
            let eyeX = eye.getBoundingClientRect().left + eye.clientWidth / 2;
            let eyeY = eye.getBoundingClientRect().top + eye.clientHeight / 2
            var x = !isTouchDevice() ? event.clientX : event.touches[0].clientX
            var y = !isTouchDevice() ? event.clientY : event.touches[0].clientY;
            // console.log(x,y)
            // Math.atan2() returns angle in radian 
            let radian = Math.atan2(x - eyeX, y - eyeY);
            let rotationDegrees = radian * (180 / Math.PI) * -1 + 180;
            eye.style.transform = 'rotate('+rotationDegrees+'deg)'
        })
    })
})