const fileChooseBtn = document.querySelector('label'),
fileInput = document.querySelector('#choose-file'),
msg = document.querySelector('.msg'),
fileList = document.querySelector('.fileList');

fileInput.addEventListener('change',()=>{
    fileList.innerHTML = ""
    msg.classList.remove('active');
    for(i of fileInput.files){
        msg.innerHTML = `${fileInput.files.length} Files Selected`
        let reader = new FileReader();
        let size = (i.size / 1024).toFixed(1);
        let file = document.createElement('div')
        if(size >= 1024){
            size = (size / 1024).toFixed(1)
            file.innerHTML = `<span class="name">${i.name}</span>
            <span class="size">${size}MB</span>`
        }
        file.classList.add('file');
        file.innerHTML = `<span class="name">${i.name}</span>
                          <span class="size">${size}KB</span>`
        fileList.appendChild(file)
    }
})
