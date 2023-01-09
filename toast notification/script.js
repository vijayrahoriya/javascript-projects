const buttons = document.querySelectorAll('button'),
    toastEl = document.querySelector('.notific'),
    closeIcon = document.querySelector('.fa-times'),
    Icons = document.querySelector('.icon i'),
    messageEl = document.querySelector('.icon span'),
    progressEl = document.querySelector('.progress');

let width = 100;
let timer;

function showToast(element) {
    let elementVal = element.innerHTML;
    messageEl.innerHTML = `${elementVal}: This is ${elementVal.slice(0, 1) == 'I' || 'E' ? 'an' : 'a'} ${elementVal.toLowerCase()} toast.`
    if (elementVal == 'Success') {
        Icons.className = 'fa-solid fa-check';
        Icons.style.backgroundColor = 'rgb(14, 170, 14)'
        progressEl.style.backgroundColor = 'rgb(14, 170, 14)'
    }
    else if (elementVal == 'Error') {
        Icons.className = 'fa-solid fa-times';
        Icons.style.backgroundColor = 'red'
        progressEl.style.backgroundColor = 'red'
    }
    else if (elementVal == 'Warning') {
        Icons.className = 'fa-solid fa-triangle-exclamation';
        Icons.style.backgroundColor = 'rgb(204, 204, 53)'
        progressEl.style.backgroundColor = 'rgb(204, 204, 53)'
    }
    else {
        Icons.className = 'fa-solid fa-exclamation';
        Icons.style.backgroundColor = 'rgb(68, 171, 212)'
        progressEl.style.backgroundColor = 'rgb(68, 171, 212)'
    }

    timer = setInterval(() => {
        width = width - 2
        if (width == 0) {
            toastEl.classList.remove('show')
            clearInterval(timer)
            for(let i = 0; i<buttons.length; i++){
                buttons[i].style.pointerEvents = 'auto'
            }

        }
        progressEl.style.width = `${width}%`
    }, 100);

    toastEl.classList.add('show')

    closeIcon.addEventListener('click', () => {
        toastEl.classList.remove('show')
        for(let i = 0; i<buttons.length; i++){
            buttons[i].style.pointerEvents = 'auto'
        }
    })

}
buttons.forEach(button => button.addEventListener('click', function () {
    for(let i = 0; i<buttons.length; i++){
        buttons[i].style.pointerEvents = 'none'
    }
    clearInterval(timer)
    width = 100;
    showToast(this)
}))