const preview = document.querySelector('.preview-box'),
    next = document.querySelector('.fa-chevron-right'),
    prev = document.querySelector('.fa-chevron-left'),
    closeBtn = document.querySelector('.fa-times'),
    imgBox = document.querySelector('.img-box img'),
    wrapperImg = document.querySelectorAll('.box img'),
    wrapperEl = document.querySelector('.wrapper'),
    headingEl = document.querySelector('.heading');

wrapperImg.forEach((img, idx) => {
    img.addEventListener('click', (e) => {
        setTimeout(() => {
            preview.classList.add('show');
            wrapperEl.style.pointerEvents = 'none'
            headingEl.innerHTML = `Image ${idx + 1} of ${wrapperImg.length}`
        }, 100)
        imgBox.src = e.target.src
        sliderImg(idx);
    })
})

function sliderImg(index) {
    if (index == '0') {
        prev.style.opacity = '0';
        next.style.opacity = '1'
    } else {
        prev.style.opacity = '1';
    }
    next.addEventListener('click', () => {
        prev.style.opacity = '1'
        prev.style.pointerEvents = 'auto'
        headingEl.innerHTML = `Image ${index + 2} of ${wrapperImg.length}`
        index++
        imgBox.src = wrapperImg[index].src
        if (index >= wrapperImg.length - 1) {
            next.style.opacity = '0'
            next.style.pointerEvents = 'none'
        }
    })
    next.style.opacity = '1'
    next.style.pointerEvents = 'auto'
    prev.style.opacity = '1'
    prev.style.pointerEvents = 'auto'
    prev.addEventListener('click', () => {
        next.style.opacity = '1'
        next.style.pointerEvents = 'auto'
        index--
        headingEl.innerHTML = `Image ${index + 1} of ${wrapperImg.length}`
        imgBox.src = wrapperImg[index].src
        if (index <= 0) {
            prev.style.opacity = '0'
            prev.style.pointerEvents = 'none'
        }
    })
}

closeBtn.addEventListener('click', () => {
    preview.classList.remove('show');
    wrapperEl.style.pointerEvents = 'auto'
})

