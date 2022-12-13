const welcomeEl = document.getElementById("welcome");
const startGameEl = document.getElementById("startGame");
const newGameBtnEl = document.getElementById('newGameBtn');
const guessInfoEl = document.getElementById('guessInfo');
const inputEl = document.getElementById('input');
const attemptEl = document.getElementById('attempts');
const prevguessEl = document.getElementById("guessers");

let userguess = [];
let computerguess;
document.body.onload = () =>{
    init();
}

const init = ()=>{
    computerguess = Math.floor(Math.random()*100);
    newGameBtnEl.style.display = 'none';
    startGameEl.style.display = 'none'
}

const startGame = ()=>{
    welcomeEl.style.display = 'none'
    startGameEl.style.display = 'block'
}

const startNewGame = () =>{
    newGameBtnEl.style.display = 'block';
    inputEl.setAttribute('disabled',true);
}

newGameBtnEl.onclick = ()=>{
    window.location.reload();
}

const compareGuess = ()=>{
    let inputvl = Number(inputEl.value);
    userguess = [...userguess, inputvl];
    prevguessEl.innerHTML = userguess

    attemptEl.innerHTML = userguess.length
    // console.log(maxguess)
    if(userguess.length < maxguess){
        if(inputvl > computerguess){
            guessInfoEl.innerHTML = 'Your guess is High 😜'
            inputEl.value = ""
        }
        else if(inputvl < computerguess){
            guessInfoEl.innerHTML  = 'Your guess is Low 😜'
            inputEl.value = ""
        }
        else{
            guessInfoEl.innerHTML = 'Yahoo!!😍😍 Correct Number '
            inputEl.value = ""
            startNewGame();
        }
    }
    else{
        if(inputvl < computerguess){
            guessInfoEl.innerHTML = `You Lose!!😒😒😒 Correct Number was ${computerguess}`;
            inputEl.value = "";
            startNewGame();
        }
        else if(inputvl > computerguess){
            guessInfoEl.innerHTML = `You Lose!! 😒😒 Correct Number was ${computerguess}`;
            inputEl.value = "";
            startNewGame();
        }
        else{
            
            guessInfoEl.innerHTML = 'Yahoo!!😍😍 Correct Number '
            inputEl.value = ""
            startNewGame();
        }
    }
}

const easyMode = ()=>{
    maxguess = 10;
    startGame();
}

const hardMode = () =>{
    maxguess = 5;
    startGame();
}


