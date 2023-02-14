const optionsButton = document.querySelectorAll('.option-button'),
advancedOptionButton = document.querySelectorAll('.adv-option-button'),
fontName = document.querySelector('#fontName'),
fontSizeRef = document.querySelector('#fontSize'),
writingArea = document.querySelector('#text-input'),
linkButton = document.querySelector('#createLink'),
alignButtons = document.querySelectorAll('.align'),
spacingButtons = document.querySelectorAll('.spacing'),
formatButtons = document.querySelectorAll('.format'),
scriptButtons = document.querySelectorAll('.script');

let fontList = ["Arial","Verdana","Times New Roman","Garamond","Georgia","Courier New","cursive"];

const initliazer = () =>{
    higlighter(alignButtons,true)
    higlighter(spacingButtons,true)
    higlighter(formatButtons,false)
    higlighter(scriptButtons,true)

    fontList.map(value=>{
        let option = document.createElement('option');
        option.value = value
        option.innerHTML = value
        fontName.appendChild(option)
    })

    for(let i = 1; i<= 7; i++){
        let option = document.createElement('option')
        option.value = i
        option.innerHTML = i;
        fontSizeRef.appendChild(option)
    }

    fontSizeRef.value = 3;
}

//main logic 
const modifyText = (command, defaultUi, value) =>{
    document.execCommand(command,defaultUi,value)
}

optionsButton.forEach(button=>{
    button.addEventListener('click',()=>{
        modifyText(button.id,false,null)
    })
})

advancedOptionButton.forEach(button=>{
    button.addEventListener('change',()=>{
        modifyText(button.id,false,button.value)
    })
})

linkButton.addEventListener('click',()=>{
    let userLink = prompt('Enter a URL')
    if(/http/i.test(userLink)){
        modifyText(linkButton.id,false,userLink)
    }else{
        userLink = "http://" + userLink
        modifyText(linkButton.id,false,userLink)
    }
})

const higlighter = (className, needsRemoval) =>{
    className.forEach((button)=>{
        button.addEventListener('click',()=>{
            if(needsRemoval){
                let alreadyActive = false;
                if(button.classList.contains('active')){
                    alreadyActive = true;
                }
                higlighterRemover(className);
                if(!alreadyActive){
                    button.classList.add('active')
                }
            }
            else{
                button.classList.toggle('active');
            }
        })
    })
}

const higlighterRemover = (className)=>{
    className.forEach(button=>{
        button.classList.remove('active')
    })
}

window.onload = initliazer();