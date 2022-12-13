const gamearea = document.getElementById('gamearea');
const newGame = document.getElementById("newGame");
const welcomePage = document.getElementById('welcome');
const inputEl = document.getElementById('inputBox');
const gameInfoEl = document.getElementById('gameInfo');
const attemptEl = document.getElementById('attempt');
const guessEl = document.getElementById("guess");
let computerGuess;
let userguess = [];

document.body.onload = () =>{
    init();
}

const init = () =>{
    computerGuess = Math.floor(Math.random()*100)
    newGame.style.display = 'none'
    gamearea.style.display = 'none';
}

const startGame = ()=>{
    gamearea.style.display = 'block';
    welcomePage.style.display = 'none'
}

// startNewGame 
const startNewGame = () =>{
    inputEl.setAttribute('disabled',true);
    newGame.style.display = 'block';
}

newGame.onclick = ()=>{
    window.location.reload();
}

// main logic of our game 
const compareGuess = ()=>{
    let userNumber = Number(inputEl.value)
    userguess = [...userguess, userNumber]
    guessEl.innerHTML = userguess

    if(userguess.length < maxGuess){
        if(userNumber > computerGuess){
            gameInfoEl.innerHTML = 'Your guess is high 😒'
            inputEl.value = '';
        }
        else if(userNumber < computerGuess){
            gameInfoEl.innerHTML = 'Your guess is low 😜'
            inputEl.value = '';
        }
        else{
            gameInfoEl.innerHTML = 'Yahooo Correct! 😊'
            inputEl.value = '';
            startNewGame();
        }
    }
    else{
        if(userNumber > computerGuess){
            gameInfoEl.innerHTML = `You Lose!😒😒😒😒! correct number was ${computerGuess}`
            inputEl.value = '';
            startNewGame();
        }
        else if(userNumber < computerGuess){
            gameInfoEl.innerHTML = `You Lose!😒😒😒😒! correct number was ${computerGuess}`
            inputEl.value = '';
            startNewGame();
        }
        else{
            gameInfoEl.innerHTML = 'Yahooo Correct! 😊'
            inputEl.value = '';
            startNewGame();
        }
    }

    attemptEl.innerHTML = userguess.length;
}

const easyMode = ()=>{
    maxGuess = 10;
    startGame();
}

const hardMode = ()=>{
    maxGuess = 5;
    startGame()
}




