console.log('welcome to library')

function Book(name, author, type) {
    this.name = name;
    this.author = author;
    this.type = type
}

// display thr constructor
function Display() { }

//Implement the add function
Display.prototype.add = function (book) {
    tablebody = document.getElementById('tablebody')
    let uiString = `
    <tr>
    <td>${book.name}</td>
    <td>${book.author}</td>
    <td>${book.type}</td>
    </tr>`
    tablebody.innerHTML += uiString
}

//Implement the validate function
Display.prototype.validate = function(book){
    if(book.name.length<2 || book.author.length<2){
        return false;
    }
    else{
        return true;
    }
}


//Implement the add function
Display.prototype.clear = function () {
    libraryform = document.getElementById('libraryform')
    libraryform.reset();
}

// add submit event listener to libraryform
Display.prototype.show = function(type,showmessage){
     let message = document.getElementById('message')
     message.innerHTML = `
                        <div class="alert alert-${type} alert-dismissible fade show" role="alert">
                        <strong>${type=='success'? "Success" : "Error"}</strong> ${showmessage}
                        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                        </div>`
    setTimeout(() => {
        message.innerHTML = "";
    }, 3000);
}


// add submit event listener to libraryform
let libraryform = document.getElementById('libraryform');
libraryform.addEventListener('submit', libraryformsubmit)

function libraryformsubmit(e) {
    // console.log("You have submitted your form")
    let name = document.getElementById("bookName").value;
    let author = document.getElementById('authorname').value;
    let fiction = document.getElementById('Fiction')
    let programming = document.getElementById('Programming')
    let cooking = document.getElementById('cooking')
    let type;

    if (fiction.checked) {
        type = fiction.value;
        // console.log(type)
    }
    else if (programming.checked) {
        type = programming.value;
    }
    else if (cooking.checked) {
        type = cooking.value;
    }

    let book = new Book(name, author, type)

    // console.log(book.name)
    let display = new Display();
    if(display.validate(book)){
        display.add(book);
        display.clear();
        display.show('success','Your book has been successfuly added')
    }
    else{
        display.show('danger', 'Sorry you cannot add this book')
    }

    e.preventDefault();
}