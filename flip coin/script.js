const flipBtn = document.querySelector('.buttons button'),
coin = document.querySelector('.coin'),
resetBtn = document.querySelector('.reset'),
heads = document.querySelector('.heads strong'),
tails = document.querySelector('.tails strong')

let texts = ['heads','tails'];
let headWin = 0,tailWin = 0;

flipBtn.addEventListener('click',()=>{
    coin.classList.add('active');
    let randomtext = texts[Math.floor(Math.random() * texts.length)]
    coin.innerHTML = randomtext
    if(randomtext == 'heads'){//if randomtext is heads than heads win otherwise tails win
        headWin++;
    }
    if(randomtext == 'tails'){
        tailWin++
    }
    setTimeout(() => {
        coin.classList.remove('active')
        heads.innerHTML = headWin
        tails.innerHTML = tailWin
        //randomly select a text from texts array
    }, 1000);
})

resetBtn.addEventListener('click',()=>{
    headWin = 0;tailWin = 0;
    heads.innerHTML = headWin
    tails.innerHTML = tailWin
    coin.innerHTML = 'Heads'
})