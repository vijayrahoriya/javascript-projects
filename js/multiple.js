const text = document.getElementById('heading')
const num1 = Math.ceil(Math.random()*10)
const num2 = Math.ceil(Math.random()*20)
const scoree1 = document.getElementById('score')
text.innerText = `What is ${num1} multiply ${num2}?`;
const answer = num1 * num2

// for timer 
let seconds = 10;
let countdown = document.getElementsByTagName('span')[0]

let timerid = setInterval(updatecountdown,1000)

function updatecountdown(){
    countdown.innerText = `Time: ${seconds} `
    
    if(seconds === 0){
        clearInterval(timerid)
        alert('Time End ')
        // seconds = 1;
        score = 0;
        localStorage.setItem('score',JSON.stringify(score))
    }
    else{
        --seconds
    }
}

// for score 
let score = JSON.parse( localStorage.getItem('score'))
if(!score){
    score = 0
}

scoree1.innerText = `score: ${score}`

const inpute1 = document.getElementById('ans')

const forme1 = document.getElementById('form')
forme1.addEventListener('submit',()=>{
    const userans = +inpute1.value
    // console.log(userans, typeof userans)
    if(userans === answer){
        score++
        updatelocalstorage()
    }
    else if(score === 0){
        score = 0;
        updatelocalstorage()
    }
    else{
        score = 0
        updatelocalstorage()
    }
})

function updatelocalstorage(){
    localStorage.setItem('score',JSON.stringify(score))
}

// for restart 
const restartbtn = document.getElementsByClassName('first')[0]
restartbtn.onclick = ()=>{
    setTimeout(() => {
        window.location.reload(true);
      }, 200);
    
}


