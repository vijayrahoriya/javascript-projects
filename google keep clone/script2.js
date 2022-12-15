const addNoteEl = document.querySelector('#addNote');

const addLSData = () =>{
    let textareaEL = document.querySelectorAll('textarea');
    let note = [];
    textareaEL.forEach((item)=>{
        note.push(item.value);
    })
    localStorage.setItem('notes',JSON.stringify(note));
}

const addNewNote = (text = "")=>{
    let note = document.createElement('div');
    note.classList.add('note');
    let inner = `<div class="oprate">
                        <button class="edit"><i class="fa-regular fa-pen-to-square"></i></button>
                        <button class="delete"><i class="fa-solid fa-trash"></i></button>
                    </div>

                    <div class="main ${text? "" : "hidden"}"></div>
                    <textarea class="${text? "hidden" : ''}"></textarea>`;
    note.insertAdjacentHTML('beforeend',inner)

    const editEl = note.querySelector('.edit');
    const deleteEl = note.querySelector('.delete');
    const mainDiv = note.querySelector('.main');
    const textarea = note.querySelector("textarea");

    deleteEl.addEventListener('click',()=>{
        note.remove();
        addLSData();
    })

    textarea.value = text;
    mainDiv.innerHTML = text;

    editEl.addEventListener('click',()=>{
        mainDiv.classList.toggle('hidden');
        textarea.classList.toggle('hidden');
    })

    textarea.addEventListener("change",()=>{
        const value = textarea.value;
        mainDiv.innerHTML = value;
        addLSData();
    })

    document.body.appendChild(note)

}

let notes = JSON.parse(localStorage.getItem('notes'));
notes.forEach((item)=>{
    addNewNote(item);
})


addNoteEl.addEventListener('click',()=>{
    addNewNote();
})