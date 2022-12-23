const wrapper = document.querySelector('.box')
window.addEventListener('contextmenu',(e)=>{
    e.preventDefault();
    let box = document.querySelector('.box')
    box.classList.add('show')
    if(e.offsetX > 1150){
        box.style.left = `1180px`
        box.style.top = `${e.offsetY}px`
        document.querySelector('.box li.share ul').style.left = "-60%"
    }else if(e.offsetY > 430){
        box.style.top = `430px`
        box.style.left = `${e.offsetX}px`
    }
    else{
        box.style.top = `${e.offsetY}px`
        box.style.left = `${e.offsetX}px`
        console.log(e.offsetX,e.offsetY)
    }
})

window.addEventListener('click',(e)=>{
    if(e.target = wrapper || e.target.parentElement == wrapper){
        console.log(e.target,'box')
        return;
    }
    else{
        console.log(e.target,'not')
        let box = document.querySelector('.box')
        box.classList.remove('show')
    }
})