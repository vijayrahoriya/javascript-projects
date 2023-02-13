const textarea = document.querySelector('textarea'),
inputEl = document.querySelector('input'),
searchBtn = document.querySelector('.inputs button'),
reverseBtn = document.querySelector('.reverse'),
palindromeBtn = document.querySelector('.palindrome'),
charCounterBtn = document.querySelector('.counter'),
wordCounterBtn = document.querySelector('.word'),
infoArea = document.querySelector('.info'),
checkEl = document.querySelector('.check');

textarea.addEventListener('input',()=>{
    textarea.value !== '' ? checkEl.classList.add('active') : checkEl.classList.remove('active') 
    if(textarea.value == ''){
        infoArea.innerHTML = 'Press any of the Button to Get Started'
    }
})

reverseBtn.addEventListener('click',()=>{
    let text = textarea.value.split('').reverse().join("")
    infoArea.innerHTML = `The reverse text is: <strong>${text}</strong>`
})

palindromeBtn.addEventListener('click',()=>{
    let text = textarea.value.split('').reverse().join("");
    let palindromeText = textarea.value;
    infoArea.innerHTML = `It is <strong>${palindromeText == text ? 'palindrome' : 'not palindrome'}</strong>`
})

charCounterBtn.addEventListener('click',()=>{
    let text = textarea.value.split('').filter((word)=> word != ' ').length
    infoArea.innerHTML = `Total Characters: <strong>${text}</strong>`
})

wordCounterBtn.addEventListener('click',()=>{
    let text = textarea.value.split(' ').filter((word)=> word != '').length
    infoArea.innerHTML = `Total Characters: <strong>${text}</strong>`
})

searchBtn.addEventListener('click',()=>{
    let text = textarea.value.toUpperCase().split(' ');
    let searchText = inputEl.value.toUpperCase();
    infoArea.innerHTML = `The text <strong>${text.includes(searchText) ? "" : "does not"} contains</strong>`
})