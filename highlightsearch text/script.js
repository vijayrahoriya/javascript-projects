const input = document.querySelector('input'),
btn = document.querySelector('button'),
text = document.querySelector('p');

btn.addEventListener('click',()=>{
    let val = input.value;
     val = val.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");
     let pattern = new RegExp(`${val}`,'gi');
     text.innerHTML = text.textContent.replace(pattern,match => `<mark>${match}</mark>`)
})