const btnEl = document.querySelector('button'),
inputEl = document.querySelector('input'),
spanEl = document.querySelector('h5 span');
resultEl = document.querySelector('h5')
let filterInput;

btnEl.addEventListener('click',()=>{
    if(!filterInput) return;
    let reverseInput = filterInput.split("").reverse().join("");
    // console.log(reverseInput)
    resultEl.style.display = 'block'
    if(filterInput != reverseInput){
        return resultEl.innerHTML = `No, <span>${filterInput}</span> isn't a palindrome`
    }else{
        return resultEl.innerHTML = `Yes, <span>${filterInput}</span> is a palindrome`
    }
})

inputEl.addEventListener('keyup',()=>{
    //revmoving spaces & all special charcters from entered value
    filterInput = inputEl.value.toLowerCase().replace(/[^A-Z0-9]/ig, "")
    resultEl.style.display = 'none'
})
