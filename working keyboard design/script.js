const inputEl = document.querySelector('textarea'),
keys = document.querySelectorAll('.row span');

keys.forEach(key=>{
    key.addEventListener('click',(e)=>{
        let elm;
        if(e.target.innerText.toUpperCase() == 'SPACE'){
            inputEl.value += " "
        }else{
            elm = e.target.innerText;
            inputEl.value += elm.toLowerCase();
        }
    })
})

inputEl.ondblclick = ()=>{
    inputEl.value = ""
}