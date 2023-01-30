const btn = document.querySelector('button'),
boxes = document.querySelectorAll('.content div');

let shapes = [
    "quad-circle-1","quad-circle-2","quad-circle-3","quad-circle-4",
    "triangel-1","triangel-2","triangel-3","triangel-4",
    "circle"
];
let colors = ["#01d2fd","#ffc700","#fe9f12","#06d0c7"];

const genratePattern = () =>{
    boxes.forEach(box=>{
        box.className = "";
        let randomClass = shapes[Math.floor(Math.random()*shapes.length)]
        let randomColor = colors[Math.floor(Math.random()*colors.length)]
        box.classList.add(`${randomClass}`)
        box.style.background = `${randomColor}`
    })
}

window.addEventListener('load',genratePattern)
btn.addEventListener('click',genratePattern)