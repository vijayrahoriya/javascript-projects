const hideBox = document.querySelector('#hideBox'),
coupon = document.querySelector('#coupon'),
applyBtn  = document.querySelector('#apply'),
couponInput = document.querySelector('#couponCode'),
codeEl = document.querySelector('#code'),
totalA = document.querySelector('#totalAmout');


coupon.addEventListener('click',()=>{
    hideBox.classList.toggle('active');
})

const decrease = (textId,amoutId) =>{
    const inputVal = document.getElementById(textId);
    const amout = document.getElementById(amoutId),
    productAmout = document.getElementById('product'),
    shipping = document.getElementById('shipping'),
    total = document.getElementById('totalAmout');
    if(inputVal.value <= 0){
        inputVal.value = 0;
        alert('Quantity can not be negative')
    }else{
        inputVal.value = parseInt(inputVal.value)-1;
        inputVal.style.background = '#fff';
        inputVal.style.color = '#000';
        amout.innerHTML = parseInt(amout.innerHTML) - 15
        productAmout.innerHTML = amout.innerHTML;
        total.innerHTML = parseInt(productAmout.innerHTML) + parseInt(shipping.innerHTML)
    }
}

const increase = (textId,amoutId) =>{
    const inputVal = document.getElementById(textId);
    const amout = document.getElementById(amoutId),
    productAmout = document.getElementById('product'),
    shipping = document.getElementById('shipping'),
    total = document.getElementById('totalAmout');
    console.log(inputVal)
    if(inputVal.value >= 5){
        inputVal.value = 5;
        alert('Maximum Quantity can be 5')
        inputVal.style.background = 'red';
        inputVal.style.color = '#fff'
    }else{
        inputVal.value = parseInt(inputVal.value)+1;
        amout.innerHTML = parseInt(amout.innerHTML) + 15
        productAmout.innerHTML = amout.innerHTML
        total.innerHTML = parseInt(productAmout.innerHTML) + parseInt(shipping.innerHTML)
    }
}

applyBtn.addEventListener('click',()=>{
    if(couponInput.value.toUpperCase() === codeEl.innerHTML.toUpperCase()){
        codeEl.innerHTML = "Valid"
        codeEl.style.color = 'green'
        totalA.innerHTML = (parseInt(totalA.innerHTML) * 50) / 100
    }else{
        codeEl.innerHTML = "Invalid"
        codeEl.style.color = 'red'
    }
})