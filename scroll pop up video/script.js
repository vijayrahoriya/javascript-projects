const videoEl = document.querySelector('video')
window.onscroll = function(){
    window.scrollY > 70 ? videoEl.classList.add('popout') : videoEl.classList.remove('popout')
}