const mode = document.querySelector('.mode'),
container = document.querySelector('.container'),
homeEl = document.querySelector('.home'),
rootColor = document.querySelector(':root'),
themeEl = document.querySelector('.theme'),
colorBox = document.querySelector('.colorBox'),
themColors = document.querySelectorAll('.colors .color')


themeEl.addEventListener('click',()=>{
    colorBox.classList.toggle('active')
})

themColors.forEach(color=> {
    color.addEventListener('click',()=>{
        let colorVal = getComputedStyle(color).getPropertyValue('border-color')
        console.log(colorVal,color)
        rootColor.style.setProperty('--theme',colorVal)      
        colorBox.classList.remove('active')  
    })
})

mode.addEventListener('click',()=>{
    if(mode.classList.contains('fa-moon')){
        container.style.color = '#fff'
        container.style.background = '#333'
        homeEl.style.color = '#fff'
        homeEl.style.background = '#222'
        mode.classList.replace('fa-moon','fa-sun')
    }else if(mode.classList.contains('fa-sun')){
        container.style.color = '#fff'
        container.style.background = 'var(--theme)'
        homeEl.style.color = '#000'
        homeEl.style.background = 'rgb(219, 237, 244)'
        mode.classList.replace('fa-sun','fa-moon')
    }
})