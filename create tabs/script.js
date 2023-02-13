const buttons = document.querySelectorAll('button'),
title = document.querySelector('h2'),
paras = document.querySelectorAll('p')

buttons.forEach((btn,index)=>{
    btn.addEventListener('click',()=>{
        document.querySelector('.active').classList.remove('active')
        btn.classList.add('active')
        document.querySelector('.show').classList.remove('show')
        if(index == 0){
            paras[0].classList.add('show')
            title.innerHTML = 'First Title'
        }else if(index == 1){
            paras[1].classList.add('show')
            title.innerHTML = 'Second Title'
        }else{
            paras[2].classList.add('show')
            title.innerHTML = 'Third Title'
        }
    })
})