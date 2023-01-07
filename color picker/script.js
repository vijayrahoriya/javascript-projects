const pickbtn = document.querySelector('.picker-button'),
ulEl = document.querySelector('ul'),
colorInfo = document.querySelector('.info'),
clearAllBtn = document.querySelector('.clear');
const pickedColors = JSON.parse(localStorage.getItem('pick-colors') || "[]")
console.log(pickedColors)

const copyColor = (e)=>{
    // console.log(e);
    navigator.clipboard.writeText(e.dataset.color)
    document.querySelector('.info').innerHTML = 'Copied'
    setTimeout(() => {
        document.querySelector('.info').innerHTML = e.dataset.color
    }, 1000);

}

const showColors = ()=>{
    if(!pickedColors.length) return;
    ulEl.innerHTML = pickedColors.map(color=>
                `<li>
                    <span class="color" style="background:${color}; border:1px solid ${color == '#ffffff' ? '#ccc': color }"></span>
                    <span class="info" data-color="${color}">${color}</span>
                </li>`
    ).join("")

    document.querySelectorAll('li').forEach(liEl =>{
        liEl.addEventListener('click',(e)=>{
            copyColor(e.currentTarget.lastElementChild)
        })
    })
    document.querySelector('.picked-color').classList.remove('hide')
}

showColors();

const showColorPicker = async() =>{
    document.body.style.display = 'none'
    try{
        let eyeDroper = new EyeDropper();
        const {sRGBHex} = await eyeDroper.open();
        // console.log(sRGBHex)
        if(!pickedColors.includes(sRGBHex)){
            pickedColors.push(sRGBHex);
            localStorage.setItem('pick-colors',JSON.stringify(pickedColors))
            showColors();
        }
    }catch(Err){
        console.log(Err)
    }
    document.body.style.display = 'block'
}

pickbtn.addEventListener('click',showColorPicker)
clearAllBtn.addEventListener('click',()=>{
    pickedColors.length = 0;
    localStorage.setItem('pick-colors',JSON.stringify(pickedColors))
    showColors()
    document.querySelector('.picked-color').classList.add('hide')

})