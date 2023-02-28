const inputs = document.querySelectorAll('input'),
leftEye = document.querySelector('.eyes .left'),
rightEye = document.querySelector('.eyes .right'),
handsEl = document.querySelector('.hands');

inputs.forEach(inp=>{
    inp.addEventListener('focus',()=>{
        leftEye.classList.add('active')
        rightEye.classList.add('active')
        if(inp.type == 'password'){
            handsEl.classList.add('active')
        }
        if(inp.type == 'text'){
            handsEl.classList.remove('active')
        }
    })
    inp.addEventListener('blur',()=>{
        leftEye.classList.remove('active')
        rightEye.classList.remove('active')
    })
})