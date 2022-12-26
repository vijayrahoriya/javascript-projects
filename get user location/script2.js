const wrapper = document.querySelector('.wrapper'),
header = document.querySelector('header');

const draggable = ({movementX, movementY})=>{
    // console.log(e)
    header.classList.add('active')
    let stylesEl = window.getComputedStyle(wrapper)
    let left = parseInt(stylesEl.left);
    let top = parseInt(stylesEl.top)
    // console.log(left,top)
    wrapper.style.left = `${left + movementX }px`
    wrapper.style.top = `${top + movementY }px`
}

header.addEventListener('mousedown',()=>{
    header.addEventListener('mousemove',draggable)
})

window.addEventListener('click',()=>{
    header.removeEventListener('mousemove',draggable)
    header.classList.remove('active')
})

