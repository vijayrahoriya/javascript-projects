const progress = document.querySelector('.indicators'),
prevBtn = document.querySelector('.prev'),
nextBtn = document.querySelector('.next'),
circles = document.querySelectorAll('.circle');

let widthEl = 0;
let index = 0;
nextBtn.addEventListener('click',()=>{
    prevBtn.classList.remove('active')
    widthEl += 33;
    index += 1;
    if(index == circles.length - 1){
        nextBtn.classList.add('active')
    }
    progress.style.width = widthEl + '%'
    circles[index].classList.add('active')
})

prevBtn.addEventListener('click',()=>{
    nextBtn.classList.remove('active')
    widthEl -= 33;
    progress.style.width = widthEl + '%'
    circles[index].classList.remove('active')
    index -= 1;
    if(index == 0){
        prevBtn.classList.add('active')
    }
})