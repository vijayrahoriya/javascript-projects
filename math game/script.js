const startBtn = document.querySelector('.start'),
gameArea = document.querySelector('.game-area'),
questionEl = document.querySelector('.question'),
submitBtn = document.querySelector('.submit'),
errEl = document.querySelector('.err'),
resultEl = document.querySelector('.result'),
resultText = document.querySelector('#resultText')
const operators = ["+","-","*"]
let answerValue;

const randomValue = (min,max) => Math.floor(Math.random() * (max - min)) + min

const questionGenrator = () =>{
    resultEl.classList.add('hide')
    gameArea.classList.remove('hide');
    resultEl.classList.add('hide')
    const [num1,num2] = [randomValue(1,20),randomValue(1,20)];

    let randomOperator = operators[Math.floor(Math.random() * operators.length)]

    if(randomOperator == '-' && num2 > num1){
        [num1,num2] = [num2,num1]
    }

    let solution = eval(num1 + randomOperator + num2)

    let randomVar = randomValue(1,5)
    if(randomVar == 1){
        answerValue = num1
        questionEl.innerHTML = `
        <h3>
            <input type="text" placeholder="?"/>
            ${randomOperator} ${num2} = ${solution}
        </h3>
        `
    }else if(randomVar == 2){
        answerValue = num2
        questionEl.innerHTML = `
        <h3>
            ${num1} ${randomOperator} 
            <input type="text" placeholder="?"/>
            = ${solution}
        </h3>
        `
    }else if(randomVar == 3){
        answerValue = randomOperator
        questionEl.innerHTML = `
        <h3>
            ${num1}
            <input type="text" placeholder="?"/>
            ${num2}
            = ${solution}
        </h3>
        `
    }else{
        answerValue = solution
        questionEl.innerHTML = `
        <h3>
            ${num1}
            ${randomOperator}
            ${num2}
            = <input type="text" placeholder="?"/>
        </h3>
        `
    }
    
    submitBtn.addEventListener('click',()=>{
        errEl.classList.add('hide')
        let value = document.querySelector('input').value
        if(!value){
            errEl.classList.remove('hide')
            errEl.innerHTML = 'Input cannot be empty'
        }else if(randomVar == 3 && !operators.includes(value)){
            errEl.classList.remove('hide')
            errEl.innerHTML = 'please enter a valid operator'
        }else if(value == answerValue){
            stopGame()
            resultText.innerHTML = '<h3>Yahoo!!😍😍 Answer is correct</h3>'
        }else{
            stopGame()
            resultText.innerHTML = '<h3>Oooo!!😒😒 Answer is Incorrect</h3>'
        }
        
    })
}

const stopGame = () =>{
    resultEl.classList.remove('hide')
    gameArea.classList.add('hide')
    startBtn.innerHTML = 'Restart'
}

startBtn.addEventListener('click',()=>{
    questionGenrator()
})

