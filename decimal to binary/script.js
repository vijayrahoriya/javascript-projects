const decimalInput = document.querySelector('#decimal'),
binaryInput = document.querySelector('#binary'),
erromsg = document.querySelector('.error')

decimalInput.addEventListener('input',()=>{
    let decimal = parseInt(decimalInput.value)
    binaryInput.value = decimal.toString(2)
})

binaryInput.addEventListener('input',()=>{
    let binary = binaryInput.value
    if(binValidator(binary)){
        decimalInput.value = parseInt(binary, 2);
        erromsg.innerHTML = ""
    }else{
        erromsg.innerHTML = 'Please enter a valid binary number.'
    }

    function binValidator(num){
        for(let i=0; i<num.length; i++){
            if(num[i] != '0' && num[i] != '1'){
                return false;
            }
        }
        return true;
    }
})
