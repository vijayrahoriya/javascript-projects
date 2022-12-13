var canvas = document.getElementById('draw');
var ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
ctx.strokeStyle = '#BADA55';
ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = 100;

let isDraing = false;
let lastX = 0;
let lastY = 0;
let hue = 0;
let direction = true;

function draw(e){
    if(!isDraing) return;//stop function from running when they are not moused down
    console.log(e)
    ctx.strokeStyle = `hsl(${hue},100%,50%)`
    ctx.beginPath();
    ctx.moveTo(lastX , lastY);
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();
    lastX = e.offsetX;
    lastY = e.offsetY
    hue++
    if(hue >= 360){
        hue = 0;
    }
    if(ctx.lineWidth >= 100 || ctx.lineWidth <= 1){
        direction = !direction;
    }
    if(direction){
        ctx.lineWidth++
    }
    else{
        ctx.lineWidth--
    }
}

canvas.addEventListener('mousedown', (e)=> {
    isDraing = true
    lastX = e.offsetX;
    lastY = e.offsetY
    console.log(lastX, lastY)
})


canvas.addEventListener('mousemove',draw)
canvas.addEventListener('mouseup', ()=> isDraing = false)
canvas.addEventListener('mouseout', ()=> isDraing = false)


// ctx.fillStyle = "#FF0000";
// ctx.fillRect(100,100,200,200)    //to create a reactangle

// for creating a line 
// ctx.moveTo(0,0);
// ctx.lineTo(50,50);
// ctx.stroke();

// for creating a circle 
// ctx.arc(x,y,r,startangle,endangle)
// ctx.arc(50,50,40,0,2*Math.PI);
// ctx.stroke()

// canvas gradient 
// var grd = ctx.createLinearGradient(0,0,200,0);
// var grd = ctx.createRadialGradient(0,0,40,200,0,40)
// grd.addColorStop(0,'red');
// grd.addColorStop(1,'white');
// ctx.fillStyle = grd;
// ctx.fillRect(10,10,150,80)

// drawing a text on the canvas 
// ctx.font = '30px Arial';
// ctx.fillText('Hello World',20,50)
// ctx.strokeText('Hello World', 10,50)

// to add color to the text 
// ctx.fillStyle = 'red';
// ctx.textAlign = 'center';
// ctx.fillText('Hello World', canvas.width/2, canvas.height/2)

// to draw an image on canvas
// var img = document.getElementById('scream');
// ctx.drawImage(img, 50,10)
