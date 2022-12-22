const startBtn = document.querySelector('#start');
const heading = document.querySelector('#word');
const input = document.querySelector("#userInput")

const words = ["javascript", "python", "c++", "php", "java", "C#", "html", "css", "reactjs", "angular", "swift", "android", "sql"]
let play = false;
let newWord = "";
let sWord = "";

const createWords = ()=>{
    let randomWord = words[Math.floor(Math.random()* words.length)];
    return randomWord;
}

const scrambleWord = (arr)=>{
    for(let i = arr.length -1; i>0; i--){
        let temp = arr[i];
        let j = Math.floor(Math.random()*(i+1))
        arr[i] = arr[j]
        arr[j] = temp ;
        // console.log(temp)
    }
    return arr;
}

startBtn.addEventListener('click',()=>{
    if(!play){
        play = true;
        input.classList.toggle('hidden');
        heading.classList.toggle('hidden')
        startBtn.innerHTML = "Guess"
        newWord = createWords();
        sWord = scrambleWord(newWord.split("")).join("");
        // console.log(sWord)
        heading.innerHTML = `Guess the word : '${sWord}'`
    }
    else{
        if(newWord === input.value){
            heading.innerHTML = `Yahoo!! this is correct👌👌 word`;
            startBtn.innerHTML = "Start Again"
            startBtn.onclick = ()=>{
                window.location.reload();
            }
        }
        else{
            heading.innerHTML = `Ooo!! Incorrect😒😒 please try Again ${sWord}`
        }
    }


})

