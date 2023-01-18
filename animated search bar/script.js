const bars = document.querySelector('.bar i'),
barEl = document.querySelector('.bar'),
lists = document.querySelector('.lists');

bars.addEventListener('click',()=>{
    barEl.classList.contains('active') ? barEl.classList.remove('active') : barEl.classList.add('active')
    bars.classList.contains('fa-bars') ? bars.classList.replace('fa-bars','fa-times') : bars.classList.replace('fa-times','fa-bars')
    lists.classList.contains('active') ? lists.classList.remove('active') : lists.classList.add('active')
})