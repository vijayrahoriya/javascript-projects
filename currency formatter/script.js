const btn = document.querySelector('button');

let ruppees = document.querySelector('.indian span')
let dollars = document.querySelector('.usa span')
let japaneese = document.querySelector('.japan span')

let formatter1 = new Intl.NumberFormat("en-IN",
{style:"currency",currency:"INR"});

let formatter2 = new Intl.NumberFormat('en-US',
{style:"currency",currency:"USD"});

let formatter3 = new Intl.NumberFormat("ja-JP",
{style:'currency',currency:"JPY"});

btn.addEventListener('click',()=>{
    let amount = document.querySelector('input').value;
    ruppees.innerHTML = formatter1.format(amount)
    dollars.innerHTML = formatter2.format(amount)
    japaneese.innerHTML = formatter3.format(amount)
})