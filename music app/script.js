const play = document.querySelector('#play'),
imgEl = document.querySelector('img'),
next = document.querySelector('#next'),
prev = document.querySelector('#prev'),
titleEl = document.querySelector('#title'),
artistEl = document.querySelector('#artist'),
music = document.querySelector('audio');

// for progress bar 
let progressEl = document.querySelector('#progress');
let current_timeEl = document.querySelector('.current_time')
let durationEl = document.querySelector('.duration');
let progress_containerEl = document.querySelector('.progress_container');

let isPlaying = false;

const playMusic = () =>{
    isPlaying = true;
    play.classList.replace('fa-play','fa-pause');
    music.play();
    imgEl.classList.add('anime');
}

const pauseMusic = () =>{
    isPlaying = false;
    play.classList.replace('fa-pause','fa-play');
    music.pause();
    imgEl.classList.remove('anime');
}

play.addEventListener('click',()=>{
    isPlaying ? pauseMusic()  : playMusic();
})

let songs = [
    {
        title : "bazigar",
        artist: "Umran",
        cover : "./1.jpg",
        audio : "songs/10.mp3"
    },
    {
        title : "dragon",
        artist: "enemy",
        cover : "./2.jpg",
        audio : "songs/2.mp3"
    },
    {
        title : "yalgar",
        artist: "carry",
        cover : "./3.jpg",
        audio : "songs/3.mp3"
    },
    {
        title : "unstoppable",
        artist: "sania",
        cover : "./4.jpg",
        audio : "songs/4.mp3"
    },
    {
        title : "let me love you",
        artist: "justin",
        cover : "./5.jpg",
        audio : "songs/5.mp3"
    }
]

console.log(songs[0].audio)

let Index = 0;
const changeSong = (songs) =>{
    Index == songs.length -1 ? Index = 0 : Index++;
    console.log(Index)
    imgEl.src = songs[Index].cover;
    music.src = songs[Index].audio;
    titleEl.innerHTML = songs[Index].title;
    artistEl.innerHTML = songs[Index].artist;
    playMusic();
}

const lastSong = (songs) =>{
    Index <= songs.length -1 ? Index-- : Index= 0;
    imgEl.src = songs[Index].cover;
    music.src = songs[Index].audio;
    titleEl.innerHTML = songs[Index].title;
    artistEl.innerHTML = songs[Index].artist;
    playMusic();
}

// progress bar starts from here 
music.addEventListener('timeupdate',(e)=>{
    // console.log(e);
    const {currentTime, duration} = e.srcElement;
    // console.log(currentTime, duration)
    let progress = (currentTime / duration ) * 100
    // console.log(progress)
    progressEl.style.width = `${progress}%`;
    let min_time = Math.floor(duration / 60);
    let sec_time = Math.floor(duration % 60);
    if(duration){
        durationEl.innerHTML = `${min_time}:${sec_time}`
    }
    // console.log(min_time, sec_time)
    let cuntMin = Math.floor(currentTime / 60);
    let cuntSec = Math.floor(currentTime % 60);
    current_timeEl.innerHTML = `${cuntMin}:${cuntSec}`;
    if(cuntSec < 10){
        current_timeEl.innerText = `${cuntMin}:0${cuntSec}`
    }

    // for body background color change 

    let char = "0123456789abcdef";
    let random = "";
    for(let i = 0;i<6; i++){
        let randomNumber = char[Math.floor(Math.random() * char.length)];
        random += randomNumber
    }
    document.querySelector('.music_box').style.background = `#${random}`
    // document.querySelector('.main_container').style.background = `#${random}`
})

progress_containerEl.addEventListener('click',(e)=>{
    // console.log(e);
    const {duration} = music;
    let progressBar = (e.offsetX / e.srcElement.clientWidth) * duration;
    // console.log(duration)
    // console.log(progressBar)
    music.currentTime = progressBar;

})

// when music duration ended 
music.addEventListener('ended',()=>{
    changeSong(songs)
})

next.addEventListener('click',()=>{
    changeSong(songs)
})

prev.addEventListener('click',()=>{
    lastSong(songs)
})
