const playBoard = document.querySelector('.play-board'),
scoreEl = document.querySelector('.score'),
highScoreEl = document.querySelector('.highscore'),
controls = document.querySelectorAll('.controls i');

let gameOver = false;
let foodX, foodY;
 let snakeX = 5, snakeY = 10;
 let velocityX = 0 , velocityY = 0;
 let snakeBody = []
 let handleTimer;
 let score = 0;

 let highscore = localStorage.getItem('high-score') || 0;
 highScoreEl.innerHTML = `High Score: ${highscore}`

const changeFoodPosition = ()=>{
    foodX = Math.floor(Math.random() * 30) + 1
    foodY = Math.floor(Math.random() * 30) + 1
}

const changeDirection = (e) =>{
    if(e.key === 'ArrowUp' && velocityY != 1){
        velocityX = 0
        velocityY = -1;
    }else if(e.key === 'ArrowDown' && velocityY != -1){
        velocityX = 0;
        velocityY = 1;
    }
    else if(e.key === 'ArrowLeft' && velocityX != 1){
        velocityX = -1;
        velocityY = 0;
    }
    else if(e.key === 'ArrowRight' && velocityX != -1){
        velocityX = 1;
        velocityY = 0;
    }
    initGame()
}

const handleGameOver = () =>{
    clearInterval(handleTimer)
    alert("Game over press ok to restart")
    location.reload();
}

const initGame = () =>{
    if(gameOver) return handleGameOver();
    let htmlMarkup = `<div class="food" style="grid-area: ${foodY} / ${foodX}"></div>`

    if(snakeX === foodX && snakeY === foodY){
        changeFoodPosition();
        snakeBody.push([foodX,foodY])
        score++;
        highscore = score >= highscore ? score : highscore
        localStorage.setItem('high-score',highscore)
        highScoreEl.innerHTML = `High Score: ${highscore}`
        scoreEl.innerHTML = `Score: ${score}`
    }

    for(let i = snakeBody.length - 1; i>0; i--){
        //shifting forward the values of the elements in the snake body by one
        snakeBody[i] = snakeBody[i-1]
    }

    snakeBody[0] = [snakeX,snakeY]

    if(snakeX <= 0 || snakeX > 30 || snakeY <= 0 || snakeY > 30){
        gameOver = true;
    }

    snakeX += velocityX;
    snakeY += velocityY

    for(let i=0; i<snakeBody.length; i++){
        htmlMarkup += `<div class="head" style="grid-area: ${snakeBody[i][1]} / ${snakeBody[i][0]}"></div>`
        //checking if snake hits his own body
        if(i !== 0 && snakeBody[0][1] === snakeBody[i][1] && snakeBody[0][0] === snakeBody[i][0]){
            gameOver = true
        }
    }
    playBoard.innerHTML = htmlMarkup;
}

controls.forEach(key=>{
    key.addEventListener('click',()=>changeDirection({key: key.dataset.key}))
})

changeFoodPosition();
initGame();
handleTimer =  setInterval(() => {
    initGame()
}, 125);
document.addEventListener('keydown',changeDirection)