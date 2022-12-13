const arrowEl = document.querySelector('.fa-chevron-down');
const menuEl = document.querySelector(".menu")
const paraEl = document.getElementById('para');
const listBox = document.querySelector('.lists');
const listEl = document.querySelectorAll('li');

menuEl.addEventListener('click', () => {
    arrowEl.classList.toggle('fa-chevron-down');
    arrowEl.classList.toggle('fa-chevron-up')
    listBox.classList.toggle('active');
})

listEl.forEach((item) => {
    item.addEventListener('click', (e) => {
        arrowEl.classList.toggle('fa-chevron-down');
        paraEl.innerHTML = item.innerHTML;
        arrowEl.classList.toggle('fa-chevron-up')
        listBox.classList.toggle('active')
    })
})

