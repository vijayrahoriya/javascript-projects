const textarea = document.querySelector('textarea');

textarea.addEventListener('keyup',(e)=>{
    textarea.style.height = ""

    let scHeight = e.target.scrollHeight
    textarea.style.height = `${scHeight}px`
})