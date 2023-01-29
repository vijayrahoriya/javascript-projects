const field = document.querySelector('.field'),
textLimit = document.querySelector('.text'),
textarea = document.querySelector('textarea')

let max = 100;
textarea.addEventListener('focus',()=>{
    field.style.borderColor = 'rgb(21, 127, 169)'
})

textarea.addEventListener('blur',()=>{
    field.style.borderColor = '#999'
})

textarea.addEventListener('input',()=>{
    let value = textarea.value
    value != "" ?  textLimit.classList.add('active') : textLimit.classList.remove('active')
    let charLength = value.split("").filter((word)=> word != " ").length
    textLimit.innerHTML = `${charLength}/${max}`
    textarea.maxLength = max
})