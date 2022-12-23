const addIcon = document.querySelector('.icon'),
    popupEl = document.querySelector('.popup-box'),
    closeIcon = document.querySelector(".fa-times"),
    addBtn = document.querySelector('.content button'),
    noteTitle = document.querySelector('header p')
    addBoxes = document.querySelector('.add-Box'),
    titleTag = document.querySelector('.content form input'),
    descTag = document.querySelector('textarea');


let months = ["Januaray","Febraray","March","April","May","June","July","August","Septempber","October","November","December"];

const notes = JSON.parse(localStorage.getItem('noteInfo') || "[]")
let isUpdate = false, UpdateId;

addIcon.addEventListener('click', () => {
    popupEl.classList.add('show')
})

closeIcon.addEventListener('click', () => {
    titleTag.value  = "";
    descTag.value = "";
    addBtn.innerHTML = "Add Note"
    noteTitle.innerHTML = "Add a Note"
    popupEl.classList.remove('show')
})

function showNote(){
    if(!notes) return;
    document.querySelectorAll('.note').forEach(note=> note.remove())
    notes.forEach((note,idx)=>{
        let filterDesc = note.description.replaceAll('\n', '<br/>')
        console.log(note)
        let liTag = `<li class="note">
                        <div class="details">
                            <p>${note.title}</p>
                            <span>${filterDesc}</span>
                        </div>
                        <div class="bottom-content">
                            <span>${note.date}</span>
                            <div class="setting">
                                <i onclick="showMenu(this)" class="fa-solid fa-ellipsis"></i>
                                <ul class="menu">
                                    <li onclick="editNote(${idx}, '${note.title}','${filterDesc}')"><i class="fas fa-pen"></i>Edit</li>
                                    <li onclick="deleteEl(${idx})"><i class="fas fa-trash"></i>Delete</li>
                                </ul>
                            </div>
                        </div>
                    </li>`;
        addBoxes.insertAdjacentHTML('afterend',liTag)
    })
}

showNote();

function showMenu(elm){
    elm.parentElement.classList.add('show')
    document.addEventListener('click',(e)=>{
        if(e.target.tagName != 'I' || e.target != elm){
            elm.parentElement.classList.remove('show')
        }
    })
}

function deleteEl(idx){
    let confirmDel = confirm('Ary you sure you want to delete this note?');
    if(!confirmDel) return;
    notes.splice(idx,1)
    localStorage.setItem('noteInfo',JSON.stringify(notes));
    showNote();
}

function editNote(noteId, title,filterDesc){
    let description = filterDesc.replaceAll('<br/>', '\r\n');
    UpdateId = noteId;
    isUpdate = true;
    addIcon.click();
    titleTag.value = title;
    descTag.value = description
    addBtn.innerHTML = "Update Note"
    noteTitle.innerHTML = "Update a Note"
}



addBtn.addEventListener('click',(e)=>{
    e.preventDefault();
    let noteTitle = titleTag.value ;
    let noteDesc = descTag.value ;
    if(noteDesc || noteTitle){
        let dateObj = new Date(),
        m = months[dateObj.getMonth()],
        d  = dateObj.getDate(),
        year = dateObj.getFullYear();
        // console.log(m,d,year)
        let noteInfo = {
            title: noteTitle, description:noteDesc,date:`${m} ${d}, ${year}`
        }
        if(!isUpdate){
            
            notes.push(noteInfo)
        }else{
            isUpdate = false;
            notes[UpdateId] = noteInfo;
        }
        localStorage.setItem('noteInfo',JSON.stringify(notes));
        closeIcon.click();
        showNote();
    }
})

