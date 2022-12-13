console.log('Welcome to spotify')
// variables 
let songIndex = 0;
const audioE1 = new Audio('songs/1.mp3')
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar')
let gif = document.getElementById('gif')
let songsItem = Array.from(document.getElementsByClassName('songItem'));
let mastersongname = document.getElementById('mastersongname')


let songs = [
    { songName: 'Warriyo-Mortals', filepath: 'songs/1.mp3', coverpath: 'covers/1.jpg' },
    { songName: 'Cielo-Muma huma', filepath: 'songs/2.mp3', coverpath: 'covers/2.jpg' },
    { songName: 'Deaf Kev', filepath: 'songs/3.mp3', coverpath: 'covers/3.jpg' },
    { songName: 'Different Heaven', filepath: 'songs/4.mp3', coverpath: 'covers/4.jpg' },
    { songName: 'Janji Heroes Tonight', filepath: 'songs/5.mp3', coverpath: 'covers/5.jpg' },
    { songName: 'Rabba - Salame e isha', filepath: 'songs/6.mp3', coverpath: 'covers/6.jpg' },
    { songName: 'Sakhiyan - Salame Ishk', filepath: 'songs/7.mp3', coverpath: 'covers/7.jpg' },
    { songName: 'Desi kakakar Salame Ishk', filepath: 'songs/8.mp3', coverpath: 'covers/8.jpg' },
    { songName: 'Brown Salame Ishk', filepath: 'songs/9.mp3', coverpath: 'covers/9.jpg' },
    { songName: 'Yalgar -Salame Ishk', filepath: 'songs/1.mp3', coverpath: 'covers/10.jpg' }
]

songsItem.forEach((element, i) => {
    // console.log(element, i)
    element.getElementsByTagName('img')[0].src = songs[i].coverpath
    element.getElementsByClassName('songName')[0].innerText = songs[i].songName
    // element.getElementsByClassName('timestamp')[0].innerText = songs[i].filepath
})

// handle play pause 
masterPlay.addEventListener('click', () => {
    if (audioE1.paused || audioE1.currentTime <= 0) {
        audioE1.play();
        masterPlay.classList.add(`fa-pause-circle`)
        masterPlay.classList.remove(`fa-play-circle`)
        gif.style.opacity = 1;
    }
    else {
        audioE1.pause();
        masterPlay.classList.remove('fa-pause-circle')
        masterPlay.classList.add('fa-play-circle')
        gif.style.opacity = 0;
    }
})


// listen to events 
audioE1.addEventListener('timeupdate', () => {
    // console.log("timeupdate")
    // update seekbar 
    progress = parseInt((audioE1.currentTime / audioE1.duration) * 100);
    // console.log(progress)
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', () => {
    audioE1.currentTime = (myProgressBar.value * audioE1.duration) / 100
    // console.log(myProgressBar.value)
})

const makeAllPlays = () => {
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
        element.classList.remove('fa-pause-circle')
        element.classList.add('fa-play-circle')
    })
}


Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
    element.addEventListener('click', (e) => {
        makeAllPlays();
        songIndex = parseInt(e.target.id)
        e.target.classList.add('fa-pause-circle')
        e.target.classList.remove('fa-play-circle')
        audioE1.src = `songs/${songIndex + 1}.mp3`;
        mastersongname.innerText = songs[songIndex].songName
        audioE1.currentTime = 0;
        audioE1.play();
        gif.style.opacity = 1
        masterPlay.classList.add('fa-pause-circle')
        masterPlay.classList.remove('fa-play-circle')
        e.target.addEventListener('click', (ele) => {
            audioE1.pause();
            progress = parseInt((audioE1.currentTime / audioE1.duration) * 100);
            // console.log(progress)
            myProgressBar.value = progress;
            ele.target.classList.add('fa-play-circle')
            ele.target.classList.remove('fa-pause-circle')
            masterPlay.classList.add('fa-play-circle')
            masterPlay.classList.remove('fa-pause-circle')
        })
    })
})


// next and preivous buttons 

document.getElementById('next').addEventListener('click', () => {
    if (songIndex >= 9) {
        songIndex = 0;
    }
    else {
        songIndex += 1;
    }
    audioE1.src = `songs/${songIndex + 1}.mp3`;
    mastersongname.innerText = songs[songIndex].songName
    audioE1.currentTime = 0;
    audioE1.play();
    masterPlay.classList.add('fa-pause-circle')
    masterPlay.classList.remove('fa-play-circle')
})
document.getElementById('previous').addEventListener('click', () => {
    if (songIndex <= 0) {
        songIndex = 0;
    }
    else {
        songIndex -= 1;
    }
    audioE1.src = `songs/${songIndex + 1}.mp3`;
    mastersongname.innerText = songs[songIndex].songName
    audioE1.currentTime = 0;
    audioE1.play();
    masterPlay.classList.add('fa-pause-circle')
    masterPlay.classList.remove('fa-play-circle')
})