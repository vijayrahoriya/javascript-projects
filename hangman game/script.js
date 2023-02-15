const letterContainer = document.querySelector('#letter-container'),
optionsContainer = document.querySelector('#options-container'),
userInputSection = document.querySelector('#user-input-section'),
newGameContainer = document.querySelector('#new-game-container'),
newGameButton = document.querySelector('#new-game-button'),
canvas = document.querySelector('canvas'),
resultText = document.querySelector('#result-text');

let options = {
    fruits:["Apple",'Blueberry',"Mandarin","Pineapple","Pomegranate","Watermelon"],
    animals:["Hedgehog","Rhinoceros","Squirrel","Panther","Walrus","Zebra","Lion"],
    countries:["India","Pakisthan","Nepal","Bangladesh","Japan","China","Denmark"]
}

let count = 0;
let winCount = 0;

let chosenWord = "";

const displayOptions = () =>{
    optionsContainer.innerHTML = `<h1>Please Select An Option</h1>`
    let buttonCon = document.createElement('div');
    for(let value in options){
        buttonCon.innerHTML += `<button class="options" onclick=genrateWord('${value}')>${value}</button>`
    }
    optionsContainer.appendChild(buttonCon)

}

const genrateWord = (optionValue) =>{
    let optionsButtons = document.querySelectorAll('.options');
    optionsButtons.forEach(button=>{
        if(button.innerText.toLowerCase() == optionValue){
            button.classList.add('active');
        }
        button.disabled = true;
    })

    letterContainer.classList.remove('hide')
    userInputSection.innerText = ""

    let optionsArray = options[optionValue]
    chosenWord = optionsArray[Math.floor(Math.random() * optionsArray.length)]
    chosenWord = chosenWord.toUpperCase();

    console.log(chosenWord)
    let displayItem = chosenWord.replace(/./g,'<span class="dashes">_</span>')
    userInputSection.innerHTML = displayItem
}

const blocker = () =>{
    let optionsButtons = document.querySelectorAll('.options')
    let letterButtons = document.querySelectorAll('.letters');

    optionsButtons.forEach(button=>{
        button.disabled = true;
    })

    letterButtons.forEach(button=>{
        button.disabled = true;
    })
    newGameContainer.classList.remove('hide');
}

const initializer = () =>{
    winCount = 0;
    count = 0;

    userInputSection.innerHTML = ""
    optionsContainer.innerHTML =""
    letterContainer.classList.add('hide');
    newGameContainer.classList.add('hide');
    letterContainer.innerHTML = "   "

    for(let i = 65; i<91; i++){
        let button = document.createElement('button');
        button.classList.add('letters');
        button.innerText = String.fromCharCode(i);

        button.addEventListener("click",()=>{
            let charArray = chosenWord.split("");
            let dashes = document.querySelectorAll('.dashes');
            if(charArray.includes(button.innerText)){
                charArray.forEach((char,index)=>{
                    if(char == button.innerText){
                        dashes[index].innerText = char
                        winCount += 1;
                        if(winCount == charArray.length){
                            resultText.innerHTML = `<h2 class="win-msg">You win!</h2>
                            <p>The word was <span>${chosenWord}</span></p>`
                            blocker();
                        }
                    }
                })
            }
            else{
                count +=1 ;
                drawMan(count);
                if(count == 6){
                    resultText.innerHTML = `<h2 class="lose-msg">You Lose!</h2>
                            <p>The word was <span>${chosenWord}</span></p>`
                            blocker();
                }
            }
            button.disabled = true;
        })
        
        letterContainer.append(button)
    }

    displayOptions();
    let {initialDrawing} = canvasCreator();
    initialDrawing();
}

const canvasCreator = () =>{
    let context = canvas.getContext('2d');
    context.beginPath();
    context.strokeStyle = "#000";
    context.lineWidth = 2;

    const drwaLine = (fromX,fromY,toX,toY) =>{
        context.moveTo(fromX,fromY)
        context.lineTo(toX,toY);
        context.stroke();
    }

    const head = () =>{
        context.beginPath();
        context.arc(70,30,10,0,Math.PI * 2, true)
        context.stroke();
    }

    const body = () =>{
        drwaLine(70,40,70,80)
    }

    const leftArm = () =>{
        drwaLine(70,50,50,70)
    }

    const rightArm = () =>{
        drwaLine(70,50,90,70)
    }

    const leftLeg = () =>{
        drwaLine(70,80,50,110)
    }

    const rightLeg = () =>{
        drwaLine(70,80,90,110)
    }

    const initialDrawing = () =>{
        context.clearRect(0,0,context.canvas.width,context.canvas.height)

        // bottom line 
        drwaLine(10,130,130,130)
        // left line 
        drwaLine(10,10,10,131)
        // top line 
        drwaLine(10,10,70,10)
        // small line 
        drwaLine(70,10,70,20)
    }

    return {initialDrawing,head,body,leftArm,leftLeg,rightArm,rightLeg};
}

const drawMan = (count) =>{
    let {head,body,leftArm,leftLeg,rightArm,rightLeg} = canvasCreator();
    switch(count){
        case 1:
            head();
            break;
        case 2:
            body();
            break;
        case 3:
            leftArm();
            break;
        case 4:
            rightArm();
            break;
        case 5:
            leftLeg();
            break;
        case 6:
            rightLeg();
            break;
        default:
            break;
    }
}

newGameButton.addEventListener('click',initializer)
window.onload = initializer();