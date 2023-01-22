const icons = document.querySelectorAll('.icons i'),
results = document.querySelector('.results'),
yourDise = document.querySelector('.yourDise strong'),
computerDice = document.querySelector('.computerDise strong'),
resultBtn = document.querySelector('.resultBtn'),
startBtn = document.querySelector('.startBtn'),
infoBox = document.querySelector('.info'),
wrapper = document.querySelector('.wrapper'),
yourScore = document.querySelector('.you span'),
computerScore = document.querySelector('.computer span'),
restartBtn = document.querySelector('.restart'),
modeBtn = document.querySelector('.mode'),
modeIcon = document.querySelector('.mode i');

const dices = ['Rock','Paper','Scissor']

let score = 0,
computerS = 0;

modeBtn.addEventListener('click',()=>{
    startBtn.classList.toggle('active')
    wrapper.classList.toggle('active')
    restartBtn.classList.toggle('active')
    if(modeIcon.classList.contains('fa-moon')){
        infoBox.style.background = '#000'
        infoBox.style.color = '#fff'
        modeBtn.style.background = '#fff';
        modeBtn.style.color = '#000';
        modeIcon.classList.replace('fa-moon','fa-sun')
    }else{
        infoBox.style.background = '#fff'
        infoBox.style.color = '#000'
        modeBtn.style.background = '#000';
        modeBtn.style.color = '#fff';
        modeIcon.classList.replace('fa-sun','fa-moon')
    }
})

startBtn.addEventListener('click',()=>{
    infoBox.classList.add('hide')
    wrapper.classList.add('show')
})

icons.forEach(icon=>{
    icon.addEventListener('click',()=>{
        let randomDice = dices[ Math.floor(Math.random() * dices.length)].toUpperCase();
        yourDise.innerHTML = icon.dataset.dice
        computerDice.innerHTML = randomDice
        checkWinner(icon.dataset.dice,randomDice);
        results.classList.add('active')
    })
})

function checkWinner(your,computer){
    if(your === computer){
        resultBtn.innerHTML = 'draw'
        resultBtn.style.color = 'gray'
        resultBtn.style.background = 'lightgray'
    }
    else if((your=='ROCK' && computer == 'SCISSOR') || (your=='SCISSOR' && computer == 'PAPER') || (your=='PAPER' && computer == 'ROCK')){
        resultBtn.innerHTML = 'You win'
        resultBtn.style.color = 'rgb(81, 126, 22)'
        resultBtn.style.background = 'rgb(142,174,101)'
        score++;
        yourScore.innerHTML = score;
    }
    else{
        computerS++;
        computerScore.innerHTML = computerS
        resultBtn.innerHTML = 'you lose'
        resultBtn.style.color = 'rgb(255,111,89)'
        resultBtn.style.background = 'rgb(240,156,101)'
    }
}

restartBtn.addEventListener('click',()=>{
    score = 0;
    computerS = 0;
    yourScore.innerHTML = score;
    computerScore.innerHTML = computerS
    results.classList.remove('active')
})