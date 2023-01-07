const emoji = document.querySelectorAll('.emoji i'),
progress = document.querySelector('.progress-bar'),
thumb = document.querySelector('.thumb'),
input= document.querySelector('input');

input.oninput = ()=>{
    let value = input.value
    thumb.style.left = value + '%'
    progress.style.width = value + '%'
    let color; 
    if(value < 20){
        emoji.forEach(icon=>{
            icon.style.transform = 'translateY(0px)'
            document.querySelector('body').style.background = "red"
        })
    }
    if(value >= 20){
        emoji.forEach(icon=>{
            icon.style.transform = 'translateY(-100px)'
            document.querySelector('body').style.background = "orchid"
        })
    }
    if(value >= 40){
        emoji.forEach(icon=>{
            icon.style.transform = 'translateY(-200px)'
            color = icon.getAttribute('data-color')
            document.querySelector('body').style.background = "orange"
        })
    }
    if(value >= 60){
        emoji.forEach(icon=>{
            icon.style.transform = 'translateY(-300px)'
            color = icon.getAttribute('data-color')
            document.querySelector('body').style.background = "orangered"
        })
    }
    if(value >= 80){
        emoji.forEach(icon=>{
            icon.style.transform = 'translateY(-400px)'
            color = icon.getAttribute('data-color')
            document.querySelector('body').style.background = "pink"
        })
    }
    // console.log(value)
}

