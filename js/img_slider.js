const next = document.getElementsByClassName('next')[0]
const previous = document.getElementsByClassName('prev')[0]
const imagecontainerE1 = document.querySelector('.image-container')
const imgsE1 = document.querySelectorAll('img')
let timeout;

let currentimg = 1;
next.addEventListener('click',()=>{
    currentimg++
    clearTimeout(timeout)
    updateimg();
})

previous.addEventListener('click',()=>{
    currentimg--
    clearTimeout(timeout)
    updateimg();
})

updateimg();

function updateimg(){
    if(currentimg > imgsE1.length){
        currentimg = 1;
    }
    else if(currentimg < 1){
        currentimg = imgsE1.length
    }
    imagecontainerE1.style.transform = `translateX(-${(currentimg -1)* 500}px)`

    timeout = setTimeout(() => {
        currentimg++
        updateimg();
    }, 3000);
}


