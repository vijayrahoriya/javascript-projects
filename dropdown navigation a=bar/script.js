const searchIcon = document.querySelector('.fa-search'),
input = document.querySelector('.input')

searchIcon.addEventListener('click',()=>{
    input.classList.toggle('show')
})