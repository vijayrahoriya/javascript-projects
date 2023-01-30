const faceBtn = document.querySelector('.face'),
bodyColorBtn = document.querySelector('.body-color'),
hornsColorBtn = document.querySelector('.horns-color'),
tailsColorBtn = document.querySelector('.tail-color'),
bodyHorn  = document.querySelector('.horns'),
bodyTails = document.querySelector('.tail'),
bodyEl = document.querySelector('.body'),
bodyFace = document.querySelector('img');

let rootColor = document.querySelector(':root');
let bodyColor = ["#a8d530","#42aaff","#f3d5db","#ff4f51","#904ae8","#ffa711"];
let colors = [...bodyColor,"transparent"]
let [counter1,counter2,counter3,counter4] = Array(4).fill(0)
//fill methods fills all array elements with given value

const setCounter = (counter,len) =>{
    return counter < len - 1 ? counter + 1 : 0;
}

faceBtn.addEventListener('click',()=>{
    counter1 = setCounter(counter1,6)
    // console.log(counter1)
    bodyFace.src = `face-${counter1}.png`
})

bodyColorBtn.addEventListener('click',()=>{
    counter2 = setCounter(counter2,bodyColor.length)
    rootColor.style.setProperty("--bodyColor",`${bodyColor[counter2]}`)
})

hornsColorBtn.addEventListener('click',()=>{
    counter3 = setCounter(counter3,colors.length)
    rootColor.style.setProperty("--hornColor",`${colors[counter3]}`)
})


tailsColorBtn.addEventListener('click',()=>{
    counter4 = setCounter(counter4,colors.length)
    rootColor.style.setProperty("--tailColor",`${colors[counter4]}`)
})