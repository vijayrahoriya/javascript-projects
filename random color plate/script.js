const colorPlate = document.querySelector('.row'),
refreshBtn = document.querySelector('button');

let maxPlate = 10;
const genrateColor = ()=>{
    colorPlate.innerHTML = ''
    for(let i =0; i<maxPlate; i++){
        let randomHex = Math.floor(Math.random() * 0xffffff).toString(16);//16 means hexagonal base
        // console.log(randomHex)
        randomHex = `#${randomHex.padStart(6,'0')}`//if randomHex don't have 6 length string than 0 will be added in starting of the randomHex by padStart
        // console.log(randomHex)
        let colorEl = document.createElement('div');
        colorEl.classList.add('plate');
        colorEl.innerHTML = `<div class="color-plate" style='background:${randomHex}'></div>
                             <div class="color">${randomHex}</div>`
        // console.log(colorEl)
        colorEl.addEventListener('click',()=> copyColor(colorEl,randomHex))
        colorPlate.appendChild(colorEl)
        
    }
}

genrateColor();

const copyColor = (ele,hex)=>{
    let colorText = ele.querySelector('.color');
    navigator.clipboard.writeText(hex).then(()=>{
        colorText.innerHTML = 'copied'
        setTimeout(() => {
            colorText.innerHTML = hex
        }, 1000);
    }).catch((err)=>{
        alert(`Can't copied color`)
    })
}

refreshBtn.addEventListener('click',genrateColor)

// let randomColor = '';
// function updateColor(){
//     let char = '1234567890ABCDEF'
//     for(let i = 0;i<6;i++){
//         randomDigit = char[Math.floor(Math.random()*char.length)];
//         randomColor += randomDigit;
//     }
//     randomColor = '#'+randomColor;
// }

// colorPlate.forEach(plate => {
//     updateColor();
//    plate.firstElementChild.style.background = randomColor;
//    plate.lastElementChild.innerHTML = randomColor;
//    randomColor = ''
// })

// refreshBtn.addEventListener('click',()=>{
//     window.location.reload();
// })