const wrapper = document.querySelector(".wrapper"),
qrInput = document.querySelector('.form input'),
genrateBtn = document.querySelector('.form button'),
qrImg = document.querySelector('.qr-code img');

genrateBtn.addEventListener('click',()=>{
    let qrvalue = qrInput.value;
    if(!qrvalue) return;
    qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=170x170&data=${qrvalue}`
    wrapper.classList.add('active');
})
