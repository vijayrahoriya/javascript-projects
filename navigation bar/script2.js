const scrolltop = ()=>{
    window.scroll({
        top: 0,
        behavior: "smooth",
    });
};

document.getElementById('scroll').onclick = scrolltop;