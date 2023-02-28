const player = document.querySelector(".player"),
    tonArm = document.querySelector('.ton-arm'),
    playBtn = document.querySelector('.start'),
    volumeInput = document.querySelector('input');

let AudioEl = new Audio('./songs/music-1.mp3')
let state = false;
playBtn.addEventListener('click', () => {
    tonArm.classList.toggle('active')
    setTimeout(() => {
        player.classList.toggle('active')
    }, 100);
    if(state == false){
        AudioEl.play();
    }else{
        AudioEl.pause()
    }
    state = !state;
})

volumeInput.addEventListener('input', (e) => {
    let value = volumeInput.value
    AudioEl.volume = value
})