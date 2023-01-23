const rollBtn = document.querySelector('button'),
diceFirst = document.querySelector('.dice-first'),
diceSecond = document.querySelector('.dice-second'),
digitsFirst = document.querySelectorAll('.dice-first div'),
digitsSecond = document.querySelectorAll('.dice-second div'),
yourRoll = document.querySelector('.roll strong');

rollBtn.addEventListener('click',()=>{
    digitsFirst.forEach(digit=>{
        digit.classList.remove('active')
    })
    digitsSecond.forEach(digit=>{
        digit.classList.remove('active')
    })
    let randomNumOne = Math.floor(Math.random() * 6)
    let randomNumTwo = Math.floor(Math.random() * 6)
    for(let i = 0; i<randomNumOne;i++){
        digitsFirst[i].classList.add('active');
    }
    for(let i = 0; i<randomNumTwo;i++){
        digitsSecond[i].classList.add('active');
    }
    diceFirst.classList.add('active')
    diceSecond.classList.add('active')
    setTimeout(() => {
        diceFirst.classList.remove('active')
        diceSecond.classList.remove('active')
    }, 1000);

    let digitsFirstLength = 0
    ,digitsSecondLength = 0;
    digitsFirst.forEach(digit=>{
        if(!digit.classList.contains('active')){
            digitsFirstLength += 1;
        }
    })
    digitsSecond.forEach(digit=>{
        if(!digit.classList.contains('active')){
            digitsSecondLength += 1;
        }
    })
    setTimeout(() => {
        yourRoll.innerHTML = digitsFirstLength + digitsSecondLength
    }, 1000);
})