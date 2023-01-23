const prevBtn = document.querySelector('.fa-chevron-left'),
nextBtn = document.querySelector('.fa-chevron-right'),
wrapperEl = document.querySelector('.wrapper'),
rowEl = document.querySelectorAll('.row'),
indicators = document.querySelectorAll(".indicators span")

let translateVal = 1;
prevBtn.addEventListener('click',()=>{
    translateVal--;
    console.log(translateVal)
    document.querySelector('.active').classList.remove('active')
    if(translateVal == 0){
        translateVal = rowEl.length;
    }
    indicators[translateVal - 1].classList.add('active')
    updateCards();
})

nextBtn.addEventListener('click',()=>{
    document.querySelector('.active').classList.remove('active')
    if(translateVal == rowEl.length){
        translateVal = 0;
    }
    indicators[translateVal].classList.add('active')
    translateVal++
    updateCards();
})

function updateCards(){
    if(translateVal > rowEl.length){
        translateVal = 1;
    }else if(translateVal < 1){
        translateVal = rowEl.length;
    }
    wrapperEl.style.transform = `translateX(-${(translateVal -1)* 960}px)`
}

indicators.forEach((indicator,indx)=>{
    indicator.addEventListener('click',()=>{
        document.querySelector('.active').classList.remove('active')
        indicator.classList.add('active')
        translateVal = indx + 1;
        updateCards();
    })
})