const bar = document.getElementById('bar')
const close = document.getElementById('close')
const nav = document.getElementById('navbar');

bar.addEventListener('click',()=>{
    nav.style.right = 0;
})
close.addEventListener('click',()=>{
    nav.style.right = "-300px";
})

// if(bar){
//     bar.addEventListener('click',()=>{
//         nav.classList.add('active')
//     })
// }
// if(close){
//     close.addEventListener('click',()=>{
//         nav.classList.remove('active')
//     })
// }

