const toggle = document.querySelector('header'),
content = document.querySelector('.content'),
icon = document.querySelector('header i'),
inputs = document.querySelectorAll('input'),
language = document.querySelector('header span');

let checkedInput = 0;
toggle.addEventListener('click',()=>{
    icon.classList.toggle('active')
    content.classList.toggle('active')
})

inputs.forEach(input=>{
    input.addEventListener('click',()=>{
        if(input.checked){
            checkedInput++
            language.innerHTML = `${checkedInput} Selected`
        }else{
            checkedInput--
            checkedInput == 0 ? language.innerHTML = 'Select Language' : language.innerHTML = `${checkedInput} Selected`
            }
        })
})