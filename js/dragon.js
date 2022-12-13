score = 0;
cross = true;

audio = new Audio('./dragon/music.mp3')
audiogo = new Audio('./dragon/gameover.mp3')
setTimeout(() => {
    audio.play();
}, 1000);

window.addEventListener('keydown',(e)=>{
    if(e.keyCode == 13){
        location.reload();
    }
})

document.onkeydown = (e)=>{
    // console.log(e.keyCode)
    if(e.keyCode == 38){
        dino = document.querySelector('.dino')
        dino.classList.add('animateDino')

        setTimeout(() => {
            dino.classList.remove('animateDino')
        }, 700);
    }
    if(e.keyCode == 39){
        dino = document.querySelector('.dino');
        dinoX = parseInt(window.getComputedStyle(dino,null).getPropertyValue('left'));
        dino.style.left = dinoX + 150 + "px";
        dino.style.transform = 'rotateY(0deg)'
    }
    if(e.keyCode == 37){
        dino = document.querySelector('.dino');
        dinoX = parseInt(window.getComputedStyle(dino,null).getPropertyValue('left'));
        dino.style.left = (dinoX - 112 )+ "px";
        dino.style.transform = 'rotateY(180deg)'
    }
}

setInterval(() => {
    dino = document.querySelector('.dino')
    gameOver = document.querySelector('.gameOver')
    obstacle = document.querySelector('.obstacle')

    dx = parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));
    dy = parseInt(window.getComputedStyle(dino, null).getPropertyValue('top'));

    ox = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('left'));
    oy = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('top'));

    offsetX = Math.abs(dx - ox);
    // console.log(offsetX )
    offsetY = Math.abs(dy - oy);

    if(offsetX<145 && offsetY<52){
        gameOver.innerHTML = "Game Over Press Enter to Restart"
        obstacle.classList.remove('obstacle');
        audiogo.play();
        setTimeout(() => {
            audiogo.pause();
            audio.pause();
        }, 1000);
    }
    else if(offsetX<73 && cross){
        score += 1;
        upadatescore(score);
        cross = false;
        setTimeout(() => {
            cross = true;
            aniDur = parseFloat(window.getComputedStyle(obstacle,null).getPropertyValue('animation-duration'));
            newdur = aniDur - .2;
            obstacle.style.animationDuration = newdur + 's';
        }, 1000);

    }

}, 10);

function upadatescore(score){
    scoreCont.innerHTML = "Your Score: " + score
}