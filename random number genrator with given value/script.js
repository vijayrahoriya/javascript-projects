const minInput = document.querySelectorAll('input')[0],
MaxInput = document.querySelectorAll('input')[1],
genrateBtn = document.querySelector('button'),
result = document.querySelector('.number');

genrateBtn.addEventListener('click',()=>{
    let minValue = parseInt(minInput.value)
    let maxValue = parseInt(MaxInput.value)

    if(minValue > maxValue){
        minValue = maxValue + minValue
        maxValue = minValue - maxValue
        minValue = minValue - maxValue
        minInput.value = minValue
        MaxInput.value = maxValue
    }
    let randomNumber = Math.floor(Math.random() * MaxInput.value)
    console.log(randomNumber)
    result.innerHTML = randomNumber
})