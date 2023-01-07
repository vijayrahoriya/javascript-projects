const filterItem = document.querySelector('.items'),
filterImg = document.querySelectorAll('.image');

window.onload =  ()=>{
    filterItem.onclick=(selectedItem)=>{//whwn user click on filter div
        if(selectedItem.target.classList.contains('item')){
            filterItem.querySelector('.active').classList.remove('active');
            selectedItem.target.classList.add('active')
            let filterName = selectedItem.target.getAttribute('data-name');
            filterImg.forEach(img=>{
                let filterImage = img.getAttribute('data-name');
                if((filterImage == filterName) || (filterName == 'all')){
                    img.classList.add('show')
                    img.classList.remove('hide');
                }else{
                    img.classList.remove('show')
                    img.classList.add('hide')
                }
            })
        }
    }
    for(let index=0; index<filterImg.length; index++){
        filterImg[index].setAttribute('onclick','preview(this)')
    }
}


const previewBox = document.querySelector('.preview-box'),
previewImg = previewBox.querySelector('img'),
shadowEl = document.querySelector('.shadow'),
imgInfo = document.querySelector('.preview-box span p'),
closeBtn = previewBox.querySelector('.icon');

function preview(elem){
    previewBox.classList.add('show');
    shadowEl.classList.add('show');
    document.querySelector('body').style.overflow = 'hidden'
    let info = elem.getAttribute('data-name')
    imgInfo.innerHTML = info;
    previewImg.src = elem.querySelector('img').src
    console.log(elem)
    closeBtn.addEventListener('click',()=>{
        previewBox.classList.remove('show')
        shadowEl.classList.remove('show')
    document.querySelector('body').style.overflow = 'scroll'
    })
}















// const buttons = document.querySelectorAll('button'),
// wrapper = document.querySelector('.wrapper'),
// preview = document.querySelector('.preview'),
// previewImg = document.querySelector('.preview img'),
// imgInfo = document.querySelector('header span'),
// closeBtn = document.querySelector('.fa-times'),
// imgBox = document.querySelectorAll('.img-box');

// imgBox.forEach((img,index)=>{
//     img.addEventListener('click',(e)=>{
//         wrapper.classList.add('hide');
//         preview.classList.add('show');
//         previewImg.src = e.target.src;
//         // console.log(e.target.parentElement.classList[1])
//         let className = e.target.parentElement.classList[1];
//         imgInfo.innerHTML = `Image Category : ${className}`
//     })
// })

// closeBtn.addEventListener('click',()=>{
//     wrapper.classList.remove('hide');
//     preview.classList.remove('show')
// })