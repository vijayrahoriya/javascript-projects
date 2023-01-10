const inputConfirm = document.querySelector('.confir'),
inputPass = document.querySelector('.pass'),
hideShowEl = document.querySelector('.confirm span'),
checkBtn = document.querySelector('button'),
infoEl = document.querySelector('.info')
 
inputPass.addEventListener('input',()=>{
    if(inputPass.value && inputPass.value.length > 4){
        inputConfirm.style.pointerEvents = 'auto';
    }else{
        inputConfirm.style.pointerEvents = 'none';
        infoEl.classList.remove('active')
    }
})

inputConfirm.addEventListener('input',()=>{
    if(!inputConfirm.value){
        hideShowEl.classList.remove('show');
        checkBtn.style.pointerEvents = 'none'
    }
    else{
        inputConfirm.style.pointerEvents = 'default';
        hideShowEl.classList.add('show');
        checkBtn.style.pointerEvents = 'auto'
    }
})

checkBtn.addEventListener('click',()=>{
    let confirmPass = inputConfirm.value;
    let password = inputPass.value;
    infoEl.classList.add('active')
    if(confirmPass === password){
        infoEl.innerHTML = 'Nice! Confirm Password Matched'
        infoEl.style.background = 'rgb(129, 224, 129)'
    }else{
        infoEl.innerHTML = `Error! Confirm Password doesn't matched`
        infoEl.style.background = 'rgb(227, 159, 159)'
    }
})

hideShowEl.addEventListener('click',()=>{
    if(inputConfirm.type === 'password' && inputPass.type === 'password'){
        inputConfirm.type = 'text';
        inputPass.type = 'text'
    }else{
        inputConfirm.type = 'password';
        inputPass.type = 'password'
    }
    hideShowEl.innerHTML = hideShowEl.textContent == 'Show' ? 'Hide' : 'Show'
})