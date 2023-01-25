const downloadBtn = document.querySelector('button'),
progressArea = document.querySelector('.progress'),
progressBar = document.querySelector('.progress-bar');

let width = 0;
downloadBtn.addEventListener('click',()=>{
    downloadBtn.classList.add('active');
    progressArea.classList.add('active');
    let timer = setInterval(()=>{
        if(width == 400){
            clearInterval(timer)
            downloadBtn.classList.remove('active');
            progressArea.classList.remove('active');
            downloadBtn.innerHTML = `<i class='fa fa-check-circle'></i> Completed`
        }
        width += 5;
        progressBar.style.width = `${width}px`
    },50)
})