const defaultBtn = document.querySelector('#default-btn'),
customBtn = document.querySelector('#custom-btn'),
img = document.querySelector('img'),
fileName = document.querySelector('.file-name'),
wrapper = document.querySelector('.wrapper'),
closeBtn = document.querySelector('#cancel-btn')

let regex = /[0-9a-zA-Z\^\&\'\@\{\}\[\]\,\$\=\!\-\#\(\)\.\%\+\~\_]+$/

function defaultBtnActive(){
    defaultBtn.click();
}

defaultBtn.addEventListener('change',function(){
    let file = this.files[0]
    if(file){
        const reader = new FileReader();
        reader.onload = function(){
            const result = reader.result;
            img.src = result;
            wrapper.classList.add('active')
        }
        closeBtn.addEventListener('click',function(){
            img.src = ""
            wrapper.classList.remove('active')
        })
        reader.readAsDataURL(file)
    }
    if(this.value){
        let valueStore = this.value.match(regex);
        fileName.textContent = valueStore;
    }
})
