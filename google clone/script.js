const optionsBox = document.querySelector('.options-box'),
optionsBoxBtn = document.querySelector('.vertical'),
themesBtns = document.querySelectorAll('.line'),
boxes = document.querySelectorAll('.modify .row .box'),
fileInput = document.querySelector("#fileinput"),
uploadBtn = document.querySelector('.upload'),
shortcutBtns = document.querySelectorAll('.box1'),
toggleBtn = document.querySelector('.toggle'),
colors = document.querySelectorAll('.color-box'),
backgroundsEl = document.querySelector('.right .row'),
shortcutsEl = document.querySelector('.right .row2'),
colorThemeEl = document.querySelector('.right .colors-row'),
hideEl = document.querySelector('.hide'),
customizeBtn = document.querySelector('.customize'),
bigBoxEl = document.querySelector('.big-box'),
modalEl = document.querySelector('.modal'),
refreshBtn = document.querySelector('#refresh'),
doneBtn = document.querySelector('.done'),
cancelBtn = document.querySelector('.cancel'),
micEl = document.querySelector('#mic');

let bgImage = "";
let headeColor = "";
let bodyColor = "";


optionsBoxBtn.addEventListener('click',()=>{
    optionsBox.classList.toggle('active')
})

themesBtns.forEach(btn=>{
    btn.addEventListener('click',()=>{
        document.querySelector('.active').classList.remove('active')
        btn.classList.add('active')
        if(btn.id == 'bg'){
            backgroundsEl.classList.remove('hide')
            hideEl.classList.remove('show')
            colorThemeEl.classList.remove('show')
            shortcutsEl.classList.remove('show')
        }else if(btn.id == 'short'){
            shortcutsEl.classList.add('show')
            backgroundsEl.classList.add('hide')
            colorThemeEl.classList.remove('show')
            hideEl.classList.add('show')
        }else{
            shortcutsEl.classList.remove('show')
            backgroundsEl.classList.add('hide')
            colorThemeEl.classList.add('show')
            hideEl.classList.remove('show')
        }
    })
})

fileInput.addEventListener('change',(e)=>{
    uploadBtn.innerHTML = ""
    let file = e.target.files[0]
    let img = document.createElement('img')
    img.src = URL.createObjectURL(file)
    uploadBtn.appendChild(img)
    bgImage = img
})

uploadBtn.addEventListener('click',()=>{
    fileInput.click();
});

boxes.forEach(box=> {
    box.addEventListener('click',()=>{
        box.parentElement.querySelector('.active').classList.remove('active')
        box.classList.add('active')
        bgImage = box.querySelector('img')
    })
})

shortcutBtns.forEach(btn=>{
    btn.addEventListener('click',()=>{
        btn.parentElement.parentElement.querySelector('.active').classList.remove('active');
        btn.classList.add('active')
    })
})

toggleBtn.addEventListener('click',()=>{
    toggleBtn.classList.toggle('active')
    if(toggleBtn.classList.contains('active')){
        toggleBtn.parentElement.parentElement.classList.add('active')
        shortcutBtns.forEach(box=>{
            box.classList.remove('active')
        })
    } else{
        toggleBtn.parentElement.parentElement.classList.remove('active')
        shortcutBtns[0].classList.add('active')
    } 
})

colors.forEach(color=>{
    color.addEventListener('click',()=>{
        color.parentElement.querySelector('.active').classList.remove('active')
        color.classList.add('active')
        headeColor = window.getComputedStyle(color).getPropertyValue('background').split('90deg,')[1].split('50%,')[0]
        bodyColor = window.getComputedStyle(color).getPropertyValue('background').split('90deg,')[1].split('50%,')[1].split('50%')[0].trim();
    })
})

customizeBtn.addEventListener('click',()=>{
    bigBoxEl.classList.add('hide')
    modalEl.classList.add('show')
    uploadBtn.innerHTML = `<i class="fa fa-upload"></i>
    <span>Upload from device</span>`
})

refreshBtn.addEventListener('click',()=>{
    window.location.reload();
    bigBoxEl.classList.remove('hide')
    modalEl.classList.remove('show')
})

cancelBtn.addEventListener('click',()=>{
    bigBoxEl.classList.remove('hide')
    modalEl.classList.remove('show')
})

doneBtn.addEventListener('click',()=>{
    let headerEl = document.querySelector('header')
    headerEl.style.background = headeColor;
    if(!bgImage){
        bigBoxEl.style.background = bodyColor
        document.querySelector('.search-box').classList.remove('active')
        if(bodyColor == 'rgb(34, 34, 34)' || bodyColor == 'rgb(68, 68, 68)'){
            bigBoxEl.style.color = "#fff"
        }else{
            bigBoxEl.style.color = "#000"
        }
    }else{
        bigBoxEl.style.background = `url('${bgImage.src}') no-repeat 0 0`
        bigBoxEl.style.backgroundPosition = 'center'
        bigBoxEl.style.backgroundSize = 'cover'
        bigBoxEl.style.color = "#fff"
        document.querySelector('.search-box').classList.add('active')
    }

    

    bigBoxEl.classList.remove('hide')
    modalEl.classList.remove('show')
})

micEl.addEventListener('click',()=>{
    window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition

    const recognition = new SpeechRecognition();
    recognition.interimResults = true;
    const input = document.querySelector('.search-box input');

    recognition.addEventListener('result',e=>{
        const transcript = Array.from(e.results)
        .map(result=> result[0])
        .map(result=> result.transcript)
        .join('');
        input.value = transcript;
        if(e.results[0].isFinal){
            input.value += transcript
        }
    })

    recognition.addEventListener('end',recognition.start)
    recognition.start();
})