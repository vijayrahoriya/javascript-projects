const slider1 = document.querySelectorAll('input')[0],
slider2 = document.querySelectorAll('input')[1],
displayValOne = document.querySelector('.range1'),
displayValTwo = document.querySelector('.range2'),
track = document.querySelector('.track'),
sliderMaxValue = document.querySelector('input').max

window.onload = function(){
    sliderOne()
    sliderTwo()
}

let minGap = 0;

function sliderOne(){
    if(parseInt(slider2.value) - parseInt(slider1.value) <= minGap){
        slider1.value = parseInt(slider2.value) - minGap;
    }
    displayValOne.innerHTML = parseInt(slider1.value)
    fillColor();
}

function sliderTwo(){
    if(parseInt(slider2.value) - parseInt(slider1.value) <= minGap){
        slider2.value = parseInt(slider1.value) + minGap;
    }
    displayValTwo.innerHTML = parseInt(slider2.value)
    fillColor();
}

function fillColor(){
    let percent1 = (slider1.value / sliderMaxValue) * 100
    let percent2 = (slider2.value / sliderMaxValue) * 100
    track.style.background = `linear-gradient(to right,#dadae5 ${percent1}%,rgb(141, 58, 219) ${percent1}%, rgb(141,58,219) ${percent2}%, #dadae5 ${percent2}%)`
}