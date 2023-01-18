const slidePage = document.querySelector('.slidepage'),
firstNextBtn = document.querySelector('.nextBtn'),
prevBtnSec = document.querySelector('.prev1'),
nextBtnSec = document.querySelector('.next1'),
prevBtnThird = document.querySelector('.prev2'),
nextBtnThird = document.querySelector('.next2'),
prevBtnFourth = document.querySelector('.prev3'),
submitBtn = document.querySelector('.submit'),
progressText = document.querySelectorAll('.step'),
progressCheck = document.querySelectorAll('.step .fa-check'),
bullet = document.querySelectorAll('.step .bullet')
let max = 4,current = 1;
console.log(progressText[current],progressCheck[current])

firstNextBtn.addEventListener('click',(e)=>{
    e.preventDefault();
    slidePage.style.marginLeft = `-25%`
    progressText[current - 1].classList.add('active')
    current += 1;
})

nextBtnSec.addEventListener('click',(e)=>{
    e.preventDefault();
    slidePage.style.marginLeft = `-50%`
    progressText[current - 1].classList.add('active');
    current += 1;
})

nextBtnThird.addEventListener('click',(e)=>{
    e.preventDefault();
    slidePage.style.marginLeft = `-75%`
    progressText[current - 1].classList.add('active')
    current += 1;
})

prevBtnSec.addEventListener('click',(e)=>{
    e.preventDefault();
    slidePage.style.marginLeft = `0%`
    progressText[current - 2].classList.remove('active');
    current -= 1;
})

prevBtnThird.addEventListener('click',(e)=>{
    e.preventDefault();
    slidePage.style.marginLeft = `-25%`
    progressText[current - 2].classList.remove('active');
    current -= 1;
})

prevBtnFourth.addEventListener('click',(e)=>{
    e.preventDefault();
    slidePage.style.marginLeft = `-50%`
    progressText[current - 2].classList.remove('active');
    current -= 1;
})

submitBtn.addEventListener('click',(e)=>{
    e.preventDefault();
    alert('You are successfuly signed up')
    location.reload();
})

