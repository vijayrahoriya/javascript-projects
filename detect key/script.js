const content = document.querySelector('.content'),
start = document.querySelector('.start'),
keyName = document.querySelector('.key'),
keyCode = document.querySelector('h3 span');

const checkKey = (e) =>{
    content.classList.add('active')
    start.classList.add('hide')
    keyName.textContent = e.key;
    keyCode.textContent = e.keyCode
}

document.addEventListener('keypress',checkKey)