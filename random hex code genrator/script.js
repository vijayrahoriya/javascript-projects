const genrateBtn = document.querySelector('.genrate'),
copyBtn = document.querySelector('.copy'),
colorText = document.querySelector('.color'),
header = document.querySelector('header');

genrateBtn.addEventListener('click',()=>{
    header.classList.add('active')
    let chars = '1234567890ABCDEFabcdef'
    let randomchar = "";
    for(let i=0;i<6;i++){
        let random = chars[Math.floor(Math.random()*chars.length)]
        randomchar += random;
    }
    setTimeout(() => {
        header.classList.remove('active')
    }, 600);
    header.style.setProperty('--bgColor',"#"+randomchar)
    colorText.innerHTML = "#"+ randomchar;
})

copyBtn.addEventListener('click',()=>{
    navigator.clipboard.writeText(colorText.textContent)
    copyBtn.innerHTML = 'Copied'
    setTimeout(() => {
        copyBtn.innerHTML = 'Copy'
    }, 1500);
})