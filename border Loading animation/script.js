const overlay = document.querySelector('.overlay'),
container = document.querySelector('.container')

let count = 0;
let timer = setInterval(() => {
    count++
    overlay.innerHTML = count + "%"
    if(count == 100){
        clearInterval(timer)
        container.classList.remove('active')
    }
}, 100);