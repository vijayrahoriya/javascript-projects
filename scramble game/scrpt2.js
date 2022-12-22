const checkBtn = document.querySelector('#check'),
refreshBtn = document.querySelector('#refresh'),
wordEl = document.querySelector('h2'),
inputEl = document.querySelector('input'),
timeLeft = document.querySelector('.time')

let words = ["Maldiv","Brunai","India","SriLanka","Pakistan","Afganishthan","Nepal","Bhutan","Bangladesh","Myanmar","Thailand","Laos","Cambodia","Viytnam","Malesiya","Singapur","Indonesia","Philipins","Kajakisthan","Kirgisthan","China","Mangolia","Japan","Thajkisthan","Turkmenisthan","Ujbekisthan","Turkey","Saipers","Seria","Labnan","Jordan","Egypt","Israil","Philisthin","Saudi Arb","Yaman","Oman","UAE","Katar","Bahrin","Kuwait","Iran","Irak","Jorgiya","Armenia","Ajarbejan","Taiwan","Rusia"];

const initGame = ()=>{
    let randomObj = words[Math.floor(Math.random() * words.length)];
    let wordArr = randomObj.split("");
    // console.log(wordArr)
    // for scrambling words 
    for(let i = wordArr.length - 1; i>0; i--){
        let j = Math.floor(Math.random() * (i + 1));
        // shuffling and swiping wordArr letter randomly 
        [wordArr[i],wordArr[j]] = [wordArr[j],wordArr[i]]
        // console.log(wordArr[i],wordArr[j])
    }
    // console.log(wordArr,randomObj)
    wordEl.innerHTML = wordArr.join("");
    inputEl.value = ""
}

initGame();

const checkWord = ()=>{
    if(inputEl.value === "") return;
    else if(inputEl.value = wordEl.innerHTML){
      wordEl.innerHTML = "Yahoo! correct 👌👌" 
      inputEl.value =""
    }else{
        wordEl.innerHTML = "Ooo😒😒 Uncorrect!! ";
        inputEl.value =""
    }

}

let time = new Date(2022, 0, 1,12,33,30,567).getSeconds();
const timer = () =>{
    if(time == 0){
        time = 0;
        clearInterval(inter)
        wordEl.innerHTML = "Ooo😒😒 Timeover!! ";
        inputEl.value =""
    }
    else{
        timeLeft.innerHTML = time;
        time--
    }
}
let inter = setInterval(timer, 1000 )

refreshBtn.addEventListener('click',()=>{
    time = 30
    inter = setInterval(timer, 1000)
    initGame();
});
checkBtn.addEventListener('click',()=>{
    clearInterval(inter)
    checkWord();
})