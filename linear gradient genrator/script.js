const inputs = document.querySelectorAll('input'),
    genrateBtn = document.querySelector('.genrate'),
    angleBtns = document.querySelectorAll('.icons button'),
    colorText = document.querySelector('.gradient p span'),
    copyBtn = document.querySelector('.gradient button');

let colorAngle = 0,
    inputFirst = "",
    inputSecond = ""

inputs.forEach(input => {
    input.addEventListener('input', () => {
        inputFirst = inputs[0].value
        inputSecond = inputs[1].value
    })
})

angleBtns.forEach(angle => {
    angle.addEventListener('click', () => {
        document.querySelector('.active').classList.remove('active')
        angle.classList.toggle('active')
        colorAngle = angle.dataset.angle
    })
})

genrateBtn.addEventListener('click', () => {
    let gradient = `linear-gradient(${colorAngle}deg,${inputSecond},${inputFirst})`
    console.log(inputFirst, inputSecond)
    document.body.style.background = gradient
    colorText.innerHTML = gradient
})

copyBtn.addEventListener('click', () => {
    copyBtn.innerHTML = 'Copied'
    navigator.clipboard.writeText(colorText.innerHTML)
    setTimeout(() => {
        copyBtn.innerHTML = 'Copy'
    }, 1500);
})