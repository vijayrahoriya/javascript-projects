const searchEl = document.querySelector('.search');
const icon = document.getElementById('searchIcon');
icon.addEventListener('click',()=>{
    searchEl.classList.toggle('active')
})

const boxEl = document.querySelectorAll('.box')
console.log(boxEl)
const hideBoxEl = document.getElementsByClassName('hidebox');

boxEl.forEach((item)=>{
    item.addEventListener('click',()=>{
        item.nextElementSibling.classList.toggle('active')
    })
})