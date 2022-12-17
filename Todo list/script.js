const formEl = document.querySelector('.form'),
inputEl = formEl.querySelector('input');

const todoList = (data)=>{
    let lists = document.createElement("ul");
    lists.classList.add('lists');
    console.log(lists)
    let text = `
            <li class=""><span></span><i class="fa-solid fa-square-check"></i><i class="fa-solid fa-trash"></i></li>`;

    lists.innerHTML = text;
    const liEl = lists.querySelector('li');
    if(data){
        inputEl.value = data.name
    }
    liEl.querySelector('span').innerHTML = inputEl.value;

    if(data && data.checked){
        liEl.classList.add('checked')
    }

    formEl.appendChild(lists)
    inputEl.value = ""

    const checkEl = lists.querySelectorAll('.fa-square-check');
    const deleteEl = lists.querySelectorAll('.fa-trash');

    checkEl.forEach(item => {
        item.addEventListener('click',()=>{
            item.parentElement.classList.toggle('checked');
            updateLoacal();
        })
    })

    deleteEl.forEach(item=>{
        item.addEventListener('click',()=>{
            item.parentElement.remove();
            updateLoacal();
        })
    })
    updateLoacal();
}

formEl.addEventListener('submit',(e)=>{
    e.preventDefault();
    todoList();
})

function updateLoacal(){
    let liEl = document.querySelectorAll('li');
    let list = [];
    liEl.forEach(item=>{
        list.push({
            name : item.innerText,
            checked : item.classList.contains('checked')
        })
    })
    localStorage.setItem('list',JSON.stringify(list));
}

let listEl = JSON.parse(localStorage.getItem('list'));
listEl.forEach(item=>{
    todoList(item)
})