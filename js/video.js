const btnE1 = document.getElementsByClassName('btn')[0]
const closeiconE1 = document.querySelector('.close-icon')
const trailerContainer = document.querySelector('.trailer-container')
const videoE1 = document.querySelector('video')


btnE1.addEventListener('click',()=>{
    trailerContainer.classList.remove('active')
})

closeiconE1.addEventListener('click',()=>{
    trailerContainer.classList.add('active')
    videoE1.pause();
    videoE1.currentTime = 0;
})