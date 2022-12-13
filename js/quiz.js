const questions = [
    {
        'que': 'Which is the following of the markup language?',
        'a'  : 'HTML',
        'b'  : 'CSS',
        'c'  : 'JavaScript',
        'd'  : 'PHP',
        'correct' : 'a'
    },
    {
        'que': 'What year was javascript launched?',
        'a'  : '1996',
        'b'  : '1995',
        'c'  : '1994',
        'd'  : 'none of the above',
        'correct' : 'b'
    },
    {
        'que': 'What does CSS stands for?',
        'a'  : 'Hyper Text Markup Lanuage',
        'b'  : 'Jason Object Style',
        'c'  : 'Cascading style sheet',
        'd'  : 'Helicopter Terminal operator',
        'correct' : 'c'
    },
    {
        'que': 'Which is the correct inline element?',
        'a'  : 'span',
        'b'  : 'div',
        'c'  : 'section',
        'd'  : 'none of the above',
        'correct' : 'a'
    },
    {
        'que': 'Which is the correct pseudo element?',
        'a'  : 'img',
        'b'  : 'div',
        'c'  : 'after',
        'd'  : 'none of the above',
        'correct' : 'c'
    },
    {
        'que': 'Which is the following is the semantic element?',
        'a'  : 'span',
        'b'  : 'div',
        'c'  : 'section',
        'd'  : 'none of the above',
        'correct' : 'c'
    },
]

// function load
let index = 0;
let quebox = document.getElementById('quebox');
let optionInputs = document.querySelectorAll('.options');
let total = questions.length;
let right = 0;
let wrong = 0;
const loadquestion = ()=>{
    if(index == total){
        return endQuiz();
    }
    reset();
    const data = questions[index]
    quebox.innerText = `${index+1}) ${data.que}`;
    optionInputs[0].nextElementSibling.innerText = data.a;
    optionInputs[1].nextElementSibling.innerText = data.b;
    optionInputs[2].nextElementSibling.innerText = data.c;
    optionInputs[3].nextElementSibling.innerText = data.d;
}

let btn = document.querySelector('.btn');
const submitQuiz = ()=>{
    const ans = getanswer();
    const data = questions[index];
    if(ans === data.correct){
        right++;
    }
    else{
        wrong++;
    }
    index++;
    loadquestion();
    return;
}

const getanswer = ()=>{
    let answer;
    optionInputs.forEach((input)=>{
        if(input.checked){
            answer = input.value
        }
    })
    return answer
}

const reset = ()=>{
    optionInputs.forEach((input)=>{
        input.checked  = false
    })
}

const endQuiz = ()=>{
    document.getElementById('box').innerHTML = `<h3>Thank You for playing quiz</h3>
    <h1>${right} / ${total} are correct </h1>`
}


loadquestion()