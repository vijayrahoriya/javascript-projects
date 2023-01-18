const viewModal = document.querySelector('.view'),
boxEl = document.querySelector('.box'),
closeBtn = document.querySelector('.fa-times'),
subBtn = document.querySelector('button'),
inputEl = document.querySelector('input');

const showmodal = () =>{
    boxEl.classList.add('show')
    viewModal.classList.add('hide')
}

viewModal.addEventListener('click',showmodal)
closeBtn.addEventListener('click',()=>{
    boxEl.classList.remove('show');
    viewModal.classList.remove('hide')
})

subBtn.addEventListener('click',(e)=>{
    if(inputEl.value === "")return;
    boxEl.classList.remove('show');
    viewModal.classList.remove('hide')
    inputEl.value = ""
})