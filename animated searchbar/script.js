const searchEl = document.querySelector('.magni');
const searchcontainerEl = document.querySelector('.search-bar-container');
const micEl = document.querySelector(".mic");

searchEl.addEventListener('click',()=>{
    searchcontainerEl.classList.toggle('active')
})