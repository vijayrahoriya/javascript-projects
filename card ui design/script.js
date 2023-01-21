const colorsBtn = document.querySelectorAll('.colorsBox span');
const themeColor = document.querySelector(':root')

colorsBtn.forEach(color=> {
    color.addEventListener('click',()=>{
        let colorVal = getComputedStyle(color).getPropertyValue('background-color')
        themeColor.style.setProperty('--color',colorVal)
    })
})