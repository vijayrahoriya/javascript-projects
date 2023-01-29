const wrapper = document.querySelector('.wrapper'),
declineBtn = document.querySelectorAll('button')[1],
acceptBtn =document.querySelectorAll('button')[0];

window.onload = () =>{
    wrapper.classList.add('active')
}

declineBtn.addEventListener('click',()=>{
    wrapper.classList.remove('active')
})

acceptBtn.addEventListener('click',()=>{
    // setCookies for one month 60 = 1 min, 60 = 1 hour, 24 = 1 day, 30 = 30 days
    document.cookie = "cookieBy= vijay; max-age=" + 60 * 60 * 24 * 30
    wrapper.classList.remove('active')
})