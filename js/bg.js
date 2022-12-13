const containerE1 = document.querySelector('.container')
const btnE1 = document.querySelector('.btn')
const closeicon = document.querySelector('.close-icon')
const popupE1 = document.querySelector('.popup-container')

btnE1.addEventListener('click',()=>{
    containerE1.classList.add('active')
    popupE1.classList.remove('active')
})

closeicon.addEventListener('click',()=>{
    popupE1.classList.add('active')
    containerE1.classList.remove('active')
})