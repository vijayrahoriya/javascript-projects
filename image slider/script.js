let images = ['https://images.unsplash.com/photo-1673433974982-c266e49dc0c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60','https://images.unsplash.com/photo-1661961110144-12ac85918e40?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxMXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60','https://images.unsplash.com/photo-1673448269645-34f8260049d9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxN3x8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60','https://images.unsplash.com/photo-1673364432867-34b2e6722181?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzMnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60']

let index = 0;
const nextBtn = document.querySelector('.fa-chevron-right'),
prevBtn = document.querySelector('.fa-chevron-left'),
imgEl = document.querySelector('img'),
sliders = document.querySelectorAll('.slide');

sliders.forEach((slide,idx)=>{
    slide.addEventListener('click',()=>{
        imgEl.src = images[idx]
        document.querySelector('.active').classList.remove('active')
        sliders[idx].classList.add('active')
    })
})

window.onload = () =>{
    imgEl.src = images[0]
}


nextBtn.addEventListener('click',()=>{
    // console.log(index)
    if(index === images.length - 1){
        index = -1;
    }
    index++
    imgEl.src = images[index]
    document.querySelector('.active').classList.remove('active')
    sliders[index].classList.add('active')
})

prevBtn.addEventListener('click',()=>{
    if(index === 0){
        index = images.length;
    }
    index--
    imgEl.src = images[index]
    document.querySelector('.active').classList.remove('active')
    sliders[index].classList.add('active')
})