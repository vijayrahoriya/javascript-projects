const canvas = document.querySelector('#canvas')
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth
canvas.height = window.innerHeight

window.addEventListener('resize',()=>{
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
    // ctx.fillStyle = 'white';
    // ctx.fillRect(10,10,150,50);
})

// ctx.fillStyle = 'white';
// ctx.fillRect(10,10,150,50);

//make a circle
const mouse = {
    x: undefined,
    y: undefined
}
canvas.addEventListener('click',(e)=>{
    mouse.x = e.x;
    mouse.y = e.y
    // drawCircle();
})

canvas.addEventListener('mousemove',(e)=>{
    mouse.x = e.x;
    mouse.y = e.y
    // drawCircle();
})

function drawCircle(){
    ctx.fillStyle = 'red';
    ctx.strokeStyle = 'white'//sets line around the circle
    ctx.lineWidth = 5;//set lines width 
    ctx.beginPath();//we have to give begin path when we make circle
    ctx.arc(mouse.x,mouse.y,50,0,Math.PI * 2);
    ctx.stroke();//show our circle line
    ctx.fill();//it fills color to the circle
}

function animated(){
    ctx.clearRect(0,0,canvas.width,canvas.height)
    drawCircle();
    requestAnimationFrame(animated)//run this function only one time
}

animated()