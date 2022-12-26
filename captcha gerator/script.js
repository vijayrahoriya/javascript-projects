const contetnEl = document.querySelector('.content'),
refreshBtn = document.querySelector('.refresh'),
checkBtn = document.querySelector('.check'),
resultEl = document.querySelector('.result'),
inputEl = document.querySelector('input');

const genrateCaptch = ()=>{
    let char='1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let randomChar = '';
    for(let i=0;i<6; i++){
        randomChar += char[Math.floor(Math.random()* char.length)]
    }

    contetnEl.innerHTML = randomChar;
}

genrateCaptch();

refreshBtn.addEventListener('click',()=>{
    genrateCaptch();
    window.location.reload();
})
inputEl.addEventListener('input',()=>{
    if(!inputEl.value == ""){
        checkBtn.classList.add('active')
    }else{
        checkBtn.classList.remove('active')
        resultEl.className = ''
        resultEl.innerHTML = ''
    }
})

checkBtn.addEventListener('click',(e)=>{
    e.preventDefault();
    if(inputEl.value == contetnEl.innerText){
        resultEl.className = 'result active success'
        resultEl.innerHTML = 'Nice! You do not appear to be a robot'
    }else{
        resultEl.className = 'result active onerror'
        resultEl.innerHTML = 'captch does not match! try again'
    }
})