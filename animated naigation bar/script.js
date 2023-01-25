const liEl = document.querySelectorAll('li');

liEl.forEach(li=>{
    li.addEventListener('click',()=>{
        document.querySelector('.active').classList.remove('active')
        li.classList.add('active')
    })
})