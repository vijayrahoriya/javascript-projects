const btn = document.querySelector('button'),
wrapper = document.querySelector('.wrapper'),
inputEl = document.querySelector('input'),
heading = document.querySelector('.heading');

let file;//file is global variable


btn.addEventListener('click',()=>{
    inputEl.click();
})

inputEl.addEventListener('change',(e)=>{
    file = e.target.files[0];
    showFile();
    wrapper.classList.add('active')
})

//if user drag file over wrapper
wrapper.addEventListener('dragover',(e)=>{
    e.preventDefault();
    wrapper.classList.add('active')
    heading.textContent = 'Release to Upload file'
})

//if user leave draged file over wrapper
wrapper.addEventListener('dragleave',()=>{
    wrapper.classList.remove('active')
    heading.textContent = 'Drag & Drop to Upload File'
})

//if user droped draged file on wrapper
wrapper.addEventListener('drop',(e)=>{
    e.preventDefault();//preventing 
    //getting user select file
    file = e.dataTransfer.files[0]
    // console.log(file)
    showFile();
})

function showFile(){
    let fileType = file.type; //getting file type

    let validExtensions = ['image/jpeg','image/jpg','image/png']
    if(validExtensions.includes(fileType)){//if user select image type file
        let fileReader = new FileReader(); //creating file reader object
        fileReader.onload = ()=>{
            let fileURL = fileReader.result;//passing user file source in fileURL variable
            let imgTag = `<img src="${fileURL}">`//creating an image
            wrapper.innerHTML = imgTag
        }
        fileReader.readAsDataURL(file)
        // let imgTag = `<img src="${}`
    }else{
        alert('this is not an image file')
        wrapper.classList.remove('active');
    }
}
