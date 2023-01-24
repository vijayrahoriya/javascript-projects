const inputEl = document.querySelectorAll('.fillInput'),
fieldEl = document.querySelectorAll('.field'),
loginBtn = document.querySelector('.loginBtn'),
SignPageBtn = document.querySelectorAll('p .signupPage'),
loginField = document.querySelector('.login'),
signUpField = document.querySelector('.signup'),
showPassBtn = document.querySelectorAll('.showPass');

inputEl.forEach(input=> {
    input.addEventListener('focus',()=>{
        input.parentElement.style.borderColor = 'rgb(42, 153, 197)'
        input.previousElementSibling.style.color = 'rgb(42, 153, 197)'
    })
    input.addEventListener('blur',()=>{
        input.parentElement.style.borderColor = '#999'
        input.previousElementSibling.style.color = '#999'
    })
})

const submitForm = () =>{
    alert('form submitted')
    inputEl.forEach(input=>{
        input.value = ""
    })
}

SignPageBtn.forEach(signupPage => {
    signupPage.addEventListener('click',(e)=>{
        e.preventDefault();
        signUpField.classList.toggle('show')
        loginField.classList.toggle('hide')
    })
})

showPassBtn.forEach(showBtn =>{
    showBtn.addEventListener('click',()=>{
        showBtn.classList.contains('fa-eye-slash') ? showBtn.classList.replace('fa-eye-slash','fa-eye') : showBtn.classList.replace('fa-eye','fa-eye-slash')
        showBtn.previousElementSibling.type == 'password'? showBtn.previousElementSibling.type = 'text' : showBtn.previousElementSibling.type = 'password'
    })
})