const uploadBtn = document.querySelector('#upload-button'),
choseImage = document.querySelector('#chosen-image'),
fileName = document.querySelector('#file-name'),
container = document.querySelector('.container'),
error = document.querySelector('#error'),
imageDisplay = document.querySelector('#image-display')

const fileHandler = (file,name,type) =>{
    if(type.split('/')[0] !== 'image'){
        error.innerHTML = 'Please upload an image file'
        return false;
    }
    error.innerHTML = "";
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () =>{
        let imageContainer = document.createElement('figure')
        let img = document.createElement('img');
        img.src = reader.result;
        imageContainer.appendChild(img);
        imageContainer.innerHTML += `<figcaption>${name}</figcaption>`
        imageDisplay.appendChild(imageContainer);
    }
}

uploadBtn.addEventListener('change',()=>{
    imageDisplay.innerHTML = "";
    //for uploading one or more files
    Array.from(uploadBtn.files).forEach(file=>{
        fileHandler(file,file.name,file.type)
    })
})

//drag and drop
container.addEventListener('dragenter',(e)=>{
    e.preventDefault();
    e.stopPropagation();
    container.classList.add('active')
},false)

container.addEventListener('dragleave',(e)=>{
    e.preventDefault();
    e.stopPropagation();
    container.classList.remove('active')
},false)

container.addEventListener('dragover',(e)=>{
    e.preventDefault();
    e.stopPropagation();
    container.classList.add('active')
},false)

container.addEventListener('drop',(e)=>{
    e.preventDefault();
    e.stopPropagation();
    container.classList.remove('active');
    let draggedData = e.dataTransfer;
    let files = draggedData.files
    imageDisplay.innerHTML = "";
    Array.from(files).forEach(file=>{
        fileHandler(file,file.name,file.type)
    })
},false)

window.onload = () =>{
    error.innerHTML = ""
}