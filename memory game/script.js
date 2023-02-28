const moves = document.querySelector("#move-count"),
timeValue = document.querySelector('#time'),
startBtn = document.querySelector('#start'),
stopBtn = document.querySelector('#stop'),
gameContainer = document.querySelector('.game-container'),
result = document.querySelector('#result'),
controls = document.querySelector('.controls-container');

let cards;
let interval;
let firstCard = false;
let secondCard = false;

const items = [
    {name:"fish",image:"fish.jpeg"},
    {name:"cat",image:"cat.jpeg"},
    {name:"bear",image:"bear.jpeg"},
    {name:"crocodile",image:"crocodile.jpeg"},
    {name:"elephant",image:"elephant.jpeg"},
    {name:"lion",image:"lion.jpeg"},
    {name:"madumakhi",image:"madumakhi.jpeg"},
    {name:"monkey",image:"monkey.png"},
    {name:"parrot",image:"parrot.jpeg"},
    {name:"snake",image:"snake.jpeg"},
    {name:"squirrel",image:"squirrel.jpeg"},
]

let seconds = 0,minutes = 0;
let movesCount = 0, winCount = 0;

const timeGenrator = () =>{
    seconds += 1;
    if(seconds >=60){
        minutes += 1;
        seconds = 0;
    }
    let secondValue = seconds < 10 ? `0${seconds}` : seconds
    let minuteValue = minutes < 10 ? `0${minutes}` : minutes

    timeValue.innerHTML = `<span>Time: </span>${minuteValue}:${secondValue}`
}

const moveCounter = () =>{
    movesCount += 1;
    moves.innerHTML  =`<span>Moves: </span>${movesCount}`
}

const genrateRandom = (size = 4) =>{
    let tempArray = [...items];
    let cardValues = [];
    //size should be double (4*4 matrix)/2 since pairs of object would exist
    size = (size *size) / 2;
    for(let i=0; i<size;i++){
        const randomIndex = Math.floor(Math.random() * tempArray.length);
        cardValues.push(tempArray[randomIndex])
        //once selected remove the object from temp array
        tempArray.splice(randomIndex,1);
    }
    return cardValues;
}

const matrixGenrator = (cardValues,size = 4) =>{
    gameContainer.innerHTML = "";
    cardValues = [...cardValues,...cardValues];
    cardValues.sort(()=> Math.random() - .5);
    for(let i=0; i<size * size; i++){
        // create cards 
        gameContainer.innerHTML += `
        <div class='card-container' data-card-value="${cardValues[i].name}">
        <div class='card-before'>?</div>
        <div class='card-after'>
        <img src="${cardValues[i].image}" class="image"/>
        </div>
        </div>
        `
    }
    gameContainer.style.gridTemplateColumns = `repeat(${size},auto)`

    cards = document.querySelectorAll('.card-container');
    cards.forEach((card)=>{
        card.addEventListener('click',()=>{
            if(!card.classList.contains('matched')){
                card.classList.add('flipped');
                if(!firstCard){
                    firstCard = card;
                    firstCardValue = card.getAttribute('data-card-value');
                }
                else{
                    moveCounter();
                    secondCard = card;
                    let secondCardValue = card.getAttribute('data-card-value');
                    if(firstCardValue == secondCardValue){
                        firstCard.classList.add('matched')
                        secondCard.classList.add('matched');
                        firstCard = false;
                        winCount += 1
                        // check if winCount == half of cardValues 
                        if(winCount == Math.floor(cardValues.length/2)){
                            result.innerHTML = `<h2>You Won</h2>
                            <h4>Moves: ${movesCount}</h4>`;
                            stopGame();
                        }
                    }
                    else{
                        let [tempFirst,tempSecond] = [firstCard,secondCard]
                        firstCard = false;
                        secondCard = false
                        let delay = setTimeout(() => {
                            tempFirst.classList.remove('flipped')
                            tempSecond.classList.remove('flipped')
                        }, 900);
                    }
                }
            }
        })
    })
}

startBtn.addEventListener('click',()=>{
    movesCount = 0;
    time = 0;
    controls.classList.add('hide')
    stopBtn.classList.remove('hide')
    startBtn.classList.add('hide');

    interval = setInterval(timeGenrator,1000)

    moves.innerHTML = `<span>Moves: </span>${movesCount}`;
    initializer();
})

stopBtn.addEventListener('click',(stopGame = () =>{
    controls.classList.remove('hide')
    stopBtn.classList.add('hide')
    startBtn.classList.remove('hide')
    clearInterval(interval)
}))

const initializer = () =>{
    result.innerHTML = "";
    winCount = 0;
    let cardValues = genrateRandom();
    matrixGenrator(cardValues);
}
