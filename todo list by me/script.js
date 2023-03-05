const taskInput = document.querySelector('header input'),
addBtn = document.querySelector('header button'),
listEl = document.querySelector('ul');

let tasks = [];
const showTask = (data) =>{
    taskInput.value = data ? data.name : taskInput.value;
    let liEl = `<li>
                    <span class="task">${taskInput.value}</span>
                    <span>
                        <button id="edit" class="edit">Edit</button>
                        <button id="delete" class="delete">Delete</button>
                    </span>
                </li>`
    listEl.innerHTML += liEl;  
}

addBtn.addEventListener('click',()=>{
    if(!taskInput.value) return;
    let taksObj = {
        name:taskInput.value
    }
    tasks.push(taksObj)
    localStorage.setItem('data',JSON.stringify(tasks))
    showTask()
})

window.onload = () =>{
    let taskList = JSON.parse(localStorage.getItem('data'));
    if(taskList){
        taskList.forEach(item=>{
            showTask(item)
        })
    }else{
        return;
    }
}
