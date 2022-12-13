
const kits = ['crash','kick','snare','tom']
const containerE1 = document.querySelector('.container')

kits.forEach((kit)=>{
    const btnE1 = document.createElement('button')
    containerE1.append(btnE1)
    btnE1.innerText = kit
    btnE1.classList.add('btn')
    btnE1.style.backgroundImage = 'url(./drum-img/' + kit + '.png)';

    const audioE1 = document.createElement('audio')
    containerE1.append(audioE1)
    audioE1.src = "js/drum-sound/" + kit + '.mp3'

    btnE1.addEventListener('click',()=>{
        audioE1.play();
        btnE1.style.transform = 'scale(.9)'
    })
    window.addEventListener('keydown',(e)=>{
        if(e.key === kit.slice(0,1)){
            audioE1.play();
            btnE1.style.transform = 'scale(.9)'
            setTimeout(() => {
                btnE1.style.transform = 'scale(1)'
            }, 100);
        }
    })
})