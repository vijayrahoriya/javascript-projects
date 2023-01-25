const billInput = document.querySelector('input[type="number"]'),
    tipInput = document.querySelector('.tip'),
    peopleInput = document.querySelector('.people'),
    tipAmount = document.querySelector('.tipamount'),
    totalAmount = document.querySelector('.totalamount'),
    tipRange = document.querySelector('.tiprange'),
    peopleRange = document.querySelector('.peoplerange'),
    perPersonTip = document.querySelector('.tipperperson'),
    totalPerson = document.querySelector('.totalperson')

let tipInputVal = 15;
let peopleInputVal = 1;
let totalAmountVal = 0;
let perPersonTipVal = 0;
let totalperpersonVal = 0;
let tip;

const calculateTip = ()=>{
        let inputVal = parseInt(billInput.value)
        tip = (inputVal * tipInputVal) / 100
        totalAmountVal = tip + inputVal
        tipAmount.textContent = "$" + tip
        totalAmount.textContent = "$" + totalAmountVal
        perPersonTipVal = (tip / peopleInputVal).toFixed(2);
        totalperpersonVal = (totalAmountVal / peopleInputVal).toFixed(2)
        perPersonTip.textContent = "$" + perPersonTipVal 
        totalPerson.textContent = "$" + totalperpersonVal 
}

window.addEventListener('keydown',(e)=>{
    e.key == 'Enter' ? calculateTip() : 1
})

tipInput.addEventListener('input', () => {
    tipInputVal = parseInt(tipInput.value);
    console.log(tipInputVal)
    tipRange.textContent = tipInputVal + "%"
    calculateTip()
})

peopleInput.addEventListener('input', () => {
    peopleInputVal = parseInt(peopleInput.value)
    peopleRange.textContent = peopleInputVal
    calculateTip();
})