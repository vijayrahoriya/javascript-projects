const uploadBox = document.querySelector('.upload-Box'),
previewImg = uploadBox.querySelector('img'),
fileInput  = uploadBox.querySelector('input')
widthInput = document.querySelector('.width input'),
heightInput = document.querySelector('.height input'),
ratioInput = document.querySelector('.ratio input'),
qualityInput = document.querySelector('.quality input')
downloadBtn = document.querySelector('.download-btn')
// console.log(previewImg, fileInput)

let ogImageRatio;

const loadFile = (e) =>{
    const file = e.target.files[0]; 
    console.log(file)
    //getting first user selecred file
    if(!file) return; //if user hasn't selected any file
    previewImg.src = URL.createObjectURL(file); //passing selected file url to preview img src
    // console.log(previewImg.src)
    previewImg.addEventListener('load',()=>{ //once img load
        widthInput.value = previewImg.naturalWidth
        heightInput.value = previewImg.naturalHeight
        ogImageRatio = previewImg.naturalWidth / previewImg.naturalHeight
        document.querySelector('.wrapper').classList.add('active')
    })
}

widthInput.addEventListener('keyup',()=>{
    //getting height according to the ratio checkbox status
    const height = ratioInput.checked ? widthInput.value / ogImageRatio : heightInput.value;
    heightInput.value = Math.floor(height);
})

heightInput.addEventListener('keyup',()=>{
    //getting height according to the ratio checkbox status
    const width = ratioInput.checked ? heightInput.value * ogImageRatio : widthInput.value;
    widthInput.value = Math.floor(width);
})

const resizeAndDownload = ()=>{
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    const a = document.createElement('a');

    //if quality checkbox is checked , pass .7 to imageQuality else pass 1.0
    //1.0 is 100% quality where .7 is 70%
    const imageQuality = qualityInput.checked ? .7 : 1.0

    //setting canvas height and width: according to the input values
    canvas.width = widthInput.value;
    canvas.height = heightInput.value;

    //drawing user seleceted iamge into the canvas 
    ctx.drawImage(previewImg, 0,0 ,canvas.width,canvas.height);
    a.href = canvas.toDataURL('image/jpeg',imageQuality);
    a.download = new Date().getTime(); //passing current time as download value
    a.click(); //clicking <a> element so the file download
}

downloadBtn.addEventListener('click',resizeAndDownload);
fileInput.addEventListener('change',loadFile)
uploadBox.addEventListener('click',() => fileInput.click())