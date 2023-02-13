const amountInput = document.querySelector('.amount'),
rateInput = document.querySelector('.rate'),
timeInput =document.querySelector('#timeInput'),
timeMonthYear = document.querySelector('select'),
calculateBtn = document.querySelector('button'),
principalAmount = document.querySelector('.principal'),
intrestAmount = document.querySelector('.intrest'),
totalAmount = document.querySelector('.total');

const calculateIntrest = () =>{
    let principal = parseInt(amountInput.value)
    let rate = parseInt(rateInput.value)
    let time = parseInt(timeInput.value)
    let selectedTime = timeMonthYear.value;
    if(selectedTime == 'month'){
        time = (time / 12).toFixed(2)
    }else{
        time = time
    }

    let intrest = ((principal * rate * time) / 100).toFixed(2)
    principalAmount.innerHTML = "$" + principal
    intrestAmount.innerHTML = "$" + intrest
    totalAmount.innerHTML = "$" + (parseInt(principal) + parseInt(intrest))
}

calculateBtn.addEventListener('click',calculateIntrest)