const hireBtn = document.querySelector('.hire'),
wrapper = document.querySelector('.wrapper'),
msgArea = document.querySelector('.message-area'),
cancelBtn = document.querySelector('.buttons button'),
closeBtn = document.querySelector('.fa-times');

hireBtn.addEventListener('click',()=>{
    wrapper.classList.add('hide')
    msgArea.classList.add('show')
})

closeBtn.addEventListener('click',()=>{
    wrapper.classList.remove('hide')
    msgArea.classList.remove('show')
    document.querySelector('textarea').value = ""
})

cancelBtn.addEventListener('click',()=>{
    closeBtn.click();
})