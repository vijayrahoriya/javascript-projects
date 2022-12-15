const addEl = document.querySelector('.top button');

const addLSData = () =>{
    let mainEl = document.querySelectorAll('.main');
    let topic = [];
    mainEl.forEach((item)=>{
        topic.push(item.innerHTML)
    })
    // console.log(topic)
    localStorage.setItem('topics',JSON.stringify(topic))
}

const addNewTask = (text) =>{
    let topic = document.createElement('div');
    topic.classList.add('topics');
    let inner = `<textarea class=""></textarea>
                <div class="main hidden"></div>
                <button class="edit">Edit</button>
                <button class="delete">Delete</button>`;

    topic.insertAdjacentHTML("beforeend",inner);

    const deleteEl = topic.querySelector(".delete");
    const editEl = topic.querySelector('.edit');
    const textarea = topic.querySelector('textarea');
    const mainDiv = topic.querySelector('.main');
    const inputEl = document.querySelector('.top input');

    mainDiv.classList.toggle('hidden');
    textarea.classList.toggle('hidden')
    mainDiv.innerHTML = text;
    textarea.value = text
    
    document.getElementsByClassName('container')[0].appendChild(topic);
    deleteEl.addEventListener('click',()=>{
        topic.remove();
        addLSData();
    })

    editEl.addEventListener('click',()=>{
        mainDiv.classList.toggle('hidden');
        textarea.classList.toggle('hidden')
    })

    textarea.value = inputEl.value
    mainDiv.innerHTML = textarea.value; 
    addLSData();

}

let topic = JSON.parse(localStorage.getItem('topics'));
// console.log(topic)
// topic.forEach((item)=>{
//     addNewTask(item)
// })

addEl.addEventListener('click', addNewTask)
