const butE1 = document.querySelector('.but')
const rollE1 = document.querySelector('.roll')
const lightE1 = document.getElementById('light')
const darkE1 = document.getElementById('dark')

butE1.addEventListener('click',()=>{
    rollE1.classList.toggle('active')
    document.body.classList.toggle('active')
})