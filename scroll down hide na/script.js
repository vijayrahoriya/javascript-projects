$('nav ul li').click(function(){
    $(this).addClass('active').siblings().removeClass('active')
})

const navbar = document.querySelector('nav');
const scrollPrevious = window.pageYOffset;
window.onscroll = function(){
    let scrollCurrent = window.pageYOffset;
    if(scrollPrevious > scrollCurrent){
        navbar.style.top = 0;
    }else{
        navbar.style.top = '-90px'
    }
}