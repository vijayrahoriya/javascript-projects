const slider = document.querySelector('input'),
dragLine = document.querySelector('.drag-line'),
imgEl = document.querySelector('.img-2');

slider.oninput = ()=>{
    let inputVal = slider.value;
    dragLine.style.left = inputVal + "%"
    imgEl.style.width = inputVal + '%'
}