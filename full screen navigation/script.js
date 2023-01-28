const nav = document.querySelector('nav'),
openIcon = document.querySelector('.icons i');

openIcon.addEventListener('click',()=>{
    openIcon.classList.contains('fa-bars') ? openIcon.classList.replace('fa-bars','fa-times') : openIcon.classList.replace('fa-times','fa-bars');
    nav.classList.toggle('active')
})