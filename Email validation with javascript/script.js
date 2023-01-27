const input = document.querySelector('input'),
btn = document.querySelector('button'),
info = document.querySelector('p'),
exclam = document.querySelector('.fa-circle-exclamation'),
field = document.querySelector('.field')

//regular expression for check our email validation 
let regex = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/

input.addEventListener('focus',()=>{
    field.classList.add('active')
    field.querySelector('i').style.color = 'rgb(11, 125, 170)'
})

input.addEventListener('blur',()=>{
    field.classList.remove('active')
    field.querySelector('i').style.color = 'gray'
})

btn.addEventListener('click',()=>{
    field.querySelector('i').style.color = 'rgb(11, 125, 170)'
    if(input.value == ""){
        info.classList.add('active')
        exclam.classList.add('active')
        exclam.style.color = 'red'
        exclam.classList.replace('fa-check','fa-circle-exclamation')
        field.style.borderColor = 'rgb(11, 125, 170)'
        info.innerHTML = 'Email cant be empty'
        info.style.color = 'red'
        field.style.borderColor = 'red'

    }else if(input.value.match(regex)){
        info.classList.add('active')
        info.style.color = 'rgb(11, 125, 170)'
        exclam.classList.add('active')
        exclam.style.color = 'rgb(11, 125, 170)'
        exclam.classList.replace('fa-circle-exclamation','fa-check')
        field.style.borderColor = 'rgb(11, 125, 170)'
        info.innerHTML = 'This is valid email'

    }else{
        info.classList.add('active')
        exclam.classList.add('active')
        field.style.borderColor = 'red'
        info.innerHTML = 'Please enter a valid email'
        exclam.style.color = 'red'
        exclam.classList.replace('fa-check','fa-circle-exclamation')
        info.style.color = 'red'
    }
})