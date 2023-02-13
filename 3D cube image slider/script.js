const cube = document.querySelector('.image-cube'),
nextIcon = document.querySelector('.next'),
prevIcon = document.querySelector('.prev');

let pos = 0;

nextIcon.addEventListener('click',()=>{
    pos -= 90;
    cube.style.transform = `rotateY(${pos}deg)`
})

prevIcon.addEventListener('click',()=>{
    pos += 90
    cube.style.transform = `rotateY(${pos}deg)`
})
