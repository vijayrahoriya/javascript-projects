const words = ["Apple","Pencil","Pen","chair","Banana","Gun","Helmet","Tub","Trophy","Cookied","Donate","Eye","Fish","Zip","Game","Juice","Orange","Fan","Ice","Ash"]
words.sort();
const input = document.querySelector('input'),
suggestion = document.querySelector('span');

// enter key code 
let EnterKey = 13;

window.onload = () =>{
    input.value = ""
    clearSuggestion();
}

const clearSuggestion = () =>{
    suggestion.innerHTML = ""
}

const caseCheck = (word) =>{
    word = word.split('');
    let inp = input.value;
    for(let i in inp){
        if(inp[i] == word[i]){
            continue
        }
        else if(inp[i].toUpperCase() == word[i]){
            word.splice(i,1,word[i].toLowerCase())
        }else{
            word.splice(i,1,word[i].toUpperCase())
        }
    }
    return word.join("");
}

input.addEventListener('input',()=>{
    clearSuggestion();
    let regex = new RegExp('^' + input.value , 'i');
    for(let i in words){
        if(regex.test(words[i]) && input.value !== ''){
            words[i] = caseCheck(words[i]);
            suggestion.innerHTML = words[i]
            break;
        }
    }
})

// complet predictive word on enter 
input.addEventListener('keydown',(e)=>{
    if(e.keyCode == EnterKey && suggestion.innerHTML != ""){
        e.preventDefault();
        input.value = suggestion.innerText;
        clearSuggestion();
    }
})