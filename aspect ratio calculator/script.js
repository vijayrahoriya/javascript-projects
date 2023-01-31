const ratioInputFirst = document.querySelectorAll('.inputs1 input')[0],
ratioInputSecond = document.querySelectorAll('.inputs1 input')[1],
widthInput = document.querySelectorAll('.inputs input')[0],
heightInput = document.querySelectorAll('.inputs input')[1];

const calculateWidth = ()=>{
    let aspectRatio = ratioInputFirst.value / ratioInputSecond.value;
    widthInput.value = parseFloat((aspectRatio * heightInput.value).toFixed(2))
}

const calculateHeight = () =>{
    let aspectRatio = ratioInputFirst.value / ratioInputSecond.value
    heightInput.value = parseFloat((widthInput.value / aspectRatio).toFixed(2))
}

heightInput.addEventListener('input',calculateWidth)
widthInput.addEventListener('input',calculateHeight)
ratioInputFirst.addEventListener('input',calculateHeight)
ratioInputSecond.addEventListener('input',calculateHeight)