const inputField = document.querySelector('.text-area input'),
    textField = document.querySelector('.text-area .text'),
    tryAgainBtn = document.querySelector('button'),
    mistakeEl = document.querySelector('.mistake strong'),
    timeLeftEl = document.querySelector('.time strong'),
    startBtn = document.querySelector('.start'),
    stopBtn = document.querySelector('.stop'),
    setTimeInput = document.querySelector('header input'),
    errorEl = document.querySelector('header .error')

let charIndex = 0,
    mistakes = 0,
    time = 0,
    timer;


//for selecting random paragraph from the paragraphs array and paste the element in our textfield
const randomPara = () => {
    let randomIndex = paragraphs[Math.floor(Math.random() * paragraphs.length)]
    textField.innerHTML = "";
    randomIndex.split("").forEach(span => {
        let spanTag = `<span>${span}</span>`
        textField.innerHTML += spanTag
    })
    textField.querySelectorAll('span')[0].classList.add('active');
}


// starting text and comparing our words with textField words
const compareChars = () => {
    charIndex++
    let userTypeChar = inputField.value.split("");
    let text = textField.querySelectorAll('span')
    // console.log(text)
    userTypeChar.forEach((word, index) => {
        // console.log(charIndex,userTypeChar.length,index)
        if (word == text[index].textContent) {
            document.querySelector('.active').classList.remove('active')
            text[index + 1].classList.add('active')
            text[index].classList.remove('incorrect')
            text[index].classList.add('correct')
        } else {
            mistakes++
            document.querySelector('.active').classList.remove('active')
            text[index + 1].classList.add('active')
            text[index].classList.remove('correct')
            text[index].classList.add('incorrect')
        }
        if (userTypeChar.length < charIndex) {
            text[index + 1].classList.remove('correct')
            if (text[index + 1].classList.contains('incorrect')) {
                mistakes--
            }
            text[index + 1].classList.remove('incorrect')
        }
        mistakeEl.innerHTML = mistakes
    })
}

inputField.addEventListener('input', (e) => {
    compareChars();
})

startBtn.addEventListener('click', () => {
    if(setTimeInput.value == ""){
        errorEl.classList.add('show');
    }else{
        timer = setInterval(() => {
            time--
            timeLeftEl.innerHTML = time
            if (time < 1) {
                alert('Time is over')
                location.reload();
                clearInterval(timer)
            }
        }, 1000)

        errorEl.classList.remove('show')
        inputField.focus();
        startBtn.classList.add('hide')
        stopBtn.classList.remove('hide')
    }
})

window.addEventListener('load', () => {
    randomPara();
})

setTimeInput.addEventListener('input',()=>{
    time = parseInt(setTimeInput.value)
})

stopBtn.addEventListener('click',()=>{
    clearInterval(timer);
    stopBtn.classList.add("hide")
    startBtn.classList.remove('hide')
})