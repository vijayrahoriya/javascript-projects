const addBtn = document.querySelector('.add'),
flashcardRow = document.querySelector('.row'),
modalEl = document.querySelector('.modal'),
saveBtn = document.querySelector('.save'),
questionEl = document.querySelector('#question'),
answerEl = document.querySelector('#answer'),
containerEl = document.querySelector('.container'),
closeBtn = document.querySelector('.close')

addBtn.addEventListener('click',()=>{
    containerEl.classList.add('hide')
    modalEl.classList.add('show')
})

closeBtn.addEventListener('click',()=>{
    containerEl.classList.remove('hide')
    modalEl.classList.remove('show')
}
)

const addFlashCard = () =>{
    let question = questionEl.value 
    let answer = answerEl.value
    if(!question && !answer)return;
    flashcardRow.innerHTML += `<div class="box">
                                    <h4>${question} ?</h4>
                                    <button class="showHide">Show/Hide</button>
                                    <p class="answer">${answer}</p>
                                    <div class="icons">
                                        <i class="fa fa-edit" onclick="editNote()"></i>
                                        <i class="fa fa-trash" onclick="removeNote()"></i>
                                    </div>
                                </div>`
    containerEl.classList.remove('hide')
    modalEl.classList.remove('show');
    questionEl.value = ""
    answerEl.value = ""
    let showHideBtns = document.querySelectorAll('.showHide')
    showHideBtns.forEach((btn,index)=>{
        btn.addEventListener('click',()=>{
            document.querySelectorAll('.answer')[index].classList.toggle('show')
        })
    })
}

function editNote(){
    let editEl = document.querySelectorAll('.fa-edit')
    editEl.forEach((item,index)=>{
        item.addEventListener('click',()=>{
            let parentEl = item.parentElement.parentElement
            parentEl.remove();
            containerEl.classList.add('hide')
            modalEl.classList.add('show');
            questionEl.value = parentEl.querySelectorAll('h4')[index].innerText
            answerEl.value = parentEl.querySelectorAll('.answer')[index].innerText
        })
    })
}

function removeNote (){
    let removeEl = document.querySelectorAll('.fa-trash')
    removeEl.forEach((item,index)=>{
        item.addEventListener('click',()=>{
            let parentEl = item.parentElement.parentElement
            parentEl.remove();
        })
    })
}


saveBtn.addEventListener('click',addFlashCard)