const nextImg = (secondId,firstId) =>{
    const secondImg = document.getElementById(secondId);
    const firstImg = document.getElementById(firstId);
    
    // console.log(secondImg,firstImg)
    secondImg.style.display = 'block';
    firstImg.style.display = 'none';
}

const prevImg = (firstId,secondId) =>{
    const secondImg = document.getElementById(secondId);
    const firstImg = document.getElementById(firstId);
    
    secondImg.style.display = 'none';
    firstImg.style.display = 'block';
}
