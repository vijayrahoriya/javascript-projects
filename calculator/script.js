const screen = document.querySelector('.screen');
const btns = document.querySelectorAll('button');
let screenvalue = '';

for(let item of btns){
    item.addEventListener('click',(e)=>{
        buttonText = e.target.innerText;
        if(buttonText == 'X'){
            buttonText = '*';
            screenvalue += buttonText;
            screen.value = screenvalue;
        }
        else if(buttonText == 'C'){
            screenvalue = '';
            screen.value = screenvalue;
        }
        
        else if(buttonText == 'sin'){
            var x = screen.value;
            x = x * Math.PI/180;
            screen.value = Math.sin(x);
            screenvalue = screen.value
        }
        else if(buttonText == 'cos'){
            var x = screen.value;
            x = x * Math.PI/180;
            screen.value = Math.cos(x);
            screenvalue = screen.value
        }
        else if(buttonText == 'tan'){
            var x = screen.value;
            x = x * Math.PI/180;
            screen.value = Math.tan(x);
            screenvalue = screen.value
        }
        else if(buttonText == 'DEL'){
            screen.value = screen.value.slice(0,-1)
            screenvalue = screen.value
        }
        else if(buttonText == '='){
            screen.value = eval(screenvalue);
        }
        else{
            screenvalue += buttonText;
            screen.value = screenvalue;
        }
    })
}