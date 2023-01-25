const numInputs = document.querySelectorAll('.input input'),
    rangeInputs = document.querySelectorAll('.rangeinputs input'),
    borderRadiusEl = document.querySelector('.borderradius span'),
    copyBtn = document.querySelector('button')


rangeInputs.forEach(function (slider) {
    slider.addEventListener('input', createBlob)
})

numInputs.forEach(function (inp) {
    inp.addEventListener('change', createBlob)
})

function createBlob() {
    let radiusOne = rangeInputs[0].value
    let radiusTwo = rangeInputs[1].value
    let radiusThree = rangeInputs[2].value
    let radiusFour = rangeInputs[3].value

    let blobHeight = numInputs[0].value
    let blobWidth = numInputs[1].value
    
    let borderRadius = `${radiusOne}% ${100 - radiusOne}% ${100 - radiusThree}% ${radiusThree}% / ${radiusFour}% ${radiusTwo}% ${100 - radiusTwo}% ${100 - radiusFour}%`

    document.querySelector('.blob').style.cssText = `border-radius: ${borderRadius}; height:${blobHeight}px; width: ${blobWidth}px`

    borderRadiusEl.innerHTML = borderRadius
}

copyBtn.addEventListener('click',()=>{
    navigator.clipboard.writeText(borderRadiusEl.innerHTML)
    copyBtn.innerHTML = 'Copied'
    setTimeout(()=>{
        copyBtn.innerHTML = 'Copy'
    },1500)
})
