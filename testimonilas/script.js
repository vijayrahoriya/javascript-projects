const rowEl = document.querySelector('.row'),
boxEls = document.querySelectorAll('.box'),
prevBtn = document.querySelector('.fa-chevron-left'),
nextBtn = document.querySelector('.fa-chevron-right');

let index = 0;

const slideBoxes = () =>{
    if(index >= boxEls.length){
        index = 0;
    }
    rowEl.style.marginLeft = `-${600 * index}px`
}

nextBtn.addEventListener('click',()=>{
    index++ 
    slideBoxes();
})

prevBtn.addEventListener('click',()=>{
    if(index == 0){
        index = boxEls.length
    }
    index--
    slideBoxes();
})