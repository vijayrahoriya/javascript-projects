const wrapper = document.querySelector('.wrapper'),
formEl = document.querySelector('.form');

wrapper.addEventListener('click',()=>{
    wrapper.classList.toggle('active')
    formEl.classList.toggle('show')
})