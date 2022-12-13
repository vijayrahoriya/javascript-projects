console.log('welcome to magic notes')
shownotes();

// if user adds to note 
let addbtn = document.getElementById('addbtn')
addbtn.addEventListener('click', (e) => {

    let addtxt = document.getElementById('addtxt')
    let addtitle = document.getElementById('addtitle')
    let notes = localStorage.getItem('notes')
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes)
    }
    let myobj = {
        title: addtitle.value,
        text : addtxt.value
    }
    notesObj.push(myobj);
    // console.log(notesObj)
    localStorage.setItem('notes', JSON.stringify(notesObj))
    addtxt.value = "";
    addtitle.value = "";
    // console.log(notesObj)
    shownotes();
})

//show notes function
function shownotes() {
    let notes = localStorage.getItem('notes')
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes)
    }
    let html = "";
    notesObj.forEach((element, index) => {
        html += ` <div class="my-2 mx-2 noteCard card" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">${element.title}</h5>
          <p class="card-text">${element.text}</p>
          <button id="${index}" onclick="deletenote(this.id)"  class="btn btn-primary">Delete Note</button>
        </div>
      </div>`

    })
    let noteEl = document.getElementById('notes')
    if(notesObj.length != 0){
        noteEl.innerHTML = html;
    }
    else{
        noteEl.innerHTML = `Nothing to show you add a note section`
    }
}


// delete a note 
function deletenote(index){
    let notes = localStorage.getItem('notes');
    if(notes == null){
        notesObj = [];
    }
    else{
        notesObj = JSON.parse(notes);
    }

    notesObj.splice(index, 1);
    localStorage.setItem('notes',JSON.stringify(notesObj));
    shownotes();
}


// searching a note 
let search = document.getElementById('searchtxt');
search.addEventListener('input',()=>{
    let inputEl = search.value.toLowerCase();
    let noteCards = document.getElementsByClassName('noteCard')
    Array.from(noteCards).forEach((element)=>{
        let cardtxt = element.getElementsByTagName('p')[0].innerText;
        if(cardtxt.includes(inputEl)){
            element.style.display = 'block'
        }
        else{
            element.style.display = 'none'
        }
    })
})
