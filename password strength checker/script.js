const field = document.querySelector('.field'),
    inputEl = document.querySelector('input'),
    showBtn = document.querySelector('.field i'),
    infoEl = document.querySelector('.info'),
    infoText = document.querySelector('.info span');

let regx1 = /[a-zA-Z]/
let regx2 = /[0-9]/
let regx3 = /[~!@#$%^&*()_+]/

showBtn.addEventListener('click',()=>{
    if(showBtn.classList.contains('fa-eye-slash')){
        inputEl.type == 'password' ? inputEl.type ='text' : inputEl.type = 'password'
        showBtn.classList.replace('fa-eye-slash','fa-eye')
    }else{
        inputEl.type == 'password' ? inputEl.type ='text' : inputEl.type = 'password'
        showBtn.classList.replace('fa-eye','fa-eye-slash')
    }
})

inputEl.addEventListener('input', () => {
    let val = inputEl.value
    if (val.match(regx1) || val.match(regx2) || val.match(regx3)) {
        field.style.borderColor = 'red';
        infoEl.style.color = 'red'
        infoEl.querySelector('i').style.background = 'red'
        infoEl.classList.add('show')
        showBtn.style.color = 'red'
        infoText.innerHTML = 'Password is weak'
    }

    if ((val.match(regx1) && val.match(regx2)) || (val.match(regx1) && val.match(regx3)) || (val.match(regx2) && val.match(regx3))) {
        field.style.borderColor = 'orange';
        infoEl.style.color = 'orange'
        infoEl.querySelector('i').style.background = 'orange'
        infoEl.classList.add('show')
        showBtn.style.color = 'orange'
        infoText.innerHTML = 'Password is medium'
    }

    if ((val.match(regx1) && val.match(regx2) && val.match(regx3))) {
        field.style.borderColor = 'green';
        infoEl.style.color = 'green'
        infoEl.querySelector('i').style.background = 'green'
        infoEl.classList.add('show')
        showBtn.style.color = 'green'
        infoText.innerHTML = 'Password is strong'
    }

    if (val == "") {
        infoEl.classList.remove('show')
        field.style.borderColor = 'lightgray';
        showBtn.style.color = '#999'
    }
})
