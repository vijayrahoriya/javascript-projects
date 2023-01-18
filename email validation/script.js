const email = document.querySelector('#email'),
icon1 = document.querySelector('.icon1'),
icon2 = document.querySelector('.icon2'),
errorEl = document.querySelector('.error'),
btn = document.querySelector('button');

let regex = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/
function check(){
    if(email.value.match(regex)){
        errorEl.style.display = 'none'
        icon1.style.display = 'none'
        email.style.borderColor = '#27ae60'
        icon2.style.display = 'flex'
        btn.style.display = 'block'
    }else{
        errorEl.style.display = 'block'
        icon1.style.display = 'flex'
        email.style.borderColor = '#e74c3c'
        icon2.style.display = 'none'
        btn.style.display = 'none'
    }
    if(email.value == ""){
        errorEl.style.display = 'none'
        icon1.style.display = 'none'
        email.style.borderColor = 'lightgray'
        icon2.style.display = 'none'
        btn.style.display = 'none'
    }
}

btn.addEventListener('click',(e)=>{
    e.preventDefault();
        errorEl.style.display = 'none'
        icon1.style.display = 'none'
        email.style.borderColor = 'lightgray'
        icon2.style.display = 'none'
        btn.style.display = 'none'
        email.value = ""
})