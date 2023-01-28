const toggles = document.querySelectorAll('.toggle'),
contentDiv = document.querySelectorAll('.content'),
icons = document.querySelectorAll('.icon')

for(let i=0; i<toggles.length; i++){
    toggles[i].addEventListener('click',()=>{

        if(parseInt(contentDiv[i].style.height) != contentDiv[i].scrollHeight){
            contentDiv[i].style.height = contentDiv[i].scrollHeight + "px"
            icons[i].classList.replace('fa-plus','fa-minus')
            toggles[i].style.color = '#0084e9'

        }
        else{
            contentDiv[i].style.height = 0 + "px"
            icons[i].classList.replace('fa-minus','fa-plus')
            toggles[i].style.color = '#222'
        }
        
    })
}