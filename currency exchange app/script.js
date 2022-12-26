const droplist = document.querySelectorAll('.drop-list select'),
    fromCurrency = document.querySelector('.from select'),
    ToCurrency = document.querySelector('.to select'),
    exchangerateEl = document.querySelector('.exchange-rate'),
    exchangeBtn = document.querySelector('.icon i'),
    getBtn = document.querySelector('button');
let apikey = '4ae376655e4f93bd243d11f0'

for(let i=0; i< droplist.length; i++){
    for(currency_code in country_list){
        let selected;
        if(i==0){
            selected = currency_code == 'USD'? 'selected' : ''
        }else if(i==1){
            selected = currency_code == 'INR'? 'selected' : ''
        }
        let optionTag = `<option value="${currency_code}" ${selected}>${currency_code}</option>`;
        droplist[i].insertAdjacentHTML('beforeend',optionTag)
    }
    droplist[i].addEventListener('change',(e)=>{
        loadFlag(e.target);
    })
}

function loadFlag(element){
    console.log(element)
    for(code in country_list){
        if(code == element.value){
            let imgTag = element.parentElement.querySelector('img');
            imgTag.src = `https://flagcdn.com/48x36/${country_list[code].toLowerCase()}.png`
        }
    }
}

exchangeBtn.addEventListener('click',()=>{
    let tempTag = fromCurrency.value;
    fromCurrency.value = ToCurrency.value;
    ToCurrency.value = tempTag
    loadFlag(fromCurrency)
    loadFlag(ToCurrency)
    getExvhangeRate()
})

window.addEventListener('load',()=>{
    getExvhangeRate(0)
})

getBtn.addEventListener('click', e=>{
    e.preventDefault();
    getExvhangeRate();
})

function getExvhangeRate(){
    const amount = document.querySelector('.amount input');
    const amountVal = amount.value;
    if(amountVal == "" || amountVal == '0'){
        amount.value = '1'
        amountVal = '1';
    }
    exchangerateEl.innerHTML = `Getting exchange rate...`
    let url = ` https://v6.exchangerate-api.com/v6/${apikey}/latest/${fromCurrency.value}`;
    fetch(url).then(response => response.json()).then(data=>{
        let exchangerate = data.conversion_rates[ToCurrency.value]
        // console.log(exchangerate)
        let totalExchangeRate = (amountVal * exchangerate).toFixed(2)
        exchangerateEl.innerHTML = `${amountVal} ${fromCurrency.value} = ${totalExchangeRate} ${ToCurrency.value}`
}).catch(()=>{
    exchangerateEl.innerHTML = `Something went wrong`
})
}
