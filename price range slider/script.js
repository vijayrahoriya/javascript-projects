const rangeInput= document.querySelectorAll(".range-input input"),
priceInput = document.querySelectorAll('.price-input input'),
progress = document.querySelector('.slider .progress');

let pricegap = 1000;
priceInput.forEach(input =>{
    input.addEventListener('input',(e)=>{
        //getting two ranges values and parsing them to number
        let minVal = parseInt(priceInput[0].value),
        maxVal = parseInt(priceInput[1].value)

        if((maxVal - minVal >= pricegap) && maxVal <= 10000){
            if(e.target.className === 'input-min'){
                rangeInput[0].value = minVal;
                progress.style.left = (minVal / rangeInput[0].max) * 100 + "%"
            }else{
                rangeInput[1].value = maxVal
                progress.style.right = 100 - (maxVal / rangeInput[1].max) * 100 + "%"
            }
        }
    })

})
rangeInput.forEach(input =>{
    input.addEventListener('input',(e)=>{
        //getting two ranges values and parsing them to number
        let minVal = parseInt(rangeInput[0].value),
        maxVal = parseInt(rangeInput[1].value)

        if(maxVal - minVal < pricegap){
            if(e.target.className === 'range-min'){
                rangeInput[0].value = maxVal - pricegap
            }else{
                rangeInput[1].value = minVal + pricegap
            }
        }else{
            priceInput[0].value = minVal;
            priceInput[1].value = maxVal
            progress.style.left = (minVal / rangeInput[0].max) * 100 + "%"
            progress.style.right = 100 - (maxVal / rangeInput[1].max) * 100 + "%"
        }
    })

})