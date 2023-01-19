const inputEl = document.querySelectorAll('input'),
colorEl = document.querySelector('.color');

let inputVal1 = 50
,inputVal2 = 50,
inputVal3 = 50;
inputEl[0].addEventListener('input',()=>{
     inputVal1 = inputEl[0].value
     colorEl.innerHTML = `rgb(${inputVal1},${inputVal2},${inputVal3})`
     document.body.style.background = `${colorEl.innerHTML}`
})

inputEl[1].addEventListener('input',()=>{
     inputVal2 = inputEl[1].value
     colorEl.innerHTML = `rgb(${inputVal1},${inputVal2},${inputVal3})`
     document.body.style.background = `${colorEl.innerHTML}`
})

inputEl[2].addEventListener('input',()=>{
     inputVal3 = inputEl[2].value
     colorEl.innerHTML = `rgb(${inputVal1},${inputVal2},${inputVal3})`
     document.body.style.background = `${colorEl.innerHTML}`
})

colorEl.addEventListener('click',()=>{
    colorValue = colorEl.textContent
    navigator.clipboard.writeText(colorValue)
    colorEl.innerHTML = 'COPIED'
    setTimeout(() => {
        colorEl.innerHTML = colorValue
    }, 1000);
})

