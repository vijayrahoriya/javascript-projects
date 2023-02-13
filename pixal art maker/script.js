const container = document.querySelector('.container'),
createGridBtn = document.querySelector('#create'),
clearGridBtn = document.querySelector('#clear'),
eraseBtn = document.querySelector('#erase'),
paintBtn = document.querySelector('#paint'),
gridWidth = document.querySelector('#width-range'),
gridHeight = document.querySelector('#height-range'),
widthEl = document.querySelector('.width'),
heightEl = document.querySelector('.height'),
colorInput = document.querySelector('#grid-color');

let color = ''

gridHeight.addEventListener('input',()=>{
    heightEl.innerHTML = gridHeight.value <= 9 ? `0${gridHeight.value}` : gridHeight.value
})

gridWidth.addEventListener('input',()=>{
    widthEl.innerHTML = gridWidth.value <= 9 ? `0${gridWidth.value}` : gridWidth.value
})

colorInput.addEventListener('input',()=>{
    color = colorInput.value
})

const events = {
    mouse:{
        down:'mousedown',
        up:'mouseup',
        move:'mousemove'
    },
    touch:{
        down: 'touchstart',
        move: 'touchmove',
        up: 'touchend'
    }
}

let deviceType = "";
let draw = false;
let erase = false;

const isTouchDevice = () =>{
    try {
        document.createEvent('TouchEvent')
        deviceType = "touch"
        return true;
    } catch (error) {
        deviceType = "mouse"
        return false;
    }
}

isTouchDevice();

// create grid 
createGridBtn.addEventListener('click',()=>{
    container.innerHTML = "";
    let count = 0 ; //for unique id
    for(let i = 0; i<gridHeight.value; i++){
        count += 2;
        let div = document.createElement('div')
        div.classList.add('gridRow');
        for(let j = 0; j<gridWidth.value; j++){
            count += 2;
            let col = document.createElement('div');
            col.classList.add('gridCol');
            col.setAttribute('id',`gridCol${count}`);

            col.addEventListener(events[deviceType].down,()=>{
                draw = true;
                if(erase){
                    col.style.backgroundColor = 'transparent'
                }
                else{
                    col.style.backgroundColor = color;
                }
            })

            col.addEventListener(events[deviceType].move,(e)=>{
                //elementFromPoint returns the element at x,y position of mouse
                let elementId = document.elementFromPoint(
                    !isTouchDevice() ? e.clientX : e.touches[0].clientX, 
                    !isTouchDevice() ? e.clientY : e.touches[0].clientY
                ).id
                checker(elementId)
            })

            col.addEventListener(events[deviceType].up,()=>{
                draw = false;
            })
            div.appendChild(col);
        }
        container.appendChild(div)
    }
});

function checker(elementId){
    let gridCols = document.querySelectorAll('.gridCol');

    gridCols.forEach(element=>{
        if(elementId == element.id){
            if(draw && !erase){
                element.style.backgroundColor = color;
            }else if(draw && erase){
                element.style.backgroundColor = 'transparent';
            }
        }
    })
}

clearGridBtn.addEventListener('click',()=>{
    container.innerHTML = ""
})

eraseBtn.addEventListener('click',()=>{
    erase = true
})

paintBtn.addEventListener('click',()=>{
    erase = false
})