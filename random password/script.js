const inputEl = document.querySelector('input');
const copyEl = document.querySelector('span');
const btnEl = document.querySelector('button');
const copytext = document.querySelector('.copy');

const genrate = ()=>{
    let password = "";
    let char = "!@#$%^&*()abcdefghijklmnopqrstuvwxyz0123456789";
    for(let i = 0; i<8; i++){
        password += char[Math.floor(Math.random() * char.length)]
    }
    
    inputEl.value = password;
}

btnEl.addEventListener('click',()=>{
    genrate();
    copytext.classList.remove('active')
})

copyEl.addEventListener('click',()=>{
    inputEl.select();
    copytext. classList.add('active')
    document.execCommand('copy')
})

