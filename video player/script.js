const container = document.querySelector('.container'),
mainVideo = container.querySelector('video'),
playBtn = container.querySelector('.play-pause i'),
progreeBar = container.querySelector('.progress-bar'),
forwardBtn = container.querySelector('.skip-forward i'),
backwardBtn = container.querySelector('.skip-backward i'),
volumeBtn = container.querySelector(".volume i"),
volumeSlider = container.querySelector('.options input'),
playBackBtn = container.querySelector('.playback-speed i'),
playbackOptions = container.querySelector('.speed-options'),
pictureEl = container.querySelector('.playback-img i'),
fullScreenEl = container.querySelector('.fullscreen i'),
videoTimeline = container.querySelector('.video-timeline'),
currVideoTime = container.querySelector('.current-time'),
videoDuration = container.querySelector('.video-duration')


playBtn.addEventListener('click',()=>{
    mainVideo.paused ? mainVideo.play() : mainVideo.pause();
})

mainVideo.addEventListener('play',()=>{
    playBtn.classList.replace('fa-play','fa-pause')
})

mainVideo.addEventListener('pause',()=>{
    playBtn.classList.replace('fa-pause','fa-play')
})

const formatTime = time  =>{
    //getting seconds , minutes , hours
    let seconds = Math.floor(time % 60);
    let minutes = Math.floor(time / 60) % 60;
    let hours = Math.floor(time / 3600)

    seconds = seconds < 10 ? `0${seconds}` : seconds;
    minutes = minutes < 10 ? `0${minutes}` : minutes;
    hours = hours < 10 ? `0${hours}` : hours;

    if(hours == 0){
        return `${minutes} : ${seconds}`
    }
    return `${hours} : ${minutes} : ${seconds}`
}

mainVideo.addEventListener('loadeddata',e=>{
    videoDuration.innerHTML = formatTime(e.target.duration)
    
})

mainVideo.addEventListener('timeupdate',(e)=>{
    let {currentTime,duration} = e.target;
    let percent = (currentTime / duration) * 100
    progreeBar.style.width = `${percent}%`
    currVideoTime.innerText = formatTime(currentTime)
})

forwardBtn.addEventListener('click',(e)=>{
    mainVideo.currentTime += 5;
})

backwardBtn.addEventListener('click',(e)=>{
    mainVideo.currentTime -= 5;
})

volumeBtn.addEventListener('click',()=>{
    if(!volumeBtn.classList.contains('fa-volume-high')){
        mainVideo.volume = 0.5 ;
        volumeBtn.classList.replace('fa-volume-xmark','fa-volume-high')
    }
    else{
        mainVideo.volume = 0;
        volumeBtn.classList.replace('fa-volume-high','fa-volume-xmark')
    }
    volumeSlider.value = mainVideo.volume
})

volumeSlider.addEventListener('input',(e)=>{
    mainVideo.volume = e.target.value
    if(e.target.value == 0){
        volumeBtn.classList.replace('fa-volume-high','fa-volume-xmark')
    }else{
        volumeBtn.classList.replace('fa-volume-xmark','fa-volume-high')
    }
})

playBackBtn.addEventListener('click',()=>{
    playbackOptions.classList.toggle('show')
})

document.addEventListener('click',e=>{
    if(e.target.tagName !== 'I' || e.target.className !== 'fa-regular fa-circle-stop'){
        playbackOptions.classList.add('show')
    }
})

playbackOptions.querySelectorAll('li').forEach(option=>{
    option.addEventListener('click',(e)=>{
        mainVideo.playbackRate = e.target.dataset.speed
        playbackOptions.querySelector('.active').classList.remove('active')
        option.classList.add('active')
    })
})

pictureEl.addEventListener('click',(e)=>{
    mainVideo.requestPictureInPicture(); //changing video mode to picture in picture
})

fullScreenEl.addEventListener('click',()=>{
    // mainVideo.requestFullscreen();
    container.classList.toggle('fullscreenplay')
    if(document.fullscreenElement){//if video is in already fullscreen mode
        fullScreenEl.classList.replace('fa-compress','fa-expand');
        return document.exitFullscreen();
    }
    fullScreenEl.classList.replace('fa-expand','fa-compress');
    container.requestFullscreen();//go to fullscreen mode
})

videoTimeline.addEventListener('click',(e)=>{
    let timeLineWidth = videoTimeline.clientWidth;//getting timelinewidth
    mainVideo.currentTime = (e.offsetX / timeLineWidth) * mainVideo.duration //updating video currentTime
    console.log((e.offsetX / timeLineWidth) * mainVideo.duration)
})

const draggblebar = (e)=>{
    let timeLineWidth = videoTimeline.clientWidth;//getting timelinewidth
    mainVideo.currentTime = (e.offsetX / timeLineWidth) * mainVideo.duration //updating video currentTime
    progreeBar.style.width = `${e.offsetX}px` //setting offsetx value as progressbar width
    currVideoTime.innerHTML = formatTime(mainVideo.currentTime);//passing video current time as currentVideoTime innerHTML
}

videoTimeline.addEventListener('mousedown',()=>{
    videoTimeline.addEventListener('mousemove',draggblebar)
})

document.addEventListener('mouseup',()=>{
    videoTimeline.removeEventListener('mousemove',draggblebar)
})

videoTimeline.addEventListener('mousemove',e=>{
    const progressTime = videoTimeline.querySelector('span');
    let offsetX = e.offsetX;
    progressTime.style.left = `${offsetX}px`
    let timelinewidth = videoTimeline.clientWidth;
    let percent = (e.offsetX / timelinewidth) * mainVideo.duration
    progressTime.innerText = formatTime(percent)
})

let timer;
const hideControls = ()=>{
    timer = setTimeout(() => {
        container.classList.remove('show-controls')
    }, 3000);

}
hideControls();

container.addEventListener('mousemove',()=>{
    clearTimeout(timer)
    container.classList.add('show-controls')
    hideControls();
})