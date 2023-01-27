const skillBox = document.querySelectorAll('.skillsbox'),
    skillInfo = document.querySelectorAll('.skillinfo')

skillBox.forEach(box => {
    box.addEventListener('click', () => {
        box.lastElementChild.classList.toggle('active')
        let icon = box.querySelector('.right i')
        icon.classList.contains('fa-chevron-down') ? icon.classList.replace('fa-chevron-down', 'fa-chevron-up') : icon.classList.replace('fa-chevron-up', 'fa-chevron-down')
    })
})

//navbar script ------------------------------------------------>

const navbar = document.querySelector('.navbar'),
lists = document.querySelectorAll('.navbar li a'),
menuEl = document.querySelector('.menu'),
menuItem = document.querySelector('.navbar .menu-item')


window.addEventListener('scroll', () => {

    if (window.scrollY > 30) {
        navbar.classList.add('active')
    } else {
        navbar.classList.remove('active')
    }
})

lists.forEach(list=>{
    list.addEventListener('click',()=>{
        menuItem.classList.remove('active');
        navbar.querySelectorAll('.active').forEach(active=>{
            active.classList.remove('active')
        })
        list.classList.add('active')
    })
})

menuEl.addEventListener('click',()=>{
    menuItem.classList.add('active');
})

//scrolldown btn script ----------------------------------------------->

const scrollBtn = document.querySelector('.scroll-down');
scrollBtn.addEventListener('click',()=>{
    document.querySelector('.lists li .aboutLink').click()
})


// qualifications section script --------------------------------------->

const qualifications = document.querySelectorAll('.qualification .info span'),
    EducationEl = document.querySelector('.qualification .data'),
    workEl = document.querySelector('.qualification .work')

qualifications.forEach((quali, index) => {
    quali.addEventListener('click', () => {
        document.querySelector('.qualification .info .active').classList.remove('active');
        quali.classList.add('active')
        if (index == 0) {
            workEl.classList.remove('active')
            EducationEl.classList.remove('active');
        }
        if (index == 1) {
            workEl.classList.add('active')
            EducationEl.classList.add('active');
        }
    })
})

// modal script ------------------------------------------------->

const modalBtn = document.querySelectorAll('.services .box a'),
    modal = document.querySelector('.services .modalbox'),
    modalCloseBtn = document.querySelector('.services .modal .fa-times');

modalBtn.forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        document.body.style.pointerEvents = 'none'
        modal.style.pointerEvents = 'auto'
        modal.classList.add('show');
    })
})

modalCloseBtn.addEventListener('click', () => {
    document.body.style.pointerEvents = 'auto'
    modal.classList.remove('show')
})

// slider script ----------------------------------------------->

const sliderEl = document.querySelector('.portfolio .slider')

let slide = 1;

function slideRows() {
    sliderEl.style.transform = `translateX(-${(slide - 1) * 32}%)`
}

let timer = setInterval(() => {
    if (slide == 3) {
        slide = 0
    }
    slide++
    slideRows();
}, 3000)


// for dark mode ------------------------------------------------------->

const modeEl = document.querySelector('.mode a i');

modeEl.addEventListener('click',(e)=>{
    e.preventDefault();
    document.body.classList.toggle('active')
    if(modeEl.classList.contains('fa-moon')){
        modeEl.classList.replace('fa-moon','fa-sun')
    }else{
        modeEl.classList.replace('fa-sun','fa-moon')
    }
})
