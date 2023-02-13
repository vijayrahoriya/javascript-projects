const baseInput = document.querySelector('.base input'),
pxInput = document.querySelector('.px'),
emInput = document.querySelector('.em');

const calculateEm = () =>{
    let pxValue = parseInt(pxInput.value)
    let baseValue = parseInt(baseInput.value);
    let emValue = Math.floor(pxValue / baseValue)
    emInput.value = emValue
}

const calculatePx = () =>{
    let emValue = parseInt(emInput.value)
    let baseValue = parseInt(baseInput.value);
    let pxValue = Math.floor(baseValue * emValue)
    pxInput.value = pxValue
}

pxInput.addEventListener('input',calculateEm)
emInput.addEventListener('input',calculatePx)
baseInput.addEventListener('input',()=>{
    calculatePx();
    calculateEm();
})