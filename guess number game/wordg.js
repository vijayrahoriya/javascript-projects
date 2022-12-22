let words = [
    {
        word: "idea",
        Hint: "a thought or suggestion"
    },
    {
        word: "server",
        Hint: "related to computer or system"
    },
    {
        word: "svg",
        Hint: "a vector image format"
    },
    {
        word: "jpeg",
        Hint: "a small image file format"
    },
    {
        word: "search",
        Hint: "act to find something"
    },
    {
        word: "python",
        Hint: "programming language"
    },
    {
        word: "guitar",
        Hint: "a musical instrument"
    },
    {
        word: "aim",
        Hint: "a purpose or intention"
    },
    {
        word: "venus",
        Hint: "planet of our solar system"
    },
    {
        word: "gold",
        Hint: "a yellow precious metal"
    },
]

const inputBox = document.querySelector('.inputs'),
resetBtn = document.querySelector('.reset'),
hintEl = document.querySelector('.hint span'),
typingInput = document.querySelector('.typing-input'),
wrongLetter = document.querySelector('.wrong-letter span'),
guesses = document.querySelector('.guess-left span')

let word,maxGuess, corrects = [],  incorrects = []
const randomWord = ()=>{
    let ranObj = words[Math.floor(Math.random()*words.length)];
    word = ranObj.word;
    let hint = ranObj.Hint;
    hintEl.innerHTML = hint
    maxGuess = 8;  corrects = [],  incorrects = []
    guesses.innerHTML = maxGuess
    wrongLetter.innerText = incorrects  

    // console.log(word)
    let html = "";
    for(let i = 0; i<word.length; i++){
        html += `<input type="text" disabled>`
    }
    inputBox.innerHTML = html;
}

randomWord();

const initGame = (e)=>{
    let key = e.target.value
    // console.log(word)
    // let's validate that user is pressing alphabet key or number key 
    if(key.match(/^[A-Za-z]+$/) && !incorrects.includes(key) && !corrects.includes(key)){
        if(word.includes(key)){ //if user found that word which exist in word
            for(let i = 0; i<word.length; i++){
                if(word[i] === key){
                    corrects.push(key)
                    inputBox.querySelectorAll('input')[i].value = key
                }
            }
        }else{
            incorrects.push(key)
            maxGuess--
        }
        guesses.innerHTML = maxGuess

        wrongLetter.innerText = incorrects  
    }
    typingInput.value =""

    setTimeout(() => {
        if(corrects.length === word.length){
            alert('Congrates you found the word ' + word.toUpperCase())
            randomWord();
        }
    
        else if(maxGuess < 1){ //if user could not found all letters
            alert('Game over! You do not have ramaining guesses')
            for(let i = 0; i<word.length; i++){
                    inputBox.querySelectorAll('input')[i].value = word[i]
            }
        }
    });
}

resetBtn.addEventListener('click',randomWord);
document.addEventListener('keydown',()=>{
    typingInput.focus();
})
typingInput.addEventListener('input',initGame)