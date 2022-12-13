const imagecontainerE1 = document.querySelector('.image-container')
const btnE1 = document.querySelector('.btn')

btnE1.addEventListener('click',()=>{
    imageNum = 3;
    addnewimages();
})

function addnewimages(){
    for(var i = 0; i<imageNum; i++){
        const newimageE1 = document.createElement('img')
        newimageE1.src = `https://picsum.photos/300?random=${Math.floor(Math.random()*2000)}`
        imagecontainerE1.appendChild(newimageE1)
    }
}