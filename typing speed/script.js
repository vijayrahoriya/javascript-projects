const startBtn = document.querySelector('.start'),
myWords = document.querySelector('textarea'),
msg = document.querySelector('#words');
let startTime,endTime;

const setWords = ["My name is Vijay Prajapati and I am a Begginer in web development","I am practicing javascript now","If you want to work with me please contact with me and we can work together","Now I am making this app for reading typing speed","You can also create your own app by changing som e code in this"];

const playGame = () =>{
    let randomText = setWords[Math.floor(Math.random() * setWords.length)];
    msg.innerText = randomText;
    let date = new Date();
    startTime = date.getTime();
    startBtn.innerText = "Done"
}

const endGame = () =>{
    let date = new Date();
    endTime = date.getTime();
    let totalTime = ((endTime - startTime)/1000) //I want to show time in seconds that's why we devided by 1000;
    // console.log(totalTime)
    let totalWords = myWords.value;
    let wordCount = wordCounter(totalWords);

    let speed = Math.floor((wordCount / totalTime) * 60); // to get speed
    let finalMsg = " You Typed total at " + speed + " words per minutes";

    finalMsg += compareWords(msg.innerText, totalWords);

    msg.innerText = finalMsg;

    myWords.value = ""

}

const compareWords = (str1,str2)=>{
    let words1 = str1.split(" ");
    let word2 = str2.split(" ");
    console.log(words1,word2)
    let cnt = 0;

    words1.forEach((item,index)=>{
        if(item == word2[index]){
            cnt++;
        }
    })
        
    let errorWords = (words1.length - cnt);
    return (" " + cnt + " correct out of " + words1.length + " words and the total number of error are " + errorWords + ".");
}

const wordCounter = (str) =>{
    let response = str.split(" ").length
    // console.log("total words are " ,response)
    return response;
}

startBtn.addEventListener('click',function(){
    if(this.innerText == 'Start'){
        myWords.disabled = false;
        playGame();
    }else{
        myWords.disabled = true;
        startBtn.innerText = 'Start'
        endGame();
    }
})
