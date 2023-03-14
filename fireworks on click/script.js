const canvas = document.querySelector('#canvas')
let context = canvas.getContext('2d')
let width = window.innerWidth
let height = window.innerHeight
let clicked = false;
let mouseX = 0,mouseY = 0;
let particles = [];
let particleSettings = {
    gravity:0.05
}

let events = {
    mouse:{
        down:"mousedown",
        up:"mouseup",
        move:"mousemove"
    },
    touch:{
        down:"touchstart",
        up:"touchend",
        move:"touchmove"
    }
}

let deviceType = "";

//for using requestAnimationFrame on all browsers
window.requestAnimationFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(callback){
    window.setTimeout(callback,1000/60)
};

window.onload = () =>{
    canvas.width = width
    canvas.height = height
    window.requestAnimationFrame(startFireWork)
}

const isTouchDevice = () =>{
    try {
        document.createEvent('TouchEvent')
        deviceType = "touch"
        return true
    } catch (err) {
        deviceType = "mouse"
        return false
    }
}

isTouchDevice();

canvas.addEventListener(events[deviceType].down,(e)=>{
    e.preventDefault();
    clicked = true;
    mouseX = !isTouchDevice() ? e.pageX : e.touches[0].pageX
    mouseY = !isTouchDevice() ? e.pageY : e.touches[0].pageY
});

canvas.addEventListener(events[deviceType].up,(e)=>{
    e.preventDefault();
    clicked = false;
});

//function to genrate random number
const randomNumberGenrator = (min,max) =>{
    return Math.random() * (max - min) + min
}

function Particle(){
    this.width = randomNumberGenrator(0.1,0.9) * 5;
    this.height = randomNumberGenrator(0.1,0.9) * 5;
    this.x = mouseX - this.width / 2;
    this.y = mouseY - this.height / 2;

    //velocity of the particles
    this.vx = (Math.random() - 0.5) * 10;
    this.vy = (Math.random() - 0.5) * 10;

}

Particle.prototype = {
    move: function(){
        if(this.x >= canvas.width || this.y >= canvas.height){
            return false;
        }
        return true;
    },
    draw: function(){
        this.x += this.vx;
        this.y += this.vy;
        this.vy += particleSettings.gravity;
        context.save();
        context.beginPath();
        context.translate(this.x, this.y);
        context.arc(0,0,this.width,0,Math.PI * 2)
        context.fillStyle = this.color;
        context.closePath();
        context.fill();
        context.restore();
    },
}

function createFirework(){
    //Increase range for bigger fireworks
    var numberOfParticles = randomNumberGenrator(10,50);
    let color = `rgb(${randomNumberGenrator(0,255)},${randomNumberGenrator(0,255)},${randomNumberGenrator(0,255)})`;

    for(let i=0; i<numberOfParticles;i++){
        var particle = new Particle();
        particle.color = color;
        var vy = Math.sqrt(25 - particle.vx * particle.vx);
        if(Math.abs(particle.vy) > vy){
            particle.vy = particle.vy > 0 ? vy : -vy;
        }
        particles.push(particle)
    }
}

//function that start begin fireworks
function startFireWork(){
    let current = []
    //control trail left by particles through the value of alpha
    context.fillStyle = "rgba(0,0,0,0.1)";
    context.fillRect(0,0,width,height);
    if(clicked){
        createFirework();
    }
    for(let i in particles){
        particles[i].draw();
        if(particles[i].move()){
            current.push(particles[i])
        }
    };
    particles = current;
    window.requestAnimationFrame(startFireWork)
}