const fileInput = document.querySelector('.file-input'),
chooseBtn = document.querySelector('.choose-img'),
previewImg = document.querySelector('.preview-img img'),
filterName = document.querySelector(".filter-info .name"),
filterValue = document.querySelector(".filter-info .value"),
filterSlider = document.querySelector('.slider input'),
filterOptions = document.querySelectorAll('.filter button'),
resetFilterBtn = document.querySelector('.reset-filter'),
saveImageBtn = document.querySelector('.save-img'),
rotateOptions = document.querySelectorAll('.rotate button')

let brightness = 100, saturation= 100, inversion = 0, gryscale=0;
let rotate=0;
let flipHorizontal = 1,flipVertical=1;

const applyFilter = ()=>{
    previewImg.style.transform = `rotate(${rotate}deg) scale(${flipHorizontal},${flipVertical})`
    previewImg.style.filter = `brightness(${brightness}%) saturate(${saturation}%) invert(${inversion}) grayscale(${gryscale})`
}

const loadImage = ()=>{
    let file = fileInput.files[0] //getting user selected file
    if(!file) return;  // if user doesn't select a file then return it;
    previewImg.src = URL.createObjectURL(file); //to create url for img 
    previewImg.addEventListener('load',()=>{
        document.querySelector('.container').classList.remove('disable')
    })
}

filterOptions.forEach(option=>{
    option.addEventListener('click',()=>{
        document.querySelector('.filter .active').classList.remove('active')
         option.classList.add('active');
         filterName.innerHTML = option.innerHTML
         if(option.id === 'brightness'){
            filterSlider.max = '200'
            filterSlider.value = brightness
            filterValue.innerText = `${brightness}%`
        }else if(option.id === 'saturation'){
            filterSlider.max = '200'
            filterSlider.value = saturation 
            filterValue.innerText = `${saturation}%`
        }else if(option.id === 'inversion'){
            filterSlider.max = '100'
            filterSlider.value = inversion 
            filterValue.innerText = `${inversion}%`
        }else{
            filterSlider.max = '100'
            filterSlider.value = gryscale 
            filterValue.innerText = `${gryscale}%`
        }
    })
})

const updateFilter = ()=>{
    // console.log(filterSlider.value)
    filterValue.innerHTML = `${filterSlider.value}%`
    const selectedFilter = document.querySelector('.filter .active'); //getting selected filter btn
    if(selectedFilter.id === 'brightness'){
        brightness = filterSlider.value
    }else if(selectedFilter.id === 'saturation'){
        saturation = filterSlider.value
    }else if(selectedFilter.id === 'inversion'){
        inversion = filterSlider.value
    }else{
        gryscale = filterSlider.value
    }

    applyFilter();
}

rotateOptions.forEach(option=>{
    option.addEventListener('click',()=>{
        if(option.id === 'left'){
            rotate -= 90
        }else if(option.id === 'right'){
            rotate += 90
        }else if(option.id === 'horizontal'){
            flipHorizontal = flipHorizontal === 1 ? -1 : 1;
        }else{
            flipVertical = flipVertical === 1 ? -1 : 1;
        }

        applyFilter();
    })
})

const resetFilter = ()=>{
    //reset all variable value to its default value
    brightness = 100; saturation= 100; inversion = 0; gryscale=0;
    rotate=0;
    flipHorizontal = 1;flipVertical=1;
    filterOptions[0].click();//clicking brightness btn so the brightness selected by default
    applyFilter();
}

const saveImage = ()=>{
    let canvas = document.createElement('canvas');
    let ctx = canvas.getContext('2d')
    canvas.width = previewImg.naturalWidth;
    canvas.height = previewImg.naturalHeight;

    //applying user selected filters to canvas filter
    ctx.filter = `brightness(${brightness}%) saturate(${saturation}%) invert(${inversion}) grayscale(${gryscale})`

    ctx.translate(canvas.width / 2 , canvas.height / 2) // trasleting canvas from center
    if(rotate !== 0){
        ctx.rotate(rotate * Math.PI / 180);
    }
    ctx.scale(flipHorizontal , flipVertical)
    ctx.drawImage(previewImg,-canvas.width / 2, -canvas.height/2,canvas.width,canvas.height);

    let link = document.createElement('a');
    link.download = "image.jpg" //passing a tag download value as image.jpg
    link.href = canvas.toDataURL();
    link.click();
}


fileInput.addEventListener('change', loadImage);
filterSlider.addEventListener('input', ()=>{
    updateFilter();
});
saveImageBtn.addEventListener('click',saveImage)
resetFilterBtn.addEventListener('click',resetFilter);
chooseBtn.addEventListener('click',()=>fileInput.click())
