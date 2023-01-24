const openIcon = document.querySelector('.openIcon'),
wrapper = document.querySelector('.wrapper'),
mode = document.querySelector('.mode'),
modeInput = document.querySelector('.mode input'),
modeText = document.querySelector('.mode span');

openIcon.addEventListener('click',()=>{
    wrapper.classList.toggle('show')
    openIcon.classList.contains('fa-chevron-right')? openIcon.classList.replace('fa-chevron-right','fa-chevron-left') : openIcon.classList.replace('fa-chevron-left','fa-chevron-right')
})

modeInput.addEventListener('click',()=>{
    if(modeInput.checked){
        document.body.style.background = '#222'
        document.body.style.color = '#fff'
        modeText.innerHTML = 'Lightmode'
        wrapper.style.background = '#333'
        wrapper.style.color = '#fff'
        document.querySelectorAll('.active').forEach(active=>{
            active.style.background = '#555'
        })
    }else{
        document.body.style.background = '#fff'
        document.body.style.color = '#000'
        modeText.innerHTML = 'Darkmode'
        wrapper.style.background = '#fff'
        wrapper.style.color = '#000'
        document.querySelectorAll('.active').forEach(active=>{
            active.style.background = 'rgb(231, 231, 231)'
        })
    }
})