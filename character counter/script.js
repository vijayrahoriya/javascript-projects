const textarea = document.querySelector('textarea'),
totalChars = document.querySelector('.chars span');

textarea.addEventListener('input',()=>{
    let val = textarea.value.split('').filter((word)=> word != " ").length
    totalChars.textContent = val
})