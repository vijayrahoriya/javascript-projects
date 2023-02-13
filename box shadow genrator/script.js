const inputs = document.querySelectorAll('.inputs input'),
    insertShadow = document.querySelector('#check'),
    infoEl = document.querySelector('.info span'),
    boxEl = document.querySelector('.box'),
    copyBtn = document.querySelector('button');

let horizontal = 0,
    vertical = 0,
    blurness = 0, spread = 0, color = 0, opacity = 1, r = 0, g = 0, b = 0;
let shadow = '';

window.onload = () => {
    if (insertShadow.checked) {
        shadow = `inset ${vertical}px ${horizontal}px ${blurness}px ${spread}px rgba(${r},${g},${b},${opacity})`
        infoEl.innerHTML = shadow
        boxEl.style.boxShadow = shadow
        infoEl.innerHTML = shadow
    } else {
        shadow = `${vertical}px ${horizontal}px ${blurness}px ${spread}px rgba(${r},${g},${b},${opacity})`
        infoEl.innerHTML = shadow
        boxEl.style.boxShadow = shadow
        infoEl.innerHTML = shadow
    }
}

const setShadow = (elem) => {
    if (elem.id == 'hori') {
        horizontal = parseInt(elem.value)
        if (insertShadow.checked) {
            shadow = `inset ${vertical}px ${horizontal}px ${blurness}px ${spread}px rgba(${r},${g},${b},${opacity})`
            boxEl.style.boxShadow = shadow
            infoEl.innerHTML = shadow
        } else {
            shadow = `${vertical}px ${horizontal}px ${blurness}px ${spread}px rgba(${r},${g},${b},${opacity})`
            boxEl.style.boxShadow = shadow
            infoEl.innerHTML = shadow
        }
    }
    else if (elem.id == 'vertical') {
        vertical = parseInt(elem.value)
        if (insertShadow.checked) {
            shadow = `inset ${vertical}px ${horizontal}px ${blurness}px ${spread}px rgba(${r},${g},${b},${opacity})`
            boxEl.style.boxShadow = shadow
            infoEl.innerHTML = shadow
        } else {
            shadow = `${vertical}px ${horizontal}px ${blurness}px ${spread}px rgba(${r},${g},${b},${opacity})`
            boxEl.style.boxShadow = shadow
            infoEl.innerHTML = shadow
        }
    }
    else if (elem.id == 'blur') {
        blurness = parseInt(elem.value)
        if (insertShadow.checked) {
            shadow = `inset ${vertical}px ${horizontal}px ${blurness}px ${spread}px rgba(${r},${g},${b},${opacity})`
            boxEl.style.boxShadow = shadow
            infoEl.innerHTML = shadow
        } else {
            shadow = `${vertical}px ${horizontal}px ${blurness}px ${spread}px rgba(${r},${g},${b},${opacity})`
            boxEl.style.boxShadow = shadow
            infoEl.innerHTML = shadow
        }
    }
    else if (elem.id == 'spread') {
        spread = parseInt(elem.value)
        if (insertShadow.checked) {
            shadow = `inset ${vertical}px ${horizontal}px ${blurness}px ${spread}px rgba(${r},${g},${b},${opacity})`
            boxEl.style.boxShadow = shadow
            infoEl.innerHTML = shadow
        } else {
            shadow = `${vertical}px ${horizontal}px ${blurness}px ${spread}px rgba(${r},${g},${b},${opacity})`
            boxEl.style.boxShadow = shadow
            infoEl.innerHTML = shadow
        }
    }
    else if (elem.id == 'color') {
        color = hexToRgb(elem.value, opacity)
        if (insertShadow.checked) {
            shadow = `inset ${vertical}px ${horizontal}px ${blurness}px ${spread}px rgba(${r},${g},${b},${opacity})`
            boxEl.style.boxShadow = shadow
            infoEl.innerHTML = shadow
        } else {
            shadow = `${vertical}px ${horizontal}px ${blurness}px ${spread}px rgba(${r},${g},${b},${opacity})`
            boxEl.style.boxShadow = shadow
            infoEl.innerHTML = shadow
        }
    }
    else {
        opacity = parseInt(elem.value) / 100
        if (insertShadow.checked) {
            shadow = `inset ${vertical}px ${horizontal}px ${blurness}px ${spread}px rgba(${r},${g},${b},${opacity})`
            boxEl.style.boxShadow = shadow
            infoEl.innerHTML = shadow
        } else {
            shadow = `${vertical}px ${horizontal}px ${blurness}px ${spread}px rgba(${r},${g},${b},${opacity})`
            boxEl.style.boxShadow = shadow
            infoEl.innerHTML = shadow
        }
    }
    // console.log(horizontal,vertical,blurness,spread,color,opacity)
}

function hexToRgb(color, opacity) {
    r = parseInt(color.substr(1, 2), 16)
    g = parseInt(color.substr(3, 2), 16)
    b = parseInt(color.substr(5, 2), 16)
    color = `rgba(${r},${g},${b},${opacity})`
    return color
}

inputs.forEach(input => {
    input.addEventListener('input', (e) => {
        setShadow(e.target)
    })
})

copyBtn.addEventListener('click',()=>{
    copyBtn.innerHTML = 'Copied'
    navigator.clipboard.writeText(infoEl.textContent)
    setTimeout(() => {
        copyBtn.innerHTML = 'Copy'
    }, 1500);
})