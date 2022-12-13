const ham = document.getElementById('ham');
const nav = document.querySelector('.navbar ul');
const time = document.querySelector('.time');
const hour = document.getElementById('hour')
const minute = document.getElementById('minute')
const second = document.getElementById('second');

setInterval(() => {
    const d = new Date();
    hour.innerHTML = d.getHours();
    minute.innerHTML = d.getMinutes();
    second.innerHTML = d.getSeconds();
}, 1000)

ham.addEventListener('click', () => {
    nav.style.right = "10%"
    ham.classList.remove('fa-bars')
    time.style.display = 'block';
})

time.addEventListener('click', () => {
    nav.style.right = '-110%';
    ham.classList.add('fa-bars');
    time.style.display = 'none';
})




