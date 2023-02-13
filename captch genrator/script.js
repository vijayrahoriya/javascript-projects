const captcha = document.querySelector('.captcha'),
refreshBtn = document.querySelector('header button'),
inputEl = document.querySelector('input'),
submitBtn = document.querySelector('.submit');

let randomcapcha = ""
window.onload = () =>{
    genrateCaptcha();
}

refreshBtn.addEventListener('click',genrateCaptcha)

function genrateCaptcha(){
    inputEl.value = ""
    captcha.innerHTML = ""
    let char = '1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
    for(let i=0; i<9; i++){
        let randomChar = char[Math.floor(Math.random() * char.length)]
        randomcapcha += randomChar;
        let span = document.createElement('span');
        span.innerHTML = randomChar;
        captcha.appendChild(span)
    }
}

submitBtn.addEventListener('click',()=>{
    let value = inputEl.value;
    console.log(randomcapcha == value)
    if(randomcapcha == value){
        alert('captcha matched')
        inputEl.value = ""
    }else{
        alert('captch does not match')
    }
})