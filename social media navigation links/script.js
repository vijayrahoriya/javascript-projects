const openIcon = document.querySelector('.icon i'),
buttonsDiv = document.querySelector('.buttons')

openIcon.addEventListener('click',()=>{
    buttonsDiv.classList.toggle('active')
    openIcon.classList.toggle('active')
})