const fileInput = document.querySelector('.buttons input'),
chooseImageBtn = document.querySelector('.choose'),
choosedImage = document.querySelector('.image img'),
saveBtn = document.querySelector('.save'),
filterSlider = document.querySelectorAll('.field input'),
flipBtns = document.querySelectorAll('.input-radio input'),
tools = document.querySelector('.content');

let blurEl = 0,
contrast = 0,
hue = 0
sepia = 0,
filterEl="";
flipHori = 1;
flipVerti = 1;

//upload a image
fileInput.addEventListener('change',uploadFile)

function uploadFile(){
    let file = fileInput.files[0]
    if(!file) return;
    choosedImage.src = URL.createObjectURL(file)
    choosedImage.addEventListener('load',()=>{
        saveBtn.style.pointerEvents = 'auto'
        tools.style.pointerEvents = 'auto'
    })
}

//Editing image

filterSlider.forEach(input=>{
    input.addEventListener('input',()=>{
        if(input.id == 'blur'){
            blurEl = parseInt(input.value)
            filterEl = `blur(${blurEl}px) contrast(${contrast}%) hue-rotate(${hue}deg) sepia(${sepia}%) `
            choosedImage.style.filter = filterEl
            // choosedImage.style.filter = 
        }else if(input.id == 'contrast'){
            contrast = parseInt(input.value)
            filterEl = `blur(${blurEl}px) contrast(${contrast}%) hue-rotate(${hue}deg) sepia(${sepia}%) `
            choosedImage.style.filter = filterEl
        }else if(input.id == 'hue'){
            hue = parseInt(input.value)
            filterEl = `blur(${blurEl}px) contrast(${contrast}%) hue-rotate(${hue}deg) sepia(${sepia}%) `
            choosedImage.style.filter = filterEl
        }else{
            sepia = parseInt(input.value)
            filterEl = `blur(${blurEl}px) contrast(${contrast}%) hue-rotate(${hue}deg) sepia(${sepia}%) `
            choosedImage.style.filter = filterEl
        }
    })
})

//flip a image

flipBtns.forEach(flipBtn=>{
    flipBtn.addEventListener('click',()=>{
        if(flipBtn.id== 'flip'){
            choosedImage.style.transform = `scale(1)`
        }
        else if(flipBtn.id== 'hori'){
            flipHori = -1
            choosedImage.style.transform = `scaleX(${flipHori})`
        }else{
            flipVerti = -1;
            choosedImage.style.transform = `scaleY(${flipVerti})`
        }
    })
})

//save image
saveBtn.addEventListener('click',()=>{
    let canvas = document.createElement('canvas');
    let ctx = canvas.getContext('2d')
    canvas.width = choosedImage.naturalWidth;
    canvas.height = choosedImage.naturalHeight;

    //applying user selected filters to canvas filter
    ctx.filter = filterEl;

    ctx.translate(canvas.width / 2 , canvas.height / 2) // trasleting canvas from center
   
    ctx.scale(flipHori , flipVerti)
    ctx.drawImage(choosedImage,-canvas.width / 2, -canvas.height/2,canvas.width,canvas.height);

    let link = document.createElement('a');
    link.download = "image.jpg" //passing a tag download value as image.jpg
    link.href = canvas.toDataURL();
    link.click();
})

chooseImageBtn.addEventListener('click',()=> fileInput.click())