const icons = document.querySelectorAll('.icons i')

icons.forEach((icon,index1)=>{
    icon.addEventListener('click',()=>{
        icons.forEach((star,index2)=>{
            index1 >= index2 ? star.classList.add('active') : star.classList.remove('active')
        })
    })
})