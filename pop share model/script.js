const viewEl = document.querySelector(".view-button"),
modelEl = document.querySelector('.model'),
copyBtn = document.querySelector('.model button'),
inputEl = document.querySelector('input'),
formEl = document.querySelector('form'),
closeBtn = document.querySelector('.fa-times')


viewEl.addEventListener('click',()=>{
    viewEl.classList.add('hide');
    modelEl.classList.add('show');
    copyBtn.addEventListener('click',(e)=>{
        e.preventDefault();
        let inputVal = inputEl.value
        formEl.classList.add('show');
        // inputEl.style.background = 'rgb(10, 132, 173)'
        // inputEl.style.color = '#fff'
        inputEl.select();
        navigator.clipboard.writeText(inputVal)
        copyBtn.innerHTML = 'Copied'
        setTimeout(() => {
            copyBtn.innerHTML = 'Copy';
            window.getSelection().removeAllRanges();
        }, 3000);
    })
})

closeBtn.addEventListener('click',()=>{
    viewEl.classList.remove('hide');
    modelEl.classList.remove('show')
})