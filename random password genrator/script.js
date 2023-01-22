const passwordInput = document.querySelector('.top input'),
copyBtn = document.querySelector('.fa-copy'),
refreshBtn = document.querySelector('.fa-arrows-rotate'),
inputRange = document.querySelector('.bottom input'),
passwordLength = document.querySelector('.bottom span'),
copyInfo = document.querySelector('.copy');

let inputRangeVal = parseInt(inputRange.value);
let randomPass = ""
let chars = "1234567890~!@#$%^&*()_+abcdefghijklmnopqrstuvwxyz"

inputRange.addEventListener('input',()=>{
    genratePass();
})

function genratePass(){
    randomPass = ""
    inputRangeVal = parseInt(inputRange.value)
    passwordLength.innerHTML = inputRangeVal
    for(let i=0; i<inputRangeVal;i++){
        let randomChars = chars[Math.floor(Math.random()*chars.length)]
        randomPass += randomChars;
    }
    passwordInput.value = randomPass
}

refreshBtn.addEventListener('click',genratePass)
copyBtn.addEventListener('click',()=>{
    navigator.clipboard.writeText(passwordInput.value)
    copyInfo.classList.add('active')
    setTimeout(() => {
        copyInfo.classList.remove('active');
    }, 2000);
})