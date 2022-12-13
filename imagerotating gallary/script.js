const imagecEl = document.querySelector('.image-container');
const prevEl = document.getElementById('prev');
const nextEl = document.getElementById('next');

let x = 0;
let timer ;

prevEl.addEventListener('click',()=>{
    x = x + 45;
    clearTimeout(timer)
    updategallary()
})

nextEl.addEventListener('click',()=>{
    x = x - 45;
    clearTimeout(timer)
    updategallary()
})

const updategallary = ()=>{
    imagecEl.style.transform = `perspective(1000px) rotateY(${x}deg)`
    timer = setTimeout(()=>{
        x = x - 45;
        updategallary();
    },4000)
}

updategallary();