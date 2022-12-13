let audioTurn = new Audio('ting.mp3');
let gameover = new Audio('gameover.mp3')
let music = new Audio('music.mp3')
let turn = "X";
let btn = document.getElementById('reset');

// function to change the turn 
const changeTurn = () => {
    return turn === "X" ? "0" : "X";
}

// function to check win
const checkwin = () => {
    let boxtext = document.getElementsByClassName('boxtext');
    let wins = [
        [0, 1, 2, 5, 5, 0],
        [3, 4, 5, 5, 15, 0],
        [6, 7, 8, 5, 25, 0],
        [0, 3, 6, -5, 15, 90],
        [1, 4, 7, 5, 15, 90],
        [2, 5, 8, 15, 15, 90],
        [0, 4, 8, 5, 15, 45],
        [2, 4, 6, 5, 15, -45]
    ]
    wins.forEach((e) => {
        if ((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && boxtext[e[0]].innerText !== "") {
            document.querySelector('.info').innerText = boxtext[e[0]].innerText + " Won"
            gameover.play();
            document.querySelector('.imgbox img').style.width = '200px';
            document.querySelector('.line').style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`
            document.querySelector('.line').style.width = '20vw'
            music.pause();
        }
    })
}

// game Logic
let boxes = document.getElementsByClassName('box');

Array.from(boxes).forEach((e) => {
    let boxtext = e.querySelector('.boxtext');
    e.addEventListener('click', () => {
        music.play();
        if (boxtext.innerText === "") {
            boxtext.innerText = turn;
            turn = changeTurn();
            audioTurn.play();
            document.getElementsByClassName('info')[0].innerText = "Turn for " + turn;
            checkwin();
        }
    })
})


btn.addEventListener('click', () => {
    // location.reload();
    let boxtexts = document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach((e) => {
        e.innerText = "";
    })
    turn = "X"
    document.getElementsByClassName('info')[0].innerText = "Turn for " + turn;
    document.querySelector('.imgbox img').style.width = "0px"
    document.querySelector('.line').style.width = '0vw'
    music.play();

})
