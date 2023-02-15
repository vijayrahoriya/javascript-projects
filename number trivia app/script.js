const typedNumber = document.querySelector('input'),
getFactBtn = document.querySelector('.get-fact'),
getRandomFact = document.querySelector('.random'),
factBox = document.querySelector('.fact-box');

let url = 'http://numbersapi.com/';

let getData = (num) =>{
    let finalUrl = url + num
    fetch(finalUrl).then((resp)=> resp.text()).then((data)=>{
        factBox.innerHTML = `<h1>${num}</h1>
        <span>${data}</span>`
        if(!num) {
            factBox.innerHTML = 'Please Enter a number'
            factBox.classList.add('active')
        }
        else if(num >= 0 && num <= 300){
            factBox.classList.add('active')
        }else{
            factBox.classList.add('active')
            factBox.innerHTML = 'Please Enter between 0 to 300'
        }
    })
}

getFactBtn.addEventListener('click',()=>{
    let num = typedNumber.value;
    getData(num)
})

const RandomFact = () =>{
    let randomNum = Math.floor(Math.random() * 301);
    getData(randomNum)
}

getRandomFact.addEventListener('click',RandomFact)
window.onload = RandomFact();