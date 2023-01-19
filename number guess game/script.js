const inputNum = document.querySelector('input'),
wrapperEl = document.querySelector('.wrapper'),
pointsEl = document.querySelector('.points')
guessBtn = document.querySelector('.guessBtn'),
startBtn = document.querySelector('.start'),
infoEl = document.querySelector('.info'),
guessCount = document.querySelector('.count'),
guessedNum = document.querySelector('.Guessed'),
resultArea = document.querySelector('.result'),
dataEl = document.querySelector('.data'),
restartBtn = document.querySelector('.restart'),
emojiEl = document.querySelector('.emoji');

let randomNum = Math.floor(Math.random() * 100);
let prevguess = [],
guessNo = 0;

startBtn.addEventListener('click',()=>{
    wrapperEl.classList.add('show')
    pointsEl.classList.add('hide')
    inputNum.focus();
})

const checkNum = () =>{
    let inputVal = inputNum.value;
    if(inputVal == randomNum){
        resultArea.classList.add('show')
        wrapperEl.classList.remove('show');
        emojiEl.innerHTML = '😍'
        dataEl.innerHTML = `Yahoo😍😍😍! your guess is correct<br>the number is ${inputVal}`
    }else if(inputVal > randomNum){
        infoEl.innerHTML = `Your guess is high 🙄🙄🙄`
        prevguess.push(inputVal)
        guessedNum.innerHTML = `Number are: ${prevguess}`
    }else{
        infoEl.innerHTML = `Your guess is low 😒😒`
        prevguess.push(inputVal)
        guessedNum.innerHTML = `Number are: ${prevguess}`
    }
}

guessBtn.addEventListener('click',()=>{
    checkNum();
    inputNum.focus();
    infoEl.classList.add('active')
    guessNo++
    if(guessNo >= 10){
        resultArea.classList.add('show')
        wrapperEl.classList.remove('show');
        emojiEl.innerHTML = '😒'
        dataEl.innerHTML = `Oooo😒😒😒! your chances is finished<br>the number is ${randomNum}`
    }
    guessCount.innerHTML = `No. of guess: ${guessNo}`
    inputNum.value = ''
})

restartBtn.addEventListener('click',()=>{
    resultArea.classList.remove('show')
    wrapperEl.classList.add('show');
    guessNo = 0;
    prevguess = []
    infoEl.classList.remove('active')
    guessCount.innerHTML = `No. of guess: ${guessNo}`
    guessedNum.innerHTML = `Number are: none`
    randomNum = Math.floor(Math.random() * 100);
})