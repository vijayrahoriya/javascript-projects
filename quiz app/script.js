const startArea = document.querySelector('.start-buttons'),
    startBtn = document.querySelector('.start-buttons button'),
    ruleArea = document.querySelector('.rules-box'),
    continueBtn = document.querySelector('.rules-box .continue'),
    exitBtn = document.querySelector('.rules-box .exit'),
    quizArea = document.querySelector('.quiz-area'),
    questionsEl = document.querySelector('.quiestions'),
    timeLeft = document.querySelector('.quiz-area .time'),
    progressEl = document.querySelector('.progress-bar'),
    nextQuesBtn = document.querySelector('.quiz-area .info button'),
    questionNumber = document.querySelector('.quiz-area .info .numbers'),
    resultEl = document.querySelector('.result'),
    correctAnsNum = document.querySelector('.correctAns'),
    replayBtn = document.querySelector('.replay'),
    quitBtn = document.querySelector('.quit');

let time = 15,
    width = 0,
    index = 0,
    questionNum = 1,
    correct = 0;
let answer = questions[index].answer;
const exitfunc = () => {
    startArea.classList.remove('hide')
    ruleArea.classList.remove('show')
}

const showquizArea = () => {
    ruleArea.classList.remove('show')
    quizArea.classList.add('show')
    let questionsTag = `<h2>${questions[index].numb}. ${questions[index].question}</h2>
                        <div class="options">
                            <li><span>${questions[index].options[0]}</span> </li>
                            <li><span>${questions[index].options[1]}</span> </li>
                            <li><span>${questions[index].options[2]}</span> </li>
                            <li><span>${questions[index].options[3]}</span> </li>
                        </div>`

    questionsEl.innerHTML = questionsTag;
    let liEl = questionsEl.querySelectorAll('li')
    liEl.forEach(li => {
        li.addEventListener('click', (e) => {
            questionsEl.style.pointerEvents = 'none'
            nextQuesBtn.classList.add('show')
            checkAnswer(e);
        });
        if (time < 1) {
            clearInterval(timer)
            questionsEl.style.pointerEvents = 'none'
            nextQuesBtn.classList.add('show')
            if (li.firstElementChild.innerText == answer) {
                li.style.background = 'rgb(186, 223, 238)'
                li.style.color = 'green'
                li.insertAdjacentHTML('beforeend', '<i class="fas fa-check"></i>')
                li.lastElementChild.style.borderColor = 'green'
            }
        }
    })
    if (time < 1) {
        clearInterval(timer)
    }
    time = time < 10 ? `0${time}` : time
    timeLeft.innerHTML = time;
    progressEl.style.width = `${width}%`
    questionNumber.innerHTML = `${questionNum} of ${questions.length}`

}

function checkAnswer(e) {
    // console.log(e.currentTarget)
    let liEl = e.currentTarget;
    answer = questions[index].answer;

    let userAns = e.currentTarget.firstElementChild.innerText
    if (userAns == answer) {
        correct++;
        liEl.style.background = 'rgb(186, 223, 238)'
        liEl.style.color = 'green'
        liEl.insertAdjacentHTML('beforeend', '<i class="fas fa-check"></i>')
        liEl.lastElementChild.style.borderColor = 'green'
    } else {
        liEl.style.background = 'rgb(230, 242, 248)'
        liEl.insertAdjacentHTML('beforeend', '<i class="fas fa-times"></i>')
        liEl.style.color = 'red'
        liEl.lastElementChild.style.borderColor = 'red'
        let liElms = Array.from(questionsEl.querySelectorAll('li'));
        let correct = liElms.filter(li => {
            return li.firstElementChild.innerText == answer
        })
        // console.log(correct)
        correct[0].insertAdjacentHTML('beforeend', '<i class="fas fa-check"></i>')
        correct[0].style.background = 'rgb(186, 223, 238)'
        correct[0].style.color = 'green'
        correct[0].lastElementChild.style.borderColor = 'green'
    }
    clearInterval(timer)
}

let timer;

const showrules = () => {
    startArea.classList.add('hide')
    ruleArea.classList.add('show')
    continueBtn.addEventListener('click', () => {
        timer = setInterval(() => {
            showquizArea();
            time--
            width = width + (100 / 15)
        }, 1000);
    })
    exitBtn.addEventListener('click', exitfunc);
}

startBtn.addEventListener('click', showrules)
nextQuesBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    questionsEl.style.pointerEvents = 'auto'
    index++;
    time = 15;
    width = 0;
    timer = setInterval(() => {
        showquizArea();
        time--
        width = width + (100 / 15)
    }, 1000);
    nextQuesBtn.classList.contains('show') ? nextQuesBtn.classList.remove('show') : nextQuesBtn.classList.add('show');
    questionNum++
    // console.log(questionNum)
    if (questionNum >= 5) {
        showResults();
    }
    // console.log(questions.length, questionNum)
})

function showResults() {
    nextQuesBtn.innerHTML = 'Submit'
    nextQuesBtn.onclick = (e) => {
        // e.stopPropagation();
        time = 15;
        width = 0;
        clearInterval(timer)
        quizArea.classList.remove('show')
        resultEl.classList.add('show')
    }

    correctAnsNum.innerHTML = `You got ${correct} out of ${questions.length}`
}

quitBtn.onclick = () => {
    window.location.reload();
}

replayBtn.onclick = () => {
    nextQuesBtn.innerHTML = 'Next'
    time = 15,
        width = 0,
        index = 0,
        questionNum = 1,
        correct = 0;
    timer = setInterval(() => {
        showquizArea();
        time--
        width = width + (100 / 15)
    }, 1000);
    resultEl.classList.remove('show');
    quizArea.classList.add('show')
    showquizArea();
}