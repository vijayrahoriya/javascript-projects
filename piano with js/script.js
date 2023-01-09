let pianokeys = document.querySelectorAll('.key'),
volumeBtn = document.querySelector('.volume input'),
showHideBtn = document.querySelector('.show input');

let allAudio = []
let audio = new Audio('tunes/a.wav')
const playTune = (key)=>{
    audio.src = `tunes/${key}.wav`
    audio.play();
    const clickedKey = document.querySelector(`[data-key="${key}"]`)
    clickedKey.classList.add('active');
    setTimeout(() => {
        clickedKey.classList.remove('active');
    }, 150);
}

pianokeys.forEach(key=>{
    allAudio.push(key.dataset.key)
    key.addEventListener('click',()=>{
    playTune(key.dataset.key)
})})

const pressedKey = (e) =>{
    if(allAudio.includes(e.key)) playTune(e.key);
}

const setVolume = () =>{
    audio.volume = volumeBtn.value
}

const hideKeys = () =>{
    const keys = document.querySelectorAll('li span'),
    showText = document.querySelector('.show span');
    keys.forEach(key => {
        showText.innerText = key.classList.contains('hide')? 'Hide keys' : 'Show keys'
        key.classList.toggle('hide')
    })
}

document.addEventListener('keydown',pressedKey)
volumeBtn.addEventListener('input',setVolume)
showHideBtn.addEventListener('click',hideKeys)