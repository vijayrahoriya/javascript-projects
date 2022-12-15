const addNoteEl = document.querySelector('#addNote');

const updateLSData = () =>{
    let textareaEL = document.querySelectorAll('textarea');
    let input = [];
    textareaEL.forEach((item)=>{
        input.push(item.value)
    })

    localStorage.setItem('notes',JSON.stringify(input))
}

const addNewNote = (text = '') =>{
    let note = document.createElement('div');
    note.classList.add('note');


    let innerHTML = ` <div class="oprate">
                        <button class="edit" id="edit"><i class="fa-regular fa-pen-to-square"></i></button>
                        <button class="delete" id="delete"><i class="fa-solid fa-trash"></i></button>
                    </div>
                    <div class="main ${text ? "" : "hidden"}"></div>
                    <textarea class="${text ? "hidden" : ""}" ></textarea> `;
    
    note.insertAdjacentHTML('beforeend',innerHTML);

    const editEl = note.querySelector('#edit');
    const deleteEl = note.querySelector('#delete');
    const mainDiv = note.querySelector('.main');
    const textarea = note.querySelector('textarea');

    deleteEl.addEventListener('click',()=>{
        note.remove();
        updateLSData();
    })

    textarea.value = text;
    mainDiv.innerHTML = text;

    editEl.addEventListener('click',()=>{
        mainDiv.classList.toggle('hidden');
        textarea.classList.toggle('hidden');
    })

    textarea.addEventListener('change',(e)=>{
        const value = e.target.value;
        mainDiv.innerHTML = value;
        console.log('changed')

        updateLSData();
    })

    document.body.appendChild(note);
}

// getting back from localStorage
const notes = JSON.parse(localStorage.getItem('notes'));

if(notes){
    notes.forEach((item)=>{
        addNewNote(item);
    })
}

addNoteEl.addEventListener('click',() => addNewNote());