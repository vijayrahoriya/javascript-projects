const kiloInput = document.querySelector('.kilo'),
poundInput = document.querySelector('.pound'),
ounceInput = document.querySelector('.ounce');

const convertFromKg  = () =>{
    let value = kiloInput.value;
    poundInput.value =( value * 2.205).toFixed(2)
    ounceInput.value =( value * 35.274).toFixed(2)
}

const convertFromPound = () =>{
    let value = poundInput.value;
    kiloInput.value = (value / 2.205).toFixed(2)
    ounceInput.value = (value * 16).toFixed(2)
}

const convertFromOunce = () =>{
    let value = ounceInput.value
    kiloInput.value = (value / 35.274).toFixed(2)
    poundInput.value = (value / 16).toFixed(2)
}

kiloInput.addEventListener('input',convertFromKg)
poundInput.addEventListener('input',convertFromPound)
ounceInput.addEventListener('input',convertFromOunce)