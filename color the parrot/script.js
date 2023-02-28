const bodybtn = document.querySelector('#body-btn'),
mainWingBtn = document.querySelector('#main-wing-btn'),
subWingBtn = document.querySelector('#sub-wing-btn'),
uppperBeakBtn = document.querySelector('#upper-beak-btn'),
lowerBeakBtn = document.querySelector('#lower-beak-btn'),
clawBtn = document.querySelector('#claw-btn'),
tailwingBtn = document.querySelector('#tail-wing-btn'),
headWingBtn = document.querySelector('#head-wing-btn'),
eyePatchBtn = document.querySelector('#eye-patch-btn'),
eyeBtn = document.querySelector('#eye-btn');

let colors = ["#cd0000","#f03800","#ffb64c","#ff9100","#0095ff","#1fbf66","#ff4380","#deecf1","#714c2f","#7fe881","#f7006a"];

let counter1 = 0,counter2 = 0,counter3 = 0,counter4 = 0,counter5=0,counter6=0,counter7=0,counter8=0,counter9=0,counter10 = 0;

function setCounterValue(counter){
    return counter < colors.length - 1? counter + 1 : 0;
}

bodybtn.addEventListener('click',()=>{
    document.querySelectorAll('.body-clr').forEach(item=>{
        item.style.backgroundColor = colors[counter1]
    })
    document.querySelector('.wing-color2-inner').style.borderTop = colors[counter1]
    counter1  = setCounterValue(counter1)
})

mainWingBtn.addEventListener('click',()=>{
    document.querySelector('.wing-color1').style.backgroundColor = colors[counter2]
    counter2 = setCounterValue(counter2)
})

subWingBtn.addEventListener('click',()=>{
    document.querySelector('.wing-color2').style.borderTopColor = colors[counter3]
    counter3 = setCounterValue(counter3)
})

uppperBeakBtn.addEventListener('click',()=>{
    document.querySelector('.beak-upper').style.backgroundColor = colors[counter4]
    counter4 = setCounterValue(counter4)
})

lowerBeakBtn.addEventListener('click',()=>{
    document.querySelector('.beak-lower').style.backgroundColor = colors[counter5]
    counter5 = setCounterValue(counter5)
})

clawBtn.addEventListener('click',()=>{
    document.querySelector('.leg').style.backgroundColor = colors[counter6]
    counter6 = setCounterValue(counter6)
})

tailwingBtn.addEventListener('click',()=>{
    document.querySelectorAll('.tail-wing').forEach(item=>{
        item.style.backgroundColor = colors[counter7]
        counter7 = setCounterValue(counter7)
    })
})

headWingBtn.addEventListener('click',()=>{
    document.querySelector('.feather').style.backgroundColor = colors[counter8]
    counter8 = setCounterValue(counter8)
})

eyePatchBtn.addEventListener('click',()=>{
    document.querySelector('.eye-patch').style.backgroundColor = colors[counter9]
    counter9 = setCounterValue(counter9)
})

eyeBtn.addEventListener('click',()=>{
    document.querySelector('.eye').style.backgroundColor = colors[counter10]
    counter10 = setCounterValue(counter10)
})